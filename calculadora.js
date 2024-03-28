function calculadoraBasica(n1, n2, operadores) {
    switch (operadores) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case '*':
        return n1 * n2;
      case '/':
        if (n2 !== 0) {
          return n1 / n2;
        } else {
          return 'Erro: Divisão por zero';
        }
      default:
        return 'Operador inválido';
    }
  }
  
  function calculate(n1, n2, operadores) {
    var result = calculadoraBasica(n1, n2, operadores);
    return result;
  }
  
  var n1 = 10;
  var n2 = 5;
  var operadores = '+';
  
  var resultado = calculate(n1, n2, operadores);
  console.log("Resultado:", resultado);

