const toDo = ["Study", 'Clean', 'Walk Dog', 'Shower', 'Apply for Work']

toDo.splice(2, 1)
toDo.push('Exercise')
toDo.shift()

console.log(`You have ${toDo.length} todos`)

toDo.forEach(function(toDo, index) {
    const num= index + 1
    console.log(`${num}. ${toDo}`)
})
