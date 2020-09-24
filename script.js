const start = document.getElementById("start");
const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
var gameScore = 0;
var questionNumber = 0;

start.addEventListener("click", function(e){
    e.preventDefault()
    console.log("start click")
})


var questions = [
    {
        question: "In what year was the original TRON movie released",
        choice1: "1985",
        choice2: "1982",
        choice3: "1980",
        choice4: "1990",
        answer: 2,
    },
    {
        question:"What does deresolution or to be Derezed in TRON mean",
        choice1: "To be Deleted",
        choice2: "To be Dissolzed",
        choice3: "To be Downloaded",
        choice4: "To be Upgraded",
        answer: 1,
    },
    {
        question: "What is the hacking program made by Flynn called",
        choice1: "M C P",
        choice2: "R.E.X",
        choice3: "C.L.U",
        choice4: "Sark",
        answer: 3,
    },
    {
        question: "What are the two main uses of an Identity Disk",
        choice1: "Combat and record data",
        choice2: "Combat and Hacking",
        choice3: "Record data and transfer data",
        choice4: "Hacking data and transfering data",
        answer: 1,
    },
    {
        question: "What is Flynn's sons name",
        choice1: "Josh",
        choice2: "Clark",
        choice3: "Sam",
        choice4: "Clint",
        answer: 3,
    },
    {
        question: "What are the motorcylces in TRON called",
        choice1: "Speed Cycle",
        choice2: "Light Cycle",
        choice3: "Grid Cycle",
        choice4: "Speed Cycle",
        answer: 2,
    },
    {
        question: "Who produced the music for TRON Legacy",
        choice1: "Marshmello",
        choice2: "Deadmau5",
        choice3: "Avicii",
        choice4: "Daft Punk",
        answer: 4,
    },
    {
        question: "What is Evil TRON's name in TRON: Legacy",
        choice1: "Rinzler",
        choice2: "Zuse",
        choice3: "Sark",
        choice4: "Yori",
        answer: 1,
    },
    {
        question: "In what year did Kevin Flynn disappear",
        choice1: "1989",
        choice2: "1990",
        choice3: "1980",
        choice4: "1985",
        answer: 4,
    },
    {
        question: "What company did Kevin Flynn work for",
        choice1: "TRON",
        choice2: "Grid Dynamics",
        choice3: "Legacy Technologies",
        choice4: "Encom",
        answer: 4,
    },
];

function gameOver(){
    clearInterval(timerInterval);
    timerInterval = -1;
    var timeScore = timeRemaining;
    document.finalScore.innerHTML= "Your final score is: " + endScore
    timerEl.innerHTML="Timer: 0"
    quiz.style.display="none";
    recScore.style.display="center";
}

function playgame(){
    if(questionNumber > (questions.length-1)){
    gameOver();
} 
    askQuestion();
}

function askQuestion (){
    var answer = confirm(questions[questionNumber].q);
    checkAnswer(answer);
}

function checkAnswer(answer) {
    if (answer === questions[currentQI].correct){
      correct.style.display="center";
      setTimeout(function () {
        correct.style.display='none';
      }, 10000);
    }
}


highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
})