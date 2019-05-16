module.exports = function (obj = {}, keyValSym = '=', sym = '; ') {
    let str = ''
    let keys = Object.keys(obj)
    keys.forEach(key => {
        let value = obj[key] || ''
        if (!str) {
            str += (key + keyValSym + value)
        } else {
            str += (sym + key + keyValSym + value)
        }
    })
    return str
}