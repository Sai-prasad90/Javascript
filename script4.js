// let x = 155
// let y = 58
// console.log(x)
// console.log(y)
// console.log(typeof x)

// let x1 = '5'
// console.log(typeof z)/

// let x = true
// console.log(typeof x)

// if (5 == 5) {
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// let x = 90
// let y = 60

// // if (x > y) {
// //     console.log('x is greater')
// // }
// // else {
// //     console.log('y is greater')
// // }

// //ternary opeartor
// //condition ? true: false

// x > y ? console.log('x is greater') : console.log('y is greater')

// //problem 2

// let age = 14
// let result = age > 18 ? 'speed up' : "dont drive"
// console.log(result)


//switch case

//problem 1

//switch case without break
// let city = "nagpur"
// switch (city) {
//     case "Pune":
//         console.log("MH")

//     case "Jaipur":
//         console.log("RJ")

//     case "Raipur":
//         console.log("CG")

//     default:
//         console.log('city not found')
// }

//switch case with break

// let city = "Pune"
// switch (city) {
//     case "Pune":
//         console.log("MH")
//         break
//     case "Chennai":
//         console.log("TN")
//         break
//     case "Indore":
//         console.log("MP")
//         break
//     default:
//         console.log('city not found')
// }

// let city = "Lukhnow"
// switch (city) {
//     case "Nagpur":
//     case "Pune":
//         console.log("MH")
//         break
//     case "Lukhnow":
//     case "Varanasi":
//         console.log("UP")
//         break
//     case "Jaipur":
//     case "Udaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log('City not found')
// }

// 



let x = 87
let y = 54
let z = 67

switch (true) {
    case x > y && x > z:
        console.log('x is greater')
        break

    case y > x && y > z:
        console.log("y is greater")
        break

    default:
        console.log("z is greater")
}