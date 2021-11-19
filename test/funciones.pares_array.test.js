const chai = require('chai');
const expect = chai.expect;

const funciones = require('../src/funciones');

describe('funciones',() => {
    describe('pares_array', () =>{
        it('numeros pares',() =>{
            expect(funciones.pares_array([-2,2,4,6,8,10])).to.be.true;
        })
        it('numeros impares',() =>{
            expect(funciones.pares_array([-1,1,3,5,7,9])).to.be.false;
        })
    })
})