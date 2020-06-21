export const getDateTime = (_date) => {

    let date = new Date(_date).toDateString()
    let time = new Date(_date).toTimeString().split(" ")[0].split(":")
    let hours = 0;
    let miniutes = 0
    let ampm = ''

    if (time[0] > 12) {
        ampm = 'pm'
        hours = time[0] - 12
    } else {
        ampm = 'am'
        hours = time[0]
    }

    return `${date}, at ${hours}:${time[1]} ${ampm}`

}