module.exports = function (str = '', keyValSym = '=', sym = '; ') {
    let obj = {}
    let arr = str.split(sym)
    arr.forEach(item => {
        let pair = item.split(keyValSym)
        let key = pair[0]
        let value = pair[1]
        obj[key] = value
    })
    return obj
}