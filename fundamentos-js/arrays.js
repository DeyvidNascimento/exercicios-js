//No array, cada elemento é um indice.
//Ou senja, 0 1 2 3
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10 //adicionando um elemento no array
console.log(valores);
//length vai mostrar quantas coisas tem no array
console.log(valores.length);
//push adiicona mais elementos para o array
valores.push({id: 3}, false, null, 'texto');
console.log(valores);
//vai sacar o ultimo elemendo do array e retornar no console
console.log(valores.pop());
//vai retirar o indice 0 do array 
delete valores[0];
console.log(valores);

console.log(typeof valores); //array em javascript é um objeto