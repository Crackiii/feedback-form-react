import React from 'react'
import classes from './feedback.module.scss'

const feedback = (props) => {
    return (
        <div className={classes.Feedback}>
            <div className={classes.FeedbackImg}>
                <img src={'https://i.ya-webdesign.com/images/funny-png-avatar-2.png'} />
            </div>
            <div className={classes.User}>
                <div className={classes.Username}>Nadeem Ahmad</div>
                <div className={classes.Comment}>
                    I am a comment from Nadeem Ahmad Khan Swaty hehe !
                    </div>
            </div>
        </div>

    )
}

export default feedback