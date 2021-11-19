const chai = require('chai');
const expect = chai.expect;

const funciones = require('../src/funciones');

describe('funciones',() => {
    describe('dia', () =>{
        it('numero a dias de la semana',() =>{
            expect(funciones.numero_to_day(1)).to.equal("Domingo");
            expect(funciones.numero_to_day(2)).to.equal("Lunes");
            expect(funciones.numero_to_day(3)).to.equal("Martes");
            expect(funciones.numero_to_day(4)).to.equal("Miercoles");
            expect(funciones.numero_to_day(5)).to.equal("Jueves");
            expect(funciones.numero_to_day(6)).to.equal("Viernes");
            expect(funciones.numero_to_day(7)).to.equal("Sabado");
        })
    })
})