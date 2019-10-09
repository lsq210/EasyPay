function getUrlQuery (url) {
  var queryStr = url.split('?')[1]
  var query = {}
  if (queryStr) {
    var pairs = queryStr.split('&')
    pairs.forEach(pair => {
      var keyValue = pair.split('=')
      query[keyValue[0]] = keyValue[1]
    })
  }
  return query
}

export default getUrlQuery
