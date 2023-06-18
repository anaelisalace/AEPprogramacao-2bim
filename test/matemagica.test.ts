import {describe, test, expect} from '@jest/globals'
import { Matemagica } from '../src/atividades/TDD/matemagica'

describe('Somatórias', () => {
    test('Deve retornar a soma de dois valores numéricos', () => {
        const matemagica = new Matemagica()

        expect(matemagica.sum(1, 2)).toBe(3)
    })

    test('Deve retornar um erro ao tentar somar um número e uma string', () => {
        const matemagica = new Matemagica()
        expect(matemagica.sum('oi', 1)).toBe('Você só pode realizar somas com operadores numéricos!')
    })
})

describe('Subitração', () => {
    test('Retorna a subtração de dois valores numéricos', () => {
        const matemagica = new Matemagica()
        expect(matemagica.subtracao(1, 2)).toBe(-1);
    })

    test('Retorna um erro ao realizar uma subtração de um valores numéricos com um string', () => {
        const matemagica = new Matemagica()
        expect(matemagica.subtracao('sub', 1)).toBe('Você só pode realizar subtrações com valores numéricos!')
    })
})

describe('Multiplicação', () => {
    test('Retorna a multiplicação de dois valores numéricos', () => {
        const matemagica = new Matemagica()
        expect(matemagica.multiplicacao(5, 10)).toBe(50);
    })

    test('Retorna um erro ao realizar a multiplicação de um valores numéricos com um string', () => {
        const matemagica = new Matemagica()
        expect(matemagica.multiplicacao('sub', 1)).toBe('Você só pode realizar multiplicação com valores numéricos!')
    })
})

describe('Divisão', () => {
    test('Retorna a divisão de dois valores numéricos', () => {
        const matemagica = new Matemagica()
        expect(matemagica.divisao(10, 5)).toBe(2);
    })

    test('Retorna um erro ao realizar a divisão de um valores numéricos com um string', () => {
        const matemagica = new Matemagica()
        expect(matemagica.divisao('sub', 1)).toBe('Você só pode realizar subtrações com valores numéricos!')
    })

    test('Retorna um erro ao realizar a divisão por zero', () => {
        const matemagica = new Matemagica()
        expect(matemagica.divisao(10, 0)).toBe('Divisão por zero é indefinida!')
    })
})