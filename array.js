let frutas = ["Maça", "Banana", "Uva"];

    console.log(frutas[0]); // Maçã
    console.log(frutas[1]); // Banana

let numeros = [1, 2, 3, 4]; // Forma mais comum
let vazio = [];             // Um array vazio
let misturado = ["Olá", 42, true]; // Pode misturar!

let games = ["Minecraft", "FIFA"];

// Adicionar no final
games.push("Fortinite");
// ["Minecraft", "FIFA", "Forinite"]

// Remover do começo

games.shift();
//["FIFA", "Fortinite"]

let frutas = ["Maçã", "Banana", "Uva"];
delete frutas[1];

console.log(frutas);


let frutas = ["Maça", "Banana", "Uva"];
let semBanana = frutas.filter(fruta => fruta !== "banana");




