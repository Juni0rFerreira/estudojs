let pessoa = {
    nome: "João",
    idade: 25,
    saudacao: function() {
      console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
  };

console.log(pessoa.nome);
pessoa.saudacao(); 

// --
let carro = {
    _modelo: "Fusca",
    get modelo() {
      return this._modelo;
    },
    set modelo(novoModelo) {
      this._modelo = novoModelo;
    }
  };
  
  console.log(carro.modelo);
  carro.modelo = "Civic";
  console.log(carro.modelo);
  
