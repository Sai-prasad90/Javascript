//arya
let names = ["sai", "soham", 'shreya', "gauri", "chetan"]
console.log(names[3])
console.log(names[2])
//==
let q1 = names.length
console.log(q1)

for (let i = 0; i < 5; i++) {
    console.log(i)
}

//==
let animal = ["tiger", "dog", "cat", "kangaroo"]
console.log(animal[0])
console.log(animal.length)
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i])
}

// ==
let fruits = ["apple", "banana", "mango", "chikoo"]
console.log(fruits[0])
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// program 4
// print reverse 
// length - 1 is lst index
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i)
    console.log(fruits[i])
}

// ==
let animals = ["cheetah", "elephant", "cat", "monkey", "mouse"]
for (let i = 0; i < animal.length; i++) {

    if (animals[i] == "cat") {
        break
    }
    console.log(animals[i])
}

let flowers = ["rose", "lily", "jasmine", "sunflower"]
for (let i = 0; i < flowers.length; i++) {


    if (flowers[i] == "jasmine") {
        continue
    }
    console.log(flowers[i])
}

//===
let country = ["india", "japan", "us", "russia"]
console.log(country)
let y = 0
while (y < country.length) {

    console.log(country[y])
    y = y + 1

}