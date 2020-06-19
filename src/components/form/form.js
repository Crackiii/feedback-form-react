import React from 'react'
import { connect } from 'react-redux'
import classes from './form.module.scss'
import Rater from 'react-star-ratings';

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

const formSubmit = (event, props) => {
    event.preventDefault()
    console.log(props.form)

    fetch('http://localhost:3001/add_user', {
        method: 'POST',
        body: JSON.stringify({
            ...props.form
        }),
        headers: { "Content-Type": "application/json" }
    }).then(j => j.json())
        .then(r => console.log(r))

}

const form = (props) => {
    return (
        <div className={classes.Form}>
            <div className={classes.FormHead}><h3 >GIVE YOUR FEEDBACK</h3></div>
            <form className={classes.Form} onSubmit={(event) => formSubmit(event, props)}>
                <input type='text' placeholder='Name' name='name' value={props.form.name} onChange={(event) => handleInput(event, props)} autoComplete="false" />
                <input type='email' placeholder='Email' name='email' value={props.form.email} onChange={(event) => handleInput(event, props)} autoComplete="false" />
                {/* <input type='hidden' name='rating' value={props.form.rating} /> */}
                <div className={classes.RaterWrap}>
                    <div className={classes.RaterText}>Rating</div>
                    <Rater
                        name={'rating'}
                        numberOfStars={5}
                        rating={props.form.rating}
                        starRatedColor={'gold'}
                        starHoverColor={'gold'}
                        starEmptyColor={'#1a7451'}
                        isSelectable={true}
                        hoverMode={true}
                        starDimension={'25px'}
                        starSpacing={'0px'}
                        changeRating={(v, n) => changeRating(v, n, props)} />
                    <div className={classes.RaterText}>( {props.form.rating} )</div>
                </div>
                <textarea type='text' placeholder='Comment' name='comment' value={props.form.comment} onChange={(event) => handleInput(event, props)} autoComplete="false" ></textarea>
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

const mapDispatchToProps = (dispach) => {
    return {
        updateFormState: (form) => { dispach({ type: "UPDATE_FORM", data: form }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(form)