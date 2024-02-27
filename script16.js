// slice()

let names = ["sam","anant","sai","shubham","chetan"]
console.log(names.slice(3)) // ["shubham","chetan"]
console.log(names.slice(-5)) // ["sam","anant","sai","shubham","chetan"]
console.log(names.slice(1,5)) // ["anant","sai","shubham","chetan"]
console.log(names.slice(1,-1)) // ["anant","sai","shubham"]
console.log(names.slice(-5,5)) // ["sam","anant","sai","shubham"]
console.log(names.slice(-1,-5)) // []


// splice()
let cities = ["pune","mumbai","bangalore","kolkata","chennai"] 
cities.pop()
cities.shift()
cities.splice(index,numberOfTobeDeleted)

cities.splice(1,2)
console.log(cities)
cities.splice(2,1)
cities.splice(1,2,"nagpur","wardha","goa")

// fill()
let numA = [11,22,33,44,55,66,77]
let q = numA.fill('abc',1,3)
console.log(q)

// flat()
let states = [["Nagpur","Wardha"],["Bhopal","Indore"],["Jaipur","Udaipur"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let a1 = states.flat()
console.log(a1)

// sort
let fruits = ["apple","banana","grapes","chikoo"]
fruits.sort()
console.log(fruits)

// at()
let a11 = [111,222,333,4444,55555,66666] 
let b11 = a11.indexOf(333)
let b12 = a11.at(3)
console.log(b11)
console.log(b12)

// join()

let info = ["sai","wate",9011212430]
let a12 = info.join(' ')
console.log(a12)
console.log(typeof a12)
//==========
let n = [22,33,44]
n.reverse()
console.log(n)

//==========
let a = [22,33,44]
let b = [55,66,77]
let c = a.concat(b)
console.log(c)