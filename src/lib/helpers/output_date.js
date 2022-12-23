export const get_date_string = (/** @type {Date} */ timestamp) => {
    let date = timestamp.toDateString()
    let hour = timestamp.getHours()
    let min = String(timestamp.getMinutes()).padStart(2, '0')
    return `${date} ${hour}:${min}`
}