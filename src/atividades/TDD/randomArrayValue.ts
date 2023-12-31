export interface Produto {
  nome: string,
  qtde: number,
  preco: number,
}

const produtos1: any = [
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

let produtosSortidos: any = [];

while (produtosSortidos.length < 3) {
  let randomNumber = Math.floor(Math.random() * produtos1.length);

  if (!produtosSortidos.includes(produtos1[randomNumber])) {
    produtosSortidos.push(produtos1[randomNumber]);
  }
}

// usar essa função para a atividade
export function getRandomObjects(array, numberOfRandomObjects) {
  let result: any = [];
  while (result.length < numberOfRandomObjects) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomObject: any = array[randomIndex];
    if (!result.includes(randomObject)) {
      result.push(randomObject);
    }
  }
  return result;
}

export function chooseRandomProducts(productList, itensQuantity) {
  let randomProducts: any = [];

  while (randomProducts.length < itensQuantity) {
    let randomNumber = Math.floor(Math.random() * productList.length);
    let checkObjectValue = false;
    for (let i = 0; i < randomProducts.length; i++) {
      
      if (randomProducts[i] === productList[randomNumber]) {
        checkObjectValue = true;
      }
    }
    if (!checkObjectValue) randomProducts.push(productList[randomNumber]);
  }
  return randomProducts;
}


