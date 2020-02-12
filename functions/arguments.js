// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function (name = "Anon", score = 0) {
   return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText("Amy", 99)
console.log(scoreText)

//Challenge
//total, tipPercent .2

let getTipAmount = function (total, tipPercent = .25) {
    return 'Total: ' + total + ' - Tip Amount: ' +  (total * tipPercent)
}

let tipAmount = getTipAmount(100)
console.log(tipAmount)




let name = 'Jen'
let age = 25
console.log(`Hey, my name is ${name} and I am ${age} years old.`)

