var times = ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos'];
//               [0]            [1]          [2]         [3]

console.log(times[1]); //retorna a informação desejada
console.log(times.length); //retorna o tamanho
console.log(times); //retorna o tamanho e os dados do vetor
console.table(times); //retorna tudo em table para uma maior e melhor visualização

//Alterar dentro da variavel

times[2] = 'Flamengo';
console.table(times); //Ele vai retornar com [2] alterado para Flamengo