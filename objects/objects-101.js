let myBook = {
    title: '1984',
    author: 'Orwell',
    pageCount: '326'
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

//Challenge

let person = {
    name: 'Drew',
    age: 27,
    year: '2019',
    location: 'Austin'
}

console.log(`${person.name} is ${person.age} and live in ${person.location}.`)

person.age = 27 + 1
console.log(`${person.name} will be ${person.age} in ${person.year}, and lives in ${person.location}.`)