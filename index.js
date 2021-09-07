var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score=0;
var rightAnswerMessage=chalk.bold.green("Right!")
var wrongAnswerMessage=chalk.bold.red("Wrong!")
var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+chalk.magenta(userName.toUpperCase())+" to `DO YOU KNOW Onkar?`");

function play(question, answer){
  var userAnswer= readlineSync.question(question);

  if (userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(rightAnswerMessage);
    score++;
    
  }else{
    console.log(wrongAnswerMessage);
  }
  console.log("Current Score: ",score);
  console.log("---------------")
}

var highScores = [
  {
    name: "Onkar",
    userHighScore: 10,
  },
  {
    name: "Aadarsh",
    userHighScore: 9,
  },{
    name: "Bhuvan",
    userHighScore: 7,
  }
]

var questions=[{
  question: "Q1] Where do I live? ",
  answer: "Solapur"
},{
  question: "2] My favourite superhero would be? ",
  answer: "Wolverine"
},{
  question: "3] Where do I work? ",
  answer: "Jio"
},{
  question: "4] Which Book am I currently reading? ",
  answer: "Black Swan"
},{
   question: "5] What is my Age? ",
  answer: "21"
},{
   question: "6] Which School did I go to?  ",
  answer: "IMS"
},{
   question: "7] Which Junior College did I go to? ",
  answer: "Walchand"
},{
   question: "8] Which College did go to for Graduation? ",
  answer: "Modern"
},{
   question: "9] What was my major in college? ",
  answer: "computer"
},{
   question: "10] Which city was my College in? ",
  answer: "pune"
}]


for (var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! You Scored: ", chalk.magenta(score));

for (var i=0; i<highScores.length; i++){
  var currentHighScorer=highScores[i];
  console.log(currentHighScorer.name);
  console.log(currentHighScorer.userHighScore);
}

