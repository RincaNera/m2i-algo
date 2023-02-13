let moyenne = a => a.reduce((acc, val) => acc += val, 0) / a.length;
let max = a => a.reduce((acc, val) => acc = acc < val ? val : acc, 0);
let min = a => a.reduce((acc, val) => acc = acc > val ? val : acc, 20);

let nMatieres = prompt('Entrez le nombre de matieres :');
let notes = Array(nMatieres);
for (let i = 0; i < nMatieres; i++) {
    let n = prompt('Entrez le nombre de notes pour la matière ' + (i + 1));
    notes[i] = Array(n);
    for (let j = 0; j < n; j++) {
        notes[i][j] = Number(prompt('Entrez la note ' + (j + 1) + ' de la matière ' + (i + 1)));
    }
}

for (let i = 0; i < notes.length; i++) {
    console.log('La moyenne de la matière %d est %f.', i + 1, moyenne(notes[i]));
    console.log('Le maximum de la matière %d est %f.', i + 1, max(notes[i]));
    console.log('Le minimum de la matière %d est %f.', i + 1, min(notes[i]));
}
