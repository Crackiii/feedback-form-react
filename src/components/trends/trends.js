import React from 'react'
import { connect } from 'react-redux'
import classes from './trends.module.scss'
import { Line } from 'react-chartjs-2';

const chartData = {
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Trends',
            data: [12, 19, 300, 5, 2, 3],
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

const trends = (props) => {
    console.log(props)

    return (
        <div className={classes.Background}>
            <div className={classes.TrendsHead}>Daily Trends</div>
            <div className={classes.ChartWrapper}>
                <Line width={60} height={27} data={chartData.data} options={chartData.options} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(trends)