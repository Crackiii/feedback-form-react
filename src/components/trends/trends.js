import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import classes from './trends.module.scss'
import { Line } from 'react-chartjs-2';
import { __fetch } from '../../services/fetch'
import { getDataSets } from './functions'
const setChartOptions = (props) => {
    return {
        data: {
            labels: props.trends.labels,
            datasets: [{
                label: 'Feedbacks',
                data: props.trends.values,
                backgroundColor: 'rgba(255, 99, 132, 0.0)',
                borderColor: '#4b4088',
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                backgroundColor: '#4b4088',
                titleFontFamily: "Roboto Slab",
                bodyFontFamily: "Roboto Slab",
                xPadding: 10,
                yPadding: 10,
                borderColor: '#4b4088',
                borderWidth: 1,
                backgroundColor: 'rgba(106, 79, 235, 0.77)',
                cornerRadius: 3
            },
            legend: {
                display: false
            },
            scales: {

                xAxes: [{
                    gridLines: {
                        display: true
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
}

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
            <div className={classes.TrendsHead}>Daily Trends</div>
            <div className={classes.ChartWrapper}>
                <Line width={60} height={27} data={setChartOptions(props).data} options={setChartOptions(props).options} />
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