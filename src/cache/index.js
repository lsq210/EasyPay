import db from 'storejs'

var cache = {}

cache.get = (key, defaultValue = null) => {
  if (db.has(key)) {
    return db.get(key)
  } else {
    return defaultValue
  }
}

cache.set = (key, value) => {
  db.set(key, value)
}

cache.clear = () => {
  db.clear()
}

export default cache
