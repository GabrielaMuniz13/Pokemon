var pokemon = parseInt(prompt("Digite 1 para Charmander, 2 para Bulbasaur e 3 para Jigglypuff "))

if(pokemon==1){
    resultado = "Errado. Tente Novamente!"
    document.write("<h2>"+resultado+"</h2>")
} else if(pokemon==2){
    resultado="Errado.Tente Novamente!"
    document.write("<h2>"+resultado+"</h2>")
} else if (pokemon == 3){
    resultado = "Parabéns. Você acertou!"
    document.write("<h2>"+resultado+"</h2>")
} else {
    document.write("<h2>"+"Opção Inválida"+"</h2>")
}


