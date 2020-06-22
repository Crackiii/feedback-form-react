import salert from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { __fetch } from '../../services/fetch'
import { getDataSets } from '../trends/functions'

const handleInput = (event, props) => {
    props.updateFormState({
        ...props.form,
        [event.target.name]: event.target.value
    })
}

const changeRating = (value, name, props) => {
    handleInput({
        target: {
            name: name,
            value: parseInt(value)
        }
    }, props)
}

const getFeedbacks = async (props) => {
    const feedbacks = await __fetch('/get_feedbacks', 'GET', null)
    props.updateFeedbacks(feedbacks.reverse())
    props.updateTrends(getDataSets(feedbacks, props))
}

const isValidForm = (props) => {
    return Object
        .values(props.form)
        .map(value => (value === '' || value === 0) ? false : true)
        .includes(false) ? false : true
}

const formSubmit = async (event, props) => {

    event.preventDefault()
    if (isValidForm(props)) {
        const r = await __fetch('/add_user', 'POST', props.form)
        if (r.success) {
            props.reset()
            getFeedbacks(props)
            if (r.new_user) {
                salert.fire({
                    title: `Success !`,
                    // icon: `success`,
                    text: `Welcome ${props.form.name}, Your feedback is added.`,
                    imageUrl: r.avatar,
                    imageHeight: 200,
                    imageAlt: `${props.form.name}`
                })
            }
            else {
                salert.fire({
                    title: `Success !`,
                    // icon: `success`,
                    text: `Welcome back ${props.form.name}, Your feedback is added.`,
                    imageUrl: r.avatar,
                    imageHeight: 200,
                    imageAlt: `${props.form.name}`
                })
            }
        }
    } else {
        salert.fire({
            title: `Error !`,
            icon: `error`,
            text: `All of the fields are required !`,
        })
    }
}

const exportFunctions = {
    handleInput,
    changeRating,
    getFeedbacks,
    isValidForm,
    formSubmit,
    __fetch
};


export default exportFunctions