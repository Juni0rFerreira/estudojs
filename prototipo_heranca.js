function Animal(nome) {
    this.nome = nome;
  }
  
  Animal.prototype.fazerBarulho = function() {
    console.log("Barulho genérico");
  };
  
  function Cachorro(nome, raca) {
    Animal.call(this, nome);
    this.raca = raca;
  }
  
  Cachorro.prototype = Object.create(Animal.prototype);
  Cachorro.prototype.constructor = Cachorro;
  
  Cachorro.prototype.fazerBarulho = function() {
    console.log("Au au!");
  };
  
  const meuCachorro = new Cachorro("Max", "Labrador");
  meuCachorro.fazerBarulho();