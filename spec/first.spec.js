require('../spec.helper')
require('../src/index.js')

const { Dice } =  require('../spec.helper')

describe('Dice', () => {
    let dice = new Dice
    
    

    it('should equal tie lose victory', () => {
        
        expect(dice.check(2)).to.eql("hej")
        
        
    })
})


