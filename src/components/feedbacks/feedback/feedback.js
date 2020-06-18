import React from 'react'
import classes from './feedback.module.scss'

const feedback = (props) => {
    return (
        <div className={classes.Background}>
            {props.data.map((feedback, i) => {
                return <h3 className={classes.Feedback} key={i} >Child - {feedback.message}</h3>
            })}
        </div>
    )
}

export default feedback