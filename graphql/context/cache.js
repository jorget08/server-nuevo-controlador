const NodeCache = require('node-cache')
const myCache = new NodeCache()

function createCache(key, value){
    myCache.set(key, value, 900)
}

function getCache(key){
    myCache.ttl(key, 900)
    return myCache.get(key)
}

module.exports = {
    createCache,
    getCache
}