
// Exercicio!!! 

// fazer IF e ELSE .
// imprimindo as seguintes mensagens. 
// voce é uma crianca 
// voce é aborecente 
// voce é adolecente 
// voce é adulto 
// voce é idoso 
// idade invalida 

// ##### NAO PODE ULTILIZAR && || ####

const idade = parseInt(prompt("Qual é a sua idade?"))

if (idade < 18){
    document.write("Você ainda é uma crianca.")
}
else if (idade = 18){
    document.write("Você tem 18 anos")
}
else if(idade > 18 && idade < 21){
    document.write("Você é adolescente")
}
else if(idade > 21 && idade < 65){
    document.write("Você é adulto")
}
else if(idade > 65){
    document.write("Você é idoso")
}
else {
    document.write("Digite uma idade válida")
}