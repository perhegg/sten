require('../spec.helper')
require('../src/index.js')

const { Dice } =  require('../spec.helper')

describe('Dice', () => {
    
    let dice = new Dice
    
    

    it('returns Rock wins if random number equals to zero', () => {
        sinon.stub(Math, 'random').returns()
        expect(('ss')).to.eql ('')
    })})


