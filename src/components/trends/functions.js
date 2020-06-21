const getDataSets = (feedbacks, props) => {

    let dates = feedbacks
        .map(f => new Date(f.createdAt).getDate()).sort()
    let occurrence = dates
        .filter((value, index, arr) => arr.indexOf(value) === index)
        .map(item => ({ _d: item, _o: dates.filter(date => date === item).length }))

    let labels = []
    let values = []

    occurrence.forEach(obj => {
        labels.push(obj._d)
        values.push(obj._o)
    })
    return {
        labels: labels,
        values: values
    }
}

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



module.exports = { getDataSets, setChartOptions }