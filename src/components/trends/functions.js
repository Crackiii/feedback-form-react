export const getDataSets = (feedbacks, props) => {

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