//studentScore, total possible score

const getScore = function (studentScore, pScore) {
    const grade = ((studentScore / pScore) * 100)
    let letterGrade = ''

    if (grade >= 90 ) {
        letterGrade = 'A'
    } else if (grade >= 80) {
        letterGrade = 'B'
    } else if (grade >= 70) {
        letterGrade = 'C'
    } else if (grade >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    //return 'You got a ' + letterGrade + ': ' + grade + '%!'
    return `You got a ${letterGrade}: ${grade}%`
}

const score = getScore(15, 20)
console.log(score)