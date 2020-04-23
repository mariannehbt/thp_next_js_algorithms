const fs = require('fs');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

fs.readFile(process.argv[2], 'utf8', (error, data) => {
	if (error) {
		console.log(error);
		return ;
	}

	readline.question(`Choisis un nombre (k) : `, (answer) => {
		console.log(`Data : ${data}`);
		console.log(exOne(IntArray(data), parseInt(answer)));
		console.log(exThree(IntArray(data), parseInt(answer)));
		console.log(exTwo(IntArray(data)));
		console.log(exFour(IntArray(data)));
		readline.close()
	});
});

const IntArray = (n) => {
	return n.split(', ').map(Number);
};

// Cadeau pour mon correcteur :
// node script.js list_3.txt => entre k = 17 ; la fonction doit renvoyer true
// node script.js list_4.txt => entre k = 19 ; la fonction doit renvoyer false

const exOne = (n, k) => {
	console.log('--------------- Ex 1 ---------------');
	let counter = 0;
	for (let i = n.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			counter++;
			// console.log(((n[i] + n[j]) == k) ? `${true} => ${n[i]} + ${n[j]} = ${k}` : `${false} => ${k}`);
			if ((n[i] + n[j]) == k)
				return `${counter} comparaisons => ${true} => ${n[i]} + ${n[j]} = ${k}`;
		}
	}
	return `${counter} comparaisons => ${false} => ${k}`;
};

const exThree = (n, k) => {
	console.log('------------- Ex 3 & 5 -------------');
	let counter = 0;
	let hash_gap = {};
	for (let i = 0 ; i < n.length; i++) {
		counter++;
		if (hash_gap[Math.abs(n[i] - (k / 2))]) return `${counter} comparaisons => ${true} => ${n[i]} + ${k - n[i]} = ${k}`;
		else hash_gap[Math.abs(n[i] - (k / 2))] = true;
	}
	return `${counter} comparaisons => ${false} => ${k}`;
};

// Cadeau pour mon correcteur :
// Entre 9 quand on te demandera d'entrer un chiffre
// node script.js list_5.txt => la fonction doit renvoyer 3
// node script.js list_6.txt => la fonction doit renvoyer 1

const exTwo = (n) => {
	console.log('--------------- Ex 2 ---------------');
	let counter = 0;
	let buildings = 1;
	let max = Math.max(...n);
	let eastbuildings = n.slice(n.indexOf(max));
	for (let i = eastbuildings.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			counter++;
			if ((n[i] < n[j]))
				buildings++;
		}
	}
	return `${counter} comparaisons => ${buildings} bâtiments`;
};

const exFour = (n) => {
	console.log('------------- Ex 4 & 6 -------------');
	let counter = 0;
	let buildings = 1;
	let next = n.length - 1;
	let max = n[next];

	for (j = next - 1; j >= 0; j--) {
		counter++;
		if (n[j] > max) {
			max = n[j];
			buildings++;
		}
	}
	return `${counter} comparaisons => ${buildings} bâtiments`;
};