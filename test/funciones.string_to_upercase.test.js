const chai = require('chai');
const expect = chai.expect;

const funciones = require('../src/funciones');

describe('funciones',() => {
    describe('string to upercase', () =>{
        it('string a mayusculas',() =>{
            expect(funciones.string_to_upercase("Lorem")).to.equal("LOREM");
            expect(funciones.string_to_upercase("IpSuM")).to.equal("IPSUM");
            expect(funciones.string_to_upercase("DOLOR")).to.equal("DOLOR");
            expect(funciones.string_to_upercase("siT")).to.equal("SIT");
            expect(funciones.string_to_upercase("amet")).to.equal("AMET");
            expect(funciones.string_to_upercase("elIT")).to.equal("ELIT");

        })
    })
})