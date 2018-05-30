function fixTimezone() {
    let date = new Date()
    let timezone = date.getTimezoneOffset() * 60 * 1000
    return new Date(date.getTime() - timezone)
}

module.exports = fixTimezone