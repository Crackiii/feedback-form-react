import React from 'react'
import classes from './feedback.module.scss'
import Rater from 'react-star-ratings';
import { getDateTime } from './functions'

const feedback = (props) => {

    return (
        props.data.length === 0 ? <h1 className={classes.NoFeedbacks} data-testid='no-feeds'>No Feedbacks yet !</h1> :

            props.data.map((feedback, i) => {
                return (
                    <div className={classes.Feedback} key={i}>
                        <div className={classes.FeedbackImg}>
                            <img src={feedback.user.avatar} alt={feedback.user.name} data-testid='img' />
                        </div>
                        <div className={classes.User}>
                            <div className={classes.NameRating}>
                                <div className={classes.Username} data-testid='name'>{feedback.user.name}</div>
                                <Rater
                                    numberOfStars={5}
                                    rating={feedback.rating}
                                    starRatedColor={'gold'}
                                    starHoverColor={'gold'}
                                    starEmptyColor={'#d5d5d5'}
                                    starDimension={'20px'}
                                    starSpacing={'0px'} />
                            </div>
                            <div className={classes.Comment} data-testid='comment'>{feedback.comment}</div>
                            <div className={classes.FeedbackTime} data-testid='time'>{getDateTime(feedback.createdAt)}</div>
                        </div>
                    </div>
                )
            })

    )
}

export default feedback