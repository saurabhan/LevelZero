const rs = require('readline-sync')

console.log('Welcome to the tbbt Trivia!!')

let username = rs.question("What's your name? : ");

let points = 0;

let questions = [
    {
        ques : "What does Sheldon's mom call him?    ",
        ans : "Shelly"
    },
    {
        ques : "What breed of dog does Raj have?     ",
        ans : "Yorkshire Terrier"
    },
    {
        ques : "Who is the only member of the cast to hold a PhD in real life?    ",
        ans : "Mayim Bailik"
    },
    {
        ques : "What was Howard nickname?    ",
        ans : "Froot loops"
    },
    {
        ques : "What is the name of the science show host played by Bob Newhart that Sheldon and Leonard love so much?    ",
        ans : "Professor Proton"
    },
    {
        ques : "Who plays Sheldon's older brother, Georgie?     ",
        ans : "Jerry O'Connell"
    },
    {
        ques : "Amy brings home one of her monkeys from the lab in season four, and he has a terrible habit. What is it?     ",
        ans : "Smoking"
    },
    {
        ques : "When Howard and Bernadette's daughter, Halley, won't stop crying, what does Bernadette do?    ",
        ans : "Crawls into her crib"
    },
    {
        ques : "Where did Amy get her undergraduate degree?    ",
        ans : "Harvard"
    },
    {
        ques : "What apartment do Penny and Leonard live in?    ",
        ans : "4A"
    },
]

function gameLogic(ques, ans){
    let userAns = rs.question(ques);
    if(userAns.toLocaleLowerCase() === ans.toLocaleLowerCase()){
        console.log('Correct')
        points += points;
    }else{
        console.log('Incorrect')
    }}

function play(){
    for(let i=0; i<questions.length; i++){
        let currQues = questions[i]
        gameLogic(currQues.ques, currQues.ans)
    }
}

function showScore(){
    console.log( username + ", Your Total Score is : " + points)
}

play();
showScore();
