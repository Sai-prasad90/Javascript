


let names = ["sai","sameer","prajakta","himanshu","gaurav"]
console.log(names[0])
console.log(names[1])

console.log(names[2])

let q1 = names.length
console.log(q1)

for(let i = 0 ; i < 5 ; i++){
    console.log(i)
}

//=============
let animal = ["cat","cow","dog","bail"]
console.log(animal[0])
console.log(animal.length)
for(let i = 0 ; i < animal.length ; i++){

    console.log(animal[i])
}

// ===========
let fruits = ["mango","apple","kiwi","chikoo"]
console.log(fruits[0])
for(let i = 0 ; i < fruits.length ; i++){
   
    console.log(fruits[i])
}

// print the element in reverse 
// length - 1 is always lastIndex

for(let i = fruits.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(fruits[i])
}

//==================
let animals = ["tiger","elephant","lion","monkey","tortoise"]
for(let i = 0 ; i < animal.length ; i++){
    
    if(animals[i] == "monkey"){
        break
    }
    console.log(animals[i])
}

//============

let flowers = ["zendu","gulab","jui","sunflower"]
for(let i = 0 ; i < flowers.length ; i++){

    if(flowers[i] == "jui"){
        continue
    }
    console.log(flowers[i])
}

//=====
let country =  ["india","japan","thailand","nepal"]
console.log(country)
let y = 0
while(y < country.length){
    console.log(country[y])
    y = y + 1

}
