// Cadeau pour mon correcteur :
// node algo.js list_1.txt
// node algo.js list_2.txt
// node algo.js list_sorted.txt
// node algo.js list_long.txt
// node algo.js list.txt (tu dois utiliser des valeurs au choix au format suivant '48 -2 6 12 0 -4')

let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
	if (error) {
		console.log(error);
		return ;
	}
	console.log(data);
	console.log(bubbleSort(IntArray(data)));
	console.log(insertionSort(IntArray(data)));
	console.log(selectionSort(IntArray(data)));
	console.log(quickSort(IntArray(data)));
	console.log(mergeSort(IntArray(data)));
	console.log(cocktailSort(IntArray(data)));
});

const IntArray = (n) => {
	return n.split(' ').map(Number);
}

// Tri à bulle
const bubbleSort = (n) => {
	let counter = 0;
	for (let i = n.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if(n[j] > n[j + 1]) {
				let tmp = n[j];
				n[j] = n[j + 1];
				n[j + 1] = tmp;
			}
			counter++;
		}
	}
	console.log(`=> Tri à bulle: ${counter} comparaisons`);
	return n;
};

// Tri par insertion
const insertionSort = (n) => {
	let counter = 0;
	for (let i = 0; i < n.length; i++) {
		let currentI = n[i];
		let j;
		for (j = i - 1; j >= 0 && n[j] > currentI; j--) {
			n[j + 1] = n[j];
			counter++;
		}
		n[j + 1] = currentI;
	}
	console.log(`=> Tri par insertion: ${counter} comparaisons`);
	return n;
};

// Tri par sélection
const selectionSort = (n) => {
	let counter = 0;
	for (let i = 0; i < n.length; i++) {
		let min = i;
		for (let j = i + 1; j < n.length; j++) {
			if (n[min] > n[j]) {
				min = j;
			}
			counter++;
		}
		if (min !== i) {
			let tmp = n[i];
			n[i] = n[min];
			n[min] = tmp;
		}
	}
	console.log(`=> Tri par sélection: ${counter} comparaisons`);
	return n;
}

// Tri rapide (tri pivot)
const quickSort = (n) => {
	let counter = 0;

	const quickSortedArray = (p) => {
		if (p.length <= 1) return p;

		let pivot = p.shift();
		let left = [];
		let right = [];

		for (let i = 0; i < p.length; i++) {
			if (p[i] < pivot) {
				left.push(p[i]);
			} else {
				right.push(p[i]);
			}
			counter++;
		}

		return [...quickSortedArray(left), pivot, ...quickSort(right)];
	}

	quickSortedArray(n);
	return `=> Tri rapide: ${counter} comparaisons`;
}

// Tri fusion
const mergeSort = (n) => {
	let counter = 0;

	const merge = (left, right) => {
		let result = [];

		while (left.length && right.length) {
			if (left[0] <= right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}

		while (left.length) result.push(left.shift());
		while (right.length) result.push(right.shift());

		return result;
	}

	const mergeSortArray = (p) => {
		counter++;
		if (p.length < 2) return p;
		let middle = Math.floor(p.length / 2);
		let left = p.slice(0, middle);
		let right = p.slice(middle, p.length);

		return merge(mergeSortArray(left), mergeSortArray(right));
	}

	mergeSortArray(n);
	console.log(`=> Tri par fusion: ${counter} comparaisons`);
	return mergeSortArray(n);
}

// Tri cocktail
const cocktailSort = (n) => {
	let counter = 0;
	let is_Sorted = true;

	while (is_Sorted) {
		for (let i = 0; i < n.length; i++) {
			if (n[i] > n[i + 1]) {
				counter++;
				let tmp = n[i];
				n[i] = n[i + 1];
				n[i+1] = tmp;
				is_Sorted = true;
			}
		}

		if (!is_Sorted) break;
		
		is_Sorted = false;
		for (let j = n.length - 1; j >= 0; j--) {
			if (n[j-1] > n[j]) {
				counter++;
				let tmp = n[j];
				n[j] = n[j - 1];
				n[j - 1] = tmp;
				is_Sorted = true;
			}
		}
	}

	console.log(`=> Tri cocktail: ${counter} comparaisons`);
	return n;
};