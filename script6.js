
let city  = "pune"

switch(city){

    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "banglore":
        console.log("KA")
    default:
        console.log('Incorrect cityName')
}

let city1  = "pune"
switch(city1){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "banglore":
        console.log("KA")
        break
    default:
        console.log('Incorrect cityName')
}

switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "trivendum":
    case "rameshwaram":
        console.log("KERALA")
        break
    default:
        console.log('Incorrect cityName')
}

let a = 15
let b = 5
let c = 2


switch(true){
    case a > b && a > c:
        console.log("a is greater")
        break
    case b > a && b > c:
        console.log("b is greater")
        break
    default:
        console.log("c is greater")
}



// program 1

for(let i = 1 ; i <= 3 ; i++){
    console.log(i) 
}

// program 2
// 1 to 5
for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}

// program 3
//5 to 1
for(let i = 5 ; i >= 1 ; i--){ 
    console.log(i) 
}

// program 4
// table of 2 
for(let i = 2 ; i <= 20 ; i = i + 2){ 
    console.log(i)
}

// program 5

for(let i = 1 ; i <= 10 ; i++){
    console.log(i * 2)
}

// program 6 

for(let i = 50 ; i >= 5 ; i = i - 5){
    console.log(i)
}

// program 3 

for(let i = 40 ; i >= 4 ; i = i - 4){
    console.log(i)
}