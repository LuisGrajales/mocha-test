const chai = require('chai');
const expect = chai.expect;

const funciones = require('../src/funciones');

let hoy = new Date()
let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

describe('funciones',() => {
    describe('Hora', () =>{
        it('Hora actual',() =>{
            expect(funciones.hora()).to.equal(hora);
            expect(funciones.hora()).to.equal(hora);
            expect(funciones.hora()).to.equal(hora);
            expect(funciones.hora()).to.equal(hora);
            expect(funciones.hora()).to.equal(hora);
            expect(funciones.hora()).to.equal(hora);
            expect(funciones.hora()).to.equal(hora);
        })
    })
})