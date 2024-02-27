// Object ---- properties and methods

let info = ["sai","prasad",34,67]

let sai = {
    // key:values
    // property:values
    firstName:"sai",
    lastName:"prasad",
    age:34,
    rollNo:67
}
console.log(sai)
// retrive (dot notation and bracket notation)
console.log(sai.firstName)
console.log(sai['firstName'])
// update (dot notation and bracket notation)
sai.lastName = "wate"
sai['lastName'] = "wate"
console.log(sai)
// add 
sai['language'] = "kannada"
sai.city = "pune"
console.log(sai)
//delete 
delete sai.firstName
delete sai['lastName']

vehicle = {
    color:"black",
    type:"sux"
}

// retrive  // update // add // delete
console.log(vehicle.color)
vehicle.color = "blue"
vehicle.regNo = 123
delete vehicle.color

// brakcet notation

console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['regNo'] = 123
delete vehicle['regNo']

// ===
let names = ["sai","sameer","ajay","gaurav"]
for(let i = 0 ; i < names.length ; i++){
  
    console.log(names[i])
}

for(let i = names.length -1 ; i > -1 ; i--){
   
    console.log(names[i])
}


let shreya = {
    
    firstName:"shreya",
    lastName:"tol",
    age:26,
    rollNo:45
}

for(let prop in shreya){
    console.log(prop,shreya[prop])
}


let students = [

    {
        firstName:"sai",
        lastName:"prasad",
        age:26
    },
    {
        firstName:"chetan",
        lastName:"shukla",
        age:26
    },
    {
        firstName:"gaurav",
        lastName:"hagga",
        age:27

    }

]
console.log(students[3].firstName)
