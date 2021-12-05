const rs = require("readline-sync");

let points = 0;

let questions = [{
  question: "What is my pet name? : ",
  ans: "Tiger"
},{
  question: "What's my fav superhero? : ",
  ans: "Ironman"
},{
  question: "Marvel or DC : ",
  ans: "Marvel"
},{
  question: "What's my fav food : ",
  ans: "Rajma Chawal"
},{
  question: "Where Do i Live? : ",
  ans: "Delhi"
}]

let scores = {
  "saurabh":5,
}

var username = rs.question("What is your name? : ")
function welcomeUser(user){
  if (user.toLowerCase() in scores){
    console.log("Welcome " + user + ", your past score was " +  scores[user.toLowerCase()])
  }else{
    console.log("Welcome" + user + ", your current score is 0.")
  }
}

function gameLogic(Ques, Ans){
  let userAns = rs.question(Ques);
  if (userAns.toLowerCase() === Ans.toLowerCase()){
    console.log("correct")
    points = points + 1
    
  }else{
    console.log("incorrect")
  }
}

function play (){
  for (i=0;i<questions.length;i++){
    let currQues = questions[i]
    gameLogic(currQues.question, currQues.ans)
  }
}

function showScore(){
  console.log("Your Score is ", points)
  scores[username] = points;
  console.log("--------------")
  console.log("Highscore List")
  console.log(scores)
}

welcomeUser(username);
play();
showScore();
