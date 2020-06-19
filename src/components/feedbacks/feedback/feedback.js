import React from 'react'
import classes from './feedback.module.scss'
import Rater from 'react-star-ratings';

const feedback = (props) => {
    return (
        props.data.map(feedback => {
            return (
                <div className={classes.Feedback} key={feedback.id}>
                    <div className={classes.FeedbackImg}>
                        <img src={feedback.avatar} />
                    </div>
                    <div className={classes.User}>
                        <div className={classes.NameRating}>
                            <div className={classes.Username}>{feedback.name}</div>
                            <Rater
                                numberOfStars={5}
                                rating={feedback.rating}
                                starRatedColor={'gold'}
                                starHoverColor={'gold'}
                                starEmptyColor={'#d5d5d5'}
                                starDimension={'20px'}
                                starSpacing={'0px'} />
                        </div>
                        <div className={classes.Comment}>{feedback.message}</div>
                    </div>
                </div>
            )
        })

    )
}

export default feedback