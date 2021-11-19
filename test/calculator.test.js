const chai = require('chai');
const expect = chai.expect;

const calculator = require('../src/calculator');

describe('Calculator', () =>{
    describe('suma',()=>{
        it('suma de 2 numeros',() => {
            expect(calculator.add(2,2)).to.equal(4);
            expect(calculator.add(4,2)).to.equal(6);
            expect(calculator.add(9,2)).to.equal(11).to.be.a('number')
        });
    });
    
    describe('multiplicacion', ()=> {
        it('multiplicacion de 2 numeros',() =>{
            expect(calculator.multiply(2,2)).to.equal(4);
            expect(calculator.multiply(4,2)).to.equal(8);
            expect(calculator.multiply(9,2)).to.equal(18);
        });
    });    
    describe('division', ()=> {
        it('division de 2 numeros',() =>{
            expect(calculator.divide(2,2)).to.equal(1);
            expect(calculator.divide(4,2)).to.equal(2);
            expect(calculator.divide(9,2)).to.equal(4.5);
        });
    });
    describe('resta', ()=> {
        it('resta de 2 numeros',() =>{
            expect(calculator.substract(2,2)).to.equal(0);
            expect(calculator.substract(4,2)).to.equal(2);
            expect(calculator.substract(9,2)).to.equal(7);
        });
    });
});
