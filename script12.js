// let array = []
// console.log(typeof array)     //object

// //====
// let names=["chetan","mayur","aditi"]
// for(let i=0;i<names.length;i++){
 
//     console.log(names[i])
// }

// // //=====
// // let birthYear = [1958,1852,1999,1962]
// // let currentAge = []
// // for (let i = 0; i < birthYear.length; i++) {
// //     let age = 2024 - birthYear[i]
// //     currentAge.push(age)
// // }
// // console.log(currentAge)

// // Map

// let birthYear = [1958,1852,1999,1962]
// let result=birthYear.map(function(element,index,array){
//     return 2024-element
// })
// console.log(result)



// //add
// function add(){
//    console.log("hello") 
// }
// add()


// // ===
// // let marks = [89,12,65,49,79,39,99]

// // let above50 = []
// // for (let i = 0; i < marks.length; i++) {
// //     if (marks[i] > 50) {
// //         above50.push(marks[i])
// //     }
// // }
// // console.log(above50)

// //filter
// // let marks = [89,12,65,49,79,39,99]
// // let above50=marks.filter(function(el,index,arr){
// //     return el>50
// })
// console.log(above50)

// //problem 3

// let marks = [89,12,65,49,79,39,99]
// let sum = 0 
// for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i]
   
// // }
// // console.log(sum)

// reduced()
// let marks = [89,12,65,49,79,39,99]
//     result=marks.reduce(function (acc, el, index, arr) {
//     return acc + el
// }, 0)
// console.log(result)

// //Problem 4

let names  = [" sai","robert","raghuveer","gandharv"]

for (let i = 0; i < names.length; i++) {
    console.log("Hello " + names[i])
}

//forEach()
names.forEach(function(el,index,arr){
   console.log('Hello '+el)
})