import React from 'react'
import { connect } from 'react-redux'
import classes from './form.module.scss'
import Rater from 'react-star-ratings';
import { handleInput, changeRating, formSubmit } from './functions'



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
        updateFeedbacks: (feedbacks) => { dispatch({ type: "UPDATE_FEEDBACKS", data: feedbacks }) },
        updateTrends: (dataset) => { dispatch({ type: "UPDATE_TRENDS", data: dataset }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(form)