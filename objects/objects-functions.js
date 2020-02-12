let myBook = {
    title: '1984',
    author: 'Orwell',
    pageCount: '326'
}

let otherBook = {
    title: "People's History",
    author: 'Zinn',
    pageCount: '780'
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)

//Challenge

let getTemp = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5 / 9, 
        celsius: (fahrenheit - 32) * 5 / 9
    }

    //return `It is ${temp.fahrenheit}F which is ${temp.celsius}C and ${temp.kelvin}K.`
}

let tempConversion = getTemp(45)

console.log(tempConversion)
