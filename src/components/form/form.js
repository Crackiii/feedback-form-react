import React from 'react'
import { connect } from 'react-redux'
import classes from './form.module.scss'
import Rater from 'react-star-ratings';
import salert from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { __fetch } from '../../services/fetch'

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
}

const formSubmit = async (event, props) => {

    event.preventDefault()

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

}

const form = (props) => {
    return (
        <div className={classes.Form}>
            <div className={classes.FormHead}><h3 >GIVE YOUR FEEDBACK</h3></div>
            <form className={classes.Form} onSubmit={(event) => formSubmit(event, props)}>
                <input type='text' placeholder='Name' name='name' value={props.form?.name} onChange={(event) => handleInput(event, props)} autoComplete="false" />
                <input type='email' placeholder='Email' name='email' value={props.form?.email} onChange={(event) => handleInput(event, props)} autoComplete="false" />
                {/* <input type='hidden' name='rating' value={props.form.rating} /> */}
                <div className={classes.RaterWrap}>
                    <div className={classes.RaterText}>Rating</div>
                    <Rater
                        name={'rating'}
                        numberOfStars={5}
                        rating={props.form?.rating}
                        starRatedColor={'gold'}
                        starHoverColor={'gold'}
                        starEmptyColor={'#1a7451'}
                        isSelectable={true}
                        hoverMode={true}
                        starDimension={'25px'}
                        starSpacing={'0px'}
                        changeRating={(v, n) => changeRating(v, n, props)} />
                    <div className={classes.RaterText}>( {props.form?.rating} )</div>
                </div>
                <textarea type='text' placeholder='Comment' name='comment' value={props.form?.comment} onChange={(event) => handleInput(event, props)} autoComplete="false" ></textarea>
                <button className={classes.FormButton}>Submit</button>
            </form >
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        form: state.form
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormState: (form) => { dispatch({ type: "UPDATE_FORM", data: form }) },
        reset: () => { dispatch({ type: "RESET_FORM" }) },
        updateFeedbacks: (feedbacks) => { dispatch({ type: "UPDATE_FEEDBACKS", data: feedbacks }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(form)