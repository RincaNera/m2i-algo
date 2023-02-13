let n1 = prompt('Entrez un nombre :');
let result = 1;
for (let i = 2; i <= n1; i++) {
    result *= i;
}
console.log('%d! = %d', n1, result);
