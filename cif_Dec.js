function calcularMedia() {
    // Solicitar as três notas do aluno
    let nota1 = parseFloat(prompt("Insira a primeira nota por favor!: "));
    let nota2 = parseFloat(prompt("Insira a segunda nota por favor!: "));
    let nota3 = parseFloat(prompt("Insira a terceira nota por favor!: "));

    // Calcular a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Mostrar a média
    console.log(A média do aluno será: ${media.toFixed(2)});

    // Verificar se o aluno foi aprovado ou está em recuperação
    if (media >= 7) {
        console.log("O aluno foi aprovado!");
    } else {
        console.log("O aluno está em recuperação.");
    }
}

// Executar a função
calcularMedia();