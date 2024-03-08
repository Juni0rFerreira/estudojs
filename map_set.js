// Map

let mapa = new Map();

mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");

console.log(mapa.get("chave1")); 

// Set

let conjunto = new Set();

conjunto.add("elemento1");
conjunto.add("elemento2");
conjunto.add("elemento1"); 

console.log(conjunto.has("elemento3"));
console.log(conjunto.has("elemento2")); 
console.log(conjunto.has("elemento1")); 
console.log(conjunto.size); 

