const moment = require('moment')

const toFormat = (date, format) => {
  if (date === 'now') date = moment()
  return date ? moment(date).format(format) : undefined
}

const toMysqlDate = (date) => {
  return toFormat(date, 'YYYY-MM-DD')
}

const toMysqlDateTime = (datetime) => {
  return toFormat(datetime, 'YYYY-MM-DD HH:mm:ss')
}

/**
 *
 * Example: const date = addToMysqlNow(1, 'hour')
 *
 * @param dur1 int amount of the duration
 * @param dur2 string type of the duration
 * @returns {string}
 */
const addToMysqlNow = (dur1, dur2) => {
  return moment().add(dur1, dur2).format('YYYY-MM-DD HH:mm:ss')
}

const toDate = (date) => {
  return toFormat(date, 'MMM DD, YYYY')
}

const toDateTime = (datetime) => {
  return toFormat(datetime, 'lll')
}

const toTime = (time) => {
  return toFormat(time, 'LT')
}

const toRelative = (datetime) => {
  return toFormat(datetime).fromNow()
}

const dateExpired = (date) => {
  return moment().isAfter(date)
}

module.exports = {
  toFormat,
  toMysqlDate,
  toMysqlDateTime,
  toDate,
  toDateTime,
  toTime,
  toRelative,
  addToMysqlNow,
  dateExpired
}
