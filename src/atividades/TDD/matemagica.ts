export class Matemagica {
    sum(a, b) {

        if(typeof a !== 'number' || typeof b !== 'number') {
            return 'Você só pode realizar somas com operadores numéricos!'
        }
        return a + b
    }

    subtracao(a, b) {

        if(typeof a !== 'number' || typeof b !== 'number') {
            return 'Você só pode realizar subtrações com valores numéricos!'
        }
        return a - b
    }

    multiplicacao(a, b) {

        if(typeof a !== 'number' || typeof b !== 'number') {
            return 'Você só pode realizar multiplicação com valores numéricos!'
        }
        return a * b
    }

    divisao(a, b) {

        if(typeof a !== 'number' || typeof b !== 'number') {
            return 'Você só pode realizar subtrações com valores numéricos!'
        }

        if (b === 0) {
            return 'Divisão por zero é indefinida!'
        }
        return a / b
    }
}