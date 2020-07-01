import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import classes from './trends.module.scss'
import { Line } from 'react-chartjs-2';
import { __fetch } from '../../services/fetch'
import { getDataSets, setChartOptions } from './functions'


const getFeedbacks = async (props) => {
    const feedbacks = await __fetch('/get_feedbacks', 'GET', null)
    props.updateTrends(getDataSets(feedbacks, props))
}

const Trends = (props) => {

    useEffect(() => {
        getFeedbacks(props)
        setChartOptions(props)
    }, [])

    return (
        <div className={classes.Background}>
            <div className={classes.TrendsHead} data-testid='trend-head'>Daily Trends</div>
            <div className={classes.ChartWrapper}>
                <Line width={600} height={270} data={setChartOptions(props).data} options={setChartOptions(props).options} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trends: state.trends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTrends: (dataset) => { dispatch({ type: "UPDATE_TRENDS", data: dataset }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trends)