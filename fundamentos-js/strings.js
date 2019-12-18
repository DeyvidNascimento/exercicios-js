const escola = "cod3r"
console.log(escola.charAt(4));
console.log(escola.charAt(5));
//na tabela unicode o 3 representa 51
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));
console.log(escola.substring(3));
console.log(escola.substring(0, 3));
//Escola é um literal. Literal e um dado que nao foi armazenado em uma variavel
//concat é a abreviacao de concatenar
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + (escola) + ("!"));
//trocar o '3' por 'e'
console.log(escola.replace(3, 'e'));

//array
console.log('Ana,Julia,Hellen'.split(','));
