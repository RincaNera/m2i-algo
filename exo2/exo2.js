let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let fact = a => a > 1 ? a * fact(a - 1) : 1;
let factIf = a => {
    if (a <= 1)
        return 1;
    else
        return a-- * fact(a);
};

let choix = 5;
do {
    console.log('Que voulez-vous faire ?');
    console.log('1) Addition');
    console.log('2) Soustraction');
    console.log('3) Multiplication');
    console.log('4) Factorielle');
    console.log('5) Quitter');

    choix = +prompt('Que voulez-vous faire ?');
    switch (choix) {
        case 1:
            console.log(add(prompt('Entrez un premier nombre :'), +prompt('Entrez un deuxième nombre :')));
            break;
        case 2:
            console.log(sub(+prompt('Entrez un premier nombre :'), +prompt('Entrez un deuxième nombre :')));
            break;
        case 3:
            console.log(mul(+prompt('Entrez un premier nombre :'), +prompt('Entrez un deuxième nombre :')));
            break;
        case 4:
            console.log(fact(+prompt('Entrez un nombre :')));
            break;
        case 5:
            console.log('Bonne journée !');
            break;
        default:
            console.log('%d n\'est pas un choix valide', choix);
            break;
    }
} while (choix != 5);
