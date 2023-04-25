const numberOfTests = 3;

let students = [
  {
    name: 'Ricardo',
    firstTest: 7,
    secondTest: 8.5,
    thirdTest: 7.9,
  },
  {
    name: 'Igor',
    firstTest: 3.8,
    secondTest: 9,
    thirdTest: 10,
  },
  {
    name: 'Conte',
    firstTest: 5,
    secondTest: 8.7,
    thirdTest: 7,
  },
  {
    name: 'Elói',
    firstTest: 5,
    secondTest: 8.7,
    thirdTest: 3.9,
  }
]

function average(students) {
  for(let student of students) {
    let average = ((student.firstTest + student.secondTest + student.thirdTest) / numberOfTests).toFixed(1);

    if(average > 7) {
      alert(`A média do(a) aluno(a) ${student.name} é: ${average}\n Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
      alert(`A média do(a) aluno(a) ${student.name} é: ${average}\n Não foi dessa vez ${student.name}! Tente novamente!`)
    }
  }
}

average(students);

