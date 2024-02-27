console.log("sai")
let a = 0
console.log(a)
a = 5
console.log(a)

const  a1 = 3.14
console.log(a1)
// a1 = 25
console.log(a1)

// Arithmetic operation 

let x = 3
let y = 5 

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)


function Cal(x1,y1){
    console.log(x1+y1)
    console.log(x1-y1)
    console.log(x1*y1)
    console.log(x1/y1)
    console.log(x1%y1)
}
Cal(12,3)
Cal(8,4)

// pyogyam 5

// function without parameter and without return type 

function add(){
    console.log(5+6)
}
add()
add()


// function with parameter and without return type 
function sub(q,r){
    console.log(q-r)
}
sub(5,2)
sub(5,5)

// function with parameter and with return type 
function mult(q1,r1){
    return q1 * r1
}
let up = mult(1,5)
console.log(up)
