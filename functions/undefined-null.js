//Undefined for variable
let name 

if ( name === undefined) {
    console.log("Please Provide a name")
} else {
    console.log(name)
}
//console.log(name)

//Undefined for function arguments
//Undefined as function return default value
let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)

//Null as assigned value
let age = 30

age = null

console.log(age)