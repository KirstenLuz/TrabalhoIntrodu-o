function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triângulo: ");
  const altura = prompt("Informe a altura do triângulo: ");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Informe a base do retângulo: ");
  const altura = prompt("Informe a altura do retângulo: ");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado: ");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "));
  const altura = prompt("Informe a altura do trapézio: ");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo: "));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora geométrica\n" +
      "1. Área do triângulo\n" +
      "2. Área do retângulo\n" +
      "3. Área do quadrado\n" +
      "4. Área do trapézio\n" +
      "5. Área do círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = " ";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida!");
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
