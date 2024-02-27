
let animals = ["lion","zebra","deer","harin","tiger","elephant","chuha"]
//push
let a = animals.push("hippopotamus")
console.log(a)
console.log(animals)
//unshift
let a1 = animals.unshift('chetan')
console.log(a1)
console.log(animals)
//pop
let a2 = animals.pop()
console.log(a2)
console.log(animals)
//shift
let a3 = animals.shift()
console.log(a3)
console.log(animals)
// indexOf()
let a4  = animals.indexOf('tiger')
console.log(a4)
console.log(animals)
// includes()
let a5 = animals.includes('deer')
console.log(a5)
console.log(animals)
// reverser()
let a6 = animals.reverse()
console.log(animals)
console.log(a6)
// at()
let a7 = animals.at(2)
console.log(a7)
// concat()
let animal = ["tiger","lion","mungoose"]
let birds = ["peacock","eagle","sparrow"]
let a8 =  animal.concat(birds)
console.log(a8)

// join()
let info  = ["01saiprasad","gmail.com"]
let a9 = info.join('@')
console.log(a9)

//===

let birthYear  = [1985,1852,1988,1585]
let ages = [] 

for(let i = 0 ; i < birthYear.length ; i++){
    let y = 2024 - birthYear[i]
    ages.push(y)
}
console.log(ages)


//===
let marks = [85,45,89,15,82,64,39]
let above40 = []

for(let i = 0 ; i < marks.length ; i++){
    
    if(marks[i] > 50){
        above40.push(marks[i])
    }
}
console.log(above40)

//====

let numbers = [7,9,10] // 66
let sum = 0
for(let i = 0 ; i < numbers.length ; i++){
    sum = sum + numbers[i]
}
console.log(sum)

//====
let cities  =["nagpur","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome to "+cities[i])
}


