
// lexical scope 

function additionA(){
    let a = 10 
    let b = 5
    console.log(a+b)
    function additionB(){
        let x = 1
        let y = 2
        console.log(a+b+x+y)
        //console.log(h)
        function additionC(){
            let g = 10 
            let h = 4
            console.log(a+b+x+y)
            console.log(g + h)
        }
        additionC()
    }
    additionB()
}
additionA()


// function declaration 
function additionBa(x,y){
    return x + y
}
let q1  = additionBa(13,4)
console.log(q1)

// function express 

let additionB = function(x,y){
    return x + y
}
let q2  = additionB(13,4)
console.log(q2)

// arrow function 

let additionC = (x,y)=>{
    return x + y
}
let q3  = additionC(13,4)
console.log(q3)

// closures 

let add = function(x,y){
    return x + y
}

function additionD(fn,x,y){

    // let fn  = function(x,y){
    //     return x + y
    // }

    let c = fn(x,y)
    return c
}
let d = additionD(add,34,5)
console.log(d)

// closures 

// function additionN(a,b){
//     return function(){
//         console.log(a+b)
//     }
// }
// let e = additionN(12,4)
// console.log(e)
// // let e = function(){
// //     console.log(a+b)
// // }
// e()



function info(){
    let firstName = "chinmay"
    let lastName = "deshpande"

    let displayName = function(){
        console.log( firstName + lastName)
    }
    let updateFirstName = function(newVal){
        firstName = newVal
    }
    return [displayName,updateFirstName,firstName]
}
let [a,b,c] = info()
a()
b("ram")
a()
console.log(c)

