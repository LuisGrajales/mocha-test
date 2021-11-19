const chai = require('chai');
const expect = chai.expect;

const funciones = require('../src/funciones');

describe('funciones',() => {
    describe('pares', () =>{
        it('numeros pares',() =>{
            expect(funciones.pares(-2)).to.be.true;
            expect(funciones.pares(2)).to.be.true;
            expect(funciones.pares(4)).to.be.true;
            expect(funciones.pares(6)).to.be.true;
            expect(funciones.pares(8)).to.be.true;
            expect(funciones.pares(10)).to.be.true;
        })
        it('numeros impares',() =>{
            expect(funciones.pares(-1)).to.be.false;
            expect(funciones.pares(3)).to.be.false;
            expect(funciones.pares(5)).to.be.false;
            expect(funciones.pares(7)).to.be.false;
            expect(funciones.pares(9)).to.be.false;
            expect(funciones.pares(1)).to.be.false;
        })
    })
})