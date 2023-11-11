//========= let
let a = 10+2    //define by let
console.log(a)  // 12
a = 2*2         // let allows update
console.log(a) //4
console.log(typeof(a)) //number

//===================

let b = "sai" 
console.log(b) //sai
b = "sai prasad"  //let allows value to update
console.log(b) //sai prasad
console.log(typeof(b)) //string

//===================
let b1 = "age"
console.log(b1)
b1 = 26
console.log(b1)   // allows types eng. string updated by number
console.log(typeof(b1))  //type number


//====================

let c = true
console.log(c) //true
c = false
console.log(c) //fasle
console.log(typeof(c)) //boolean

//=============  const
const d =25
console.log(d)  // 25
// d = 10         // didnt update
// console.log(d) //assignment to consta variable

//============ var
var e = 10
console.log(e) //10
e = 20         //var allows update
console.log(e) //20

var f = "robert"
console.log(f)     //robert
f = true           //ture
console.log(f)                
console.log(typeof(f)) //boolean  

//=================

//operators

// 1. arithmatic +-*/%

//2.logical  && || ! 
                       //  && - true - true => true else false
                       //  || - false - false => false else all true
                       //  ! true => false vice versa 
               
// 3.  comparision 
                   // < , > , <= , >= 
                   // != , ==        // value
                   // === , !==      // value and type


 // 1. arithmatic

 let g = 25
let h = 10

console.log(g+h) //35       |
console.log(g-h) //15       |
console.log(g/h) //2.5      |  Problem of repeatation 
console.log(g*h) //250      |  Time consuming
console.log(g%h) //5        |


// function

function  Arithmetic(i,j){
    console.log(i+j)  
    console.log(i-j)
    console.log(i*j)
    console.log(i/j)
    console.log(i%j)
    
}
Arithmetic(25,10)    //output printed
Arithmetic(5,12)     //output printed

//three ways 
// 1. function without return type and parameter
// 2. function whith parameter and without return type
// 3. function with para and with return type

//1. 
 function add(){
    console.log(2+2)
 }
 add()  // 4
 add()  // 4
 add()  // 4

//2.
function sub(x,y){         //with parameter x,y
    console.log(x-y)
}
sub(10,5)           // 5
sub((10+5),(8-80))  // 87

//3. 
function mod(x,y){      //with para
    return x % y        //with return type
}
let p= mod(25,7)         //return hai to save and used below
console.log(p)        //4
console.log(p+p)      //8
console.log(p+10)    //14
console.log(p-10)    //-6
console.log(2*(p+p))  //16
console.log(p/2)      //2
console.log(p+0.5)    //4.5


//2 comparision operator
// output always boolean

console.log(6 == 6)      // true
console.log(6 == '6')    // true
console.log(6 === '6')   // false
console.log(6 !== '6')   // true
console.log(6 === 6)     // true
console.log(6 !== 6)     // false
console.log(6 != '6')    // true   // false
console.log(6 != 6)      // true   // false
console.log(7 < 5)       // false
console.log(7 > 5)       // true
console.log(7 == 7)      // true
console.log(7 != 7)      // false
console.log(7 >= 7)      // true
console.log(7 <= 7)      // true
console.log(7 <= 6)      // false
console.log(7 >= 5)      // true


//3 logical operator

// and &&
console.log(3 === 3 && 7 < 8)   // true && true => true
console.log(6 != 6 && 8 == 8)   // false && true => false
console.log(7 == 7 && 8 == 7)   // true && false => false
console.log(7 == 6 && 8 == 9)   // false && false => false

// or ||
console.log(4 == 4 || 5 == 5)       //true || true => true
console.log(4 != 4 || 5 == 5)       // false || true => true
console.log(7 == 7 || 6 != 6)       // true || false => true
console.log(8 === '8' || 9 === '9') // false || false => false

// not
console.log(4 == 4 || 5 == 5) //true
console.log(!(4 == 4 || 5 == 5)) //false

console.log(4 != 4 || 5 == 5)  //true
console.log(!(4 != 4 || 5 == 5)) //false

console.log(7 == 7 || 6 != 6) //true

console.log(8 === '8' || 9 === '9') //false
console.log(8 === '8' || !(9 === '9'))  //true


//conditional statement 
//if statement
            // if(condition){
                //statement
           //   }
//else if statement
             //if(condition){
                //statemnt
         //    }
             // else if(condition2){
                //statemnt
         //    }
         //   ...
         //    else {
                //statemnt //last one
         //    }
            
//if

let purchase = 25
if(purchase > 0 && purchase <= 5){
     console.log("10 % discount")
}
if(purchase > 5 && purchase <= 10){
    console.log("20 % discount")
}
if(purchase > 10){
    console.log("30 % discount")
}

//problem here is it chehcking all files


//if else
let marks = 80
if(marks >= 90 && marks <= 100 ){
    console.log("You Nailed it")
    console.log("Your score is") ; console.log(marks)
}
else if(marks >= 75 && marks <= 90 ){
    console.log("Your hardwork succeded")
    console.log("Your score is") ; console.log(marks)
}
else if(marks >= 50 && marks <= 75 ){
    console.log("You secured good rank")
    console.log("Your score is") ; console.log(marks)
}
else if(marks >= 40 && marks <= 50 ){
    console.log("You cleared your exam")
    console.log("Your score is") ; console.log(marks)
}
else {
    console.log("Either You Just below these numbers or input is wrong")
}



