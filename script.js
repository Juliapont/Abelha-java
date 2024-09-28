function SolicitarDados(){
    //Solicitar o nome do usuário
    let nome =prompt('Qual é o seu nome?');
    //Solicitar a idade do usuário
    let idade= prompt("Qual é a sua idade?");
    //Exibe a saudação
    alert("Oie, " + nome + "! Você tem" + idade + " anos, correto?");
    //Motra os dados no console
    console.log("Nome do Usário:", nome);
    console.log("Idade do usuário:", idade);
}