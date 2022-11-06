// var i, numero, anterior;
// anterior = 0;
// valor=1;
// numero = prompt("Digite o número para saber seu equivalente na sequência de Fibonacci");

// while(i<=numero){
//     valor = valor+anterior;
//     document.write(i);
//     anterior=i;
//     valor++;
//     i++
    
// }

let termo, n1=1,n2=0


termo = prompt("digite o termo")
document.write("A sequência de Fibonaci com o termo desejado é: ")
document.writeln(n1)

for(let i = 0 ; i<termo; i++){
    n1 = n1 + n2
     n2 = n1 - n2
    document.writeln(n1)
}







