const chai = require('chai');
const expect = chai.expect;

const funciones = require('../src/funciones');

describe('funciones',() => {
    describe('order array', () =>{
        it('numeros ordenados',() =>{
            expect(funciones.order_array([1,2,4,3])).to.eql([1,2,3,4]);
            expect(funciones.order_array([2,1,3,4])).to.eql([1,2,3,4]);
            expect(funciones.order_array([6,8,9,7])).to.eql([6,7,8,9]);
            expect(funciones.order_array([10,13,11,12])).to.eql([10,11,12,13]);
            expect(funciones.order_array([22,21,20,1])).to.eql([1,20,21,22]);
            expect(funciones.order_array([14,53,2,1])).to.eql([1,2,14,53]);
        })
    })
})