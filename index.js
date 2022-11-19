// Write your solution here

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){

    cats.push(name);
}

function destructivelyPrependCat(name){

    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){

    cats.pop();
}

function destructivelyRemoveFirstCat(){

    cats.shift();
}


function appendCat(name) {

    const newCats = [...cats, name];

    return newCats
}

function prependCat(name) {
    const newCats = [name, ...cats]

    return newCats
}

function removeLastCat() {

   const newestCats = cats.slice(0, cats.length - 1);

    return newestCats 
 }

 function removeFirstCat() {

    const newestCats = cats.slice(1)

    return newestCats
 }