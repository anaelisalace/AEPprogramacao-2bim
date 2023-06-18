import {describe, test, expect} from '@jest/globals'
import {Produto, chooseRandomProducts, getRandomObjects} from '../src/atividades/TDD/randomArrayValue'

describe('Escolhendo Produto Aleatorio', () => {
    test('Retorna um array de produtos', () => {  
        const produtos1: Produto[] = [
            { nome: "Caneta", qtde: 10, preco: 7.99 },
            { nome: "Impressora", qtde: 0, preco: 649.5 },
            { nome: "Caderno", qtde: 4, preco: 27.1 },
            { nome: "Lapis", qtde: 3, preco: 5.82 },
            { nome: "Tesoura", qtde: 1, preco: 19.99 },
            { nome: "Estojo", qtde: 7, preco: 9.99 },
            { nome: "Teclado", qtde: 2, preco: 609.99 },
            { nome: "Tenis", qtde: 3, preco: 350.99 },
            { nome: "Fone", qtde: 5, preco: 198.99 },
            { nome: "Mochila", qtde: 15, preco: 150.99 },
          ];

          expect(Array.isArray(chooseRandomProducts(produtos1, 3))).toBe(true);
          

    })
})

describe('Pegando Objeto Aleatorio', () => {
    test('Retorna um array de produtos', () => {  
        const produtos1: any[] = [
            { nome: "Caneta", qtde: 10, preco: 7.99 },
            { nome: "Impressora", qtde: 0, preco: 649.5 },
            { nome: "Caderno", qtde: 4, preco: 27.1 },
            { nome: "Lapis", qtde: 3, preco: 5.82 },
            { nome: "Tesoura", qtde: 1, preco: 19.99 },
            { nome: "Estojo", qtde: 7, preco: 9.99 },
            { nome: "Teclado", qtde: 2, preco: 609.99 },
            { nome: "Tenis", qtde: 3, preco: 350.99 },
            { nome: "Fone", qtde: 5, preco: 198.99 },
            { nome: "Mochila", qtde: 15, preco: 150.99 },
          ];

          expect(Array.isArray(getRandomObjects(produtos1, 3))).toBe(true);
         

    })
})