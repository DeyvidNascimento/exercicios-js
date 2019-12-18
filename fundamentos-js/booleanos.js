let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1 
console.log(!!isAtivo); //!!True
console.log(!isAtivo); //!False

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-3); //todo numero inteiro é true, com a excessao do 0
console.log(!!' ');
console.log(!!'texto');
console.log(!![]); //array
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!('' || null || 0 || ' ')); // || = ou
//deu certo pq tem pelo menos um certo, que é o ' '
console.log(!!('' || null || 0 || '' || 'epa'));
console.log(!!('' || null || 'certo' || ''));

let nome = ''
console.log(nome || "Desconhecido!");

nome = 'Deyvid'
console.log(nome || "Desconhecido");