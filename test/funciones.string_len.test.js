const chai = require('chai');
const expect = chai.expect;

const funciones = require('../src/funciones');

describe('funciones',() => {
    describe('string', () =>{
        it('string lenght',() =>{
            expect(funciones.string_len("")).to.equal(0);
            expect(funciones.string_len("lorem")).to.equal(5);
            expect(funciones.string_len("impsum")).to.equal(6);
            expect(funciones.string_len("uno")).to.equal(3);
            expect(funciones.string_len("cuatro")).to.equal(6);
            expect(funciones.string_len("z")).to.equal(1);
        })
    })
})