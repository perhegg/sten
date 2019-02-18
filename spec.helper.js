const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require('fs');
let dice = fs.readFileSync('./src/index.js');
eval( dice + `\nexports.Dice = Dice;`)