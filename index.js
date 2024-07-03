// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.splice(cats.length+1,0,name);
}

function destructivelyPrependCat(name){
    return cats.splice(0,0,name);
}

function destructivelyRemoveLastCat(){
    return cats.splice(cats.length-1,1);
}

function destructivelyRemoveFirstCat(){
    return cats.splice(0,1);
}

function appendCat(name){
    return [...cats,name];
}

function prependCat(name){
    return [name,...cats];
}

function removeLastCat(){
    const copyOfCats = cats.slice()
    return copyOfCats.splice(0,copyOfCats.length-1)

}

function removeFirstCat(){
    const copyOfCats = cats.slice()
    return copyOfCats.splice(1)
}