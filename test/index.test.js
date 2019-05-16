var expect = require('chai').expect
var obstr = require('../src/index')

describe('解析测试', function() {
    it('对象解析为字符串', function() {
        expect(obstr.stringify({name: 'Jhone', age: 6})).to.be.equal('name=Jhone; age=6')
    })
})

describe('字符化测试', function() {
    it('字符串解析为对象', function() {
        expect(obstr.parse('name=Jhone; age=6')).to.be.deep.equal({name: 'Jhone', age: '6'})
    })
})