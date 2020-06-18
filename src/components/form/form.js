import React from 'react'
import { connect } from 'react-redux'
import classes from './form.module.scss'

const handleInput = (event, props) => {
    props.updateFormState({
        ...props.form,
        [event.target.name]: event.target.value
    })
}

const form = (props) => {
    return (
        <div className={classes.Form}>
            <div className={classes.FormHead}><h3 >GIVE YOUR FEEDBACK</h3></div>
            <form className={classes.Form}>
                <input type='text' placeholder='Name' name='name' value={props.form.name} onChange={(event) => handleInput(event, props)} />
                <input type='email' placeholder='Email' name='email' value={props.form.email} onChange={(event) => handleInput(event, props)} />
                <input type='number' placeholder='Rating' name='rating' value={props.form.rating} onChange={(event) => handleInput(event, props)} />
                <textarea type='text' placeholder='Comment' name='comment' value={props.form.comment} onChange={(event) => handleInput(event, props)} ></textarea>
            </form >
        </div>
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