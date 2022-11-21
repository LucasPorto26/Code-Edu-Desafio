const calculator = require('../function/calculator')
var expect = require('chai').expect;


describe('#calculator()', function() {

    context('without arguments', function() {
      it('should return 0', function() {
        expect(calculator.add(0,0)).to.equal(0)
      })
    })

    context('with number arguments', function() {
        it('should return sum of arguments', function() {
          expect(calculator.add(10,20)).to.equal(30)
        })
    
        it('should return argument when only one argument is passed', function() {
          expect(calculator.add(300,0)).to.equal(300)
        })
      })

  })