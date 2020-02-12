const notes = ['Note1', 'Note2', 'Note3']

notes[2] = "New note 3"

notes.forEach(function (item, index) {
    console.log(item)
    console.log(index)

})

console.log(notes.length)
console.log(notes)

for(let count = 0; count <= 2; count++) {
    console.log(count)
}