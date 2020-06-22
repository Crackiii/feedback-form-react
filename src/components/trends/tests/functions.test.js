import functions from '../functions'

describe('Trends', () => {
    let feedbacks = [{
        comment: "Testing it again.",
        createdAt: "2020-06-21T12:07:27.000Z",
        ratedBy: 1,
        rating: 2,
        user: {
            avatar: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png",
            name: "Nadeem Ahmad"
        }
    }]

    let props = {
        trends: {
            labels: [],
            values: []
        }
    }

    let options = {
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

    test('Should formate the feedbacks correctly', () => {
        expect(functions.getDataSets(feedbacks)).toEqual({
            labels: [21],
            values: [1]
        })
    })


    test('should return correct options', () => {
        expect(functions.setChartOptions(props)).toEqual(options)
    })
})
