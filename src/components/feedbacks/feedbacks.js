import React from 'react';
import { connect } from 'react-redux'
import Feedback from './feedback/feedback'

const app = (props) => {
    return <Feedback data={props.f} />
}

const mapStateToProps = (state) => {
    return {
        f: state.feedbacks
    }
}

export default connect(mapStateToProps)(app);