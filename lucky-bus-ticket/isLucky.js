function isLucky (ticket) {
  if (ticket.length === 6 && !/[a-zA-Z]/g.test(ticket)) {
    const sum = (a, b) => parseInt(a, 10) + parseInt(b, 10)
    const first = ticket.split('').slice(0, 3).reduce((a, b) => sum(a, b), 0)
    const second = ticket.split('').slice(-3).reduce((a, b) => sum(a, b), 0)

    return first === second
  }

  return false
}

module.exports = isLucky
