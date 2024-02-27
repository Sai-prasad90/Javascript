//not  
console.log(!(7 == 7))
console.log(!(8 === 8))


// conditional statement 

// program 1
let numT = 17

if(numT > 0 && numT <= 5 ){
    console.log('10 % discount')
}
if(numT > 5 && numT <= 10){
    console.log('20 % discount')
}
if(numT > 10){
    console.log('30 % discount')
}

// program 2

let numt2 = -17

if(numt2 > 0 && numt2 <= 5 ){
    console.log('10 % discount')
}
else if(numt2 > 5 && numt2 <= 10){
    console.log('20 % discount')
}
else if(numt2 > 10){
    console.log('30 % disccount')
}
else {
    console.log("incorrect")
}

// program 3

let marks = 92

if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}

// program 4
if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("ry again")
}

// program 5

let a = 10 
let b = 50

if(a > b){
    console.log("a greater")
}
else {
    console.log("b greater")
}

// program 6
let x1 = 10
let x2 = 50 
let x3 = 300

if(x1 > x2 && x1 > x3){
    console.log("x greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 greater")
}
else {
    console.log("x3 greater")
}


