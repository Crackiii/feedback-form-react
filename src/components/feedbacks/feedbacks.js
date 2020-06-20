import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Feedback from './feedback/feedback'
import classes from './feedbacks.module.scss'
import { __fetch } from '../../services/fetch'

const getFeedbacks = async (props) => {
    const feedbacks = await __fetch('/get_feedbacks', 'GET', null)
    props.updateFeedbacks(feedbacks.reverse())
}

const Feedbacks = (props) => {

    useEffect(() => {
        getFeedbacks(props)
    }, [])

    return (
        <div className={classes.Background}>
            {/* {props.data.map((feedback, i) => { */}
            {/* return ( */}
            <div className={classes.FeedbackHead}>
                Recent Comments
            </div>
            <div className={classes.FeedbackWrapper}>
                <Feedback data={props.f} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        f: state.feedbacks
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        updateFeedbacks: (feedbacks) => { dispatch({ type: "UPDATE_FEEDBACKS", data: feedbacks }) }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Feedbacks);