import React from 'react';
import { connect } from 'react-redux'
import Feedback from './feedback/feedback'
import classes from './feedbacks.module.scss'

const app = (props) => {
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

export default connect(mapStateToProps)(app);