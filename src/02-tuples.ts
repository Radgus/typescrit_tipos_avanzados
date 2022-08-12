// No importa el orden y no importa el límite
const prices: (number | string)[] = [1,2,3,'hola'];
prices.push(1);
prices.push('1');


// Importa el orden y no importa el límite
let user: [string, number, boolean];
user = ['nicobyte', 15, true];
// user = [15,'nicobyte'];

const [username, age] = user;

console.log(username);
console.log(age);
