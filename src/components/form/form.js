import React from 'react'
import { connect } from 'react-redux'

const handleInput = (event, props) => {
    props.updateFormState({
        ...props.form,
        [event.target.name]: event.target.value
    })
}

const form = (props) => {
    return (
        <form>
            <input type='text' name='name' value={props.form.name} onChange={(event) => handleInput(event, props)} />
            <input type='email' name='email' value={props.form.email} onChange={(event) => handleInput(event, props)} />
            <input type='number' name='rating' value={props.form.rating} onChange={(event) => handleInput(event, props)} />
            <textarea type='text' name='comment' value={props.form.comment} onChange={(event) => handleInput(event, props)} ></textarea>
        </form >
    )
}

const mapStateToProps = (state) => {
    return {
        form: state.form
    }
}

const mapDispatchToProps = (dispach) => {
    return {
        updateFormState: (form) => { dispach({ type: "UPDATE_FORM", data: form }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(form)