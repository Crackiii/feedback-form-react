import React from 'react'
import classes from './feedback.module.scss'
import Rater from 'react-star-ratings';
import { getDateTime } from './functions'

const feedback = (props) => {

    return (
        props.data.length === 0 ? <h1 className={classes.NoFeedbacks}>No Feedbacks yet !</h1> :

            props.data.map((feedback, i) => {
                return (
                    <div className={classes.Feedback} key={i}>
                        <div className={classes.FeedbackImg}>
                            <img src={feedback.user.avatar} alt={feedback.user.name} />
                        </div>
                        <div className={classes.User}>
                            <div className={classes.NameRating}>
                                <div className={classes.Username}>{feedback.user.name}</div>
                                <Rater
                                    numberOfStars={5}
                                    rating={feedback.rating}
                                    starRatedColor={'gold'}
                                    starHoverColor={'gold'}
                                    starEmptyColor={'#d5d5d5'}
                                    starDimension={'20px'}
                                    starSpacing={'0px'} />
                            </div>
                            <div className={classes.Comment}>{feedback.comment}</div>
                            <div className={classes.FeedbackTime}>{getDateTime(feedback.createdAt)}</div>
                        </div>
                    </div>
                )
            })

    )
}

export default feedback