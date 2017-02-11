function lastOfList (list) {
  if (typeof list === 'object' && list instanceof Array) {
    return list[list.length - 1]
  } else if (typeof list === 'string') {
    return list.slice(-1)
  } else {
    return arguments[arguments.length - 1]
  }
}

module.exports = lastOfList
