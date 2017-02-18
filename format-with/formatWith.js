function formatWith (s) {
  return function () {
    const args = arguments

    return s.replace(/{(\d+)}/g, (match, number) => {
      return typeof args[number] !== 'undefined' ? args[number] : match
    })
  }
}

module.exports = formatWith
