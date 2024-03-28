const pessoas = [
    { nome: 'Junior', idade: 23 },
    { nome: 'Mariana', idade: 25 },
    { nome: 'Joao', idade: 30 },
    { nome: 'Roberta', idade: 35 }
  ];

const filtroIdade = (pessoas, idadeMin) => {
    return pessoas.filter(pessoa => pessoa.idade >= idadeMin);
  };

  
  const idadeMin = 25;
  const filtroMin = filtroIdade(pessoas, idadeMin);
  
 filtroMin.forEach(pessoa => {
    console.log(pessoa.nome + ' tem ' + pessoa.idade + ' anos.');
  });