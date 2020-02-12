const todos = [{
    text: "Clean the Kitchen",
    completed: false
}, {
    text: 'Study',
    completed: true
}, {
    text: 'Walk the ferrets',
    completed: false
}, {
    text: 'Read',
    completed: false
}, {
    text: 'Finish this course',
    completed: false
}]

const summary = document.createElement('h2')
let neededItems = todos.filter( function(todo) {
    return !todo.completed
})
summary.textContent = `You have ${neededItems.length} things to do.`
document.querySelector('body').appendChild(summary) 

todos.forEach(function(todo) {
    let newPara = document.createElement('p')
    newPara.textContent = todo.text
    document.querySelector('body').appendChild(newPara)
})
