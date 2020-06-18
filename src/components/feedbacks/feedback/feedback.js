import React from 'react'
import classes from './feedback.module.scss'


const feedback = (props) => {
    return (
        props.data.map((feedback, i) => {
            return <h3 className={classes.Feedback} key={i} >Child - {feedback.message}</h3>
        })

    )
}

export default feedback