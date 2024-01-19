function calculadora(vitoria, derrota) {
    
    const saldoVitorias = vitoria - derrota;
  
    
    let nivel;
    if (vitoria < 10) {
      nivel = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
      nivel = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
      nivel = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
      nivel = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
      nivel = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Retorna o resultado em uma string
    return `O herói tem saldo de ${saldoVitorias} e está no nível ${nivel}`;
  }
  
  // Exemplo de uso da função
  const resultado = calculadora(25, 5);
  print(resultado);