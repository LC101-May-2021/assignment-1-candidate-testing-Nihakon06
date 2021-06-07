// readline-sync is used have an interactive code that is used to have conversation with the user.
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// Initialized a variable called candidateName.
let candidateName = "";
// candidateName is assigned with an empty string.

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer 
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

// Define questions and correctAnswers variables as arrays. Use the table below to fill these arrays.
let questions = [ "Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers = ['Sally Ride', 'true', '40','Trajectory','3'];
let candidateAnswers = [];


function askForName() {
// TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Candidate Name: ");

}

// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// TODO 2: modify your quiz app to ask 5 questions
// Define questions and correctAnswers variables as arrays. Use the table below to fill these arrays.
function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(`${i+1}) ${questions[i]} \nYour Answer: `);
    candidateAnswers.push(candidateAnswer);
     console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  
}


// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (candidateAnswer === correctAnswer){
//  console.log("Your Answer is Correct!")
// } else {
//   console.log("Your Answer is Wrong!")
// }
function gradeQuiz(candidateAnswers) {
  let noOfCorrectAns = 0;
  let noOfQuizQues = questions.length;
    for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    noOfCorrectAns += 1;
    }
  }
  let grade = ((noOfCorrectAns / noOfQuizQues) * 100);
  let status = '';
  if (grade >= 80) {
    status = "PASSED ";
  } else {
    status = "FAILED";
    }
  console.log(`>>> Overall Grade: ${grade}% (${noOfCorrectAns} of ${noOfQuizQues} responses correct) <<< \n>>> Status: ${status} <<<`);
  return grade;
}


function runProgram() {
 
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  // Greet the candidate
  // Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.
  askQuestions();
  gradeQuiz(this.candidateAnswers);
  
}


 

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
