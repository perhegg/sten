const { Stone } = require('../spec.helper')

describe('Stone', () => {
 let stone = new Stone({
    x = '1',
    y = '1'
 })

it('should return Tie!')
    expect(Stone()).to.equal('Tie!')
})
it('should return Victory!')
    expect(Stone()).to.equal('Victory!')
it('should return Lose!')
    expect(Stone()).to.equal('Lose!')
