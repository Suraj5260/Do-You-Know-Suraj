var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name ? ");

console.log("Welcome " + userName + ", lets play DO YOU KNOW Suraj." );
var score = 0;

// play function 

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("correct answer.");
    score ++;
  }
  else{
    console.log("oh wrong anser , correct answer is " + answer +".");
  }
  console.log("your current score is " + score);
  console.log("------------x------------")
}

var questions = [{
  que: "What will Suraj choose Mountain climbing or Videogame ? ",
  ans: "Videogame"
},{
  que: "Where does suraj live now ? ",
  ans: "Pune"
},{
  que: "What city was Suraj born in ? ",
  ans: "Chandrapur"
},{
  que: "What is suraj's lastname ? ",
  ans: "Telrandhe"
},{
  que: "What kind of food does Suraj prefer Chinese or Indian  ? ",
  ans: "Indian"
},];

for(var i = 0; i < questions.length; i++){
  play(questions[i].que, questions[i].ans);
}

console.log("YAY you scored " + score );
console.log("I hope u had fun, contact Suraj if have any queries and have a great day.")