var currentQuestionIndex = 0;
var numberCorrect = 0;
var timer = 10;
var timerInterval;

var questionLibrary = [
    {
        question: "What nation's population, on the average, takes the most time to eat their meals?",
        allAnswers: ["German", "French", "English", "Italian"],
        correctAnswer: "French"
    },
    {
        question: "Where did coffee originally come from?",
    
        allAnswers: ["Columbia", "Spain", "Ethiopia", "Brazil"],
        correctAnswer: "Ethiopia"
    },
    {
        question: "What country has the most daily newspapers in the world?",
        answerOptions: ["USA", "India", "Mexico", "England"],
        correctAnswer: "India"
    },
    {
        question: "Which language apart from English is an official language of Canada?",
        allAnswers: ["Spanish", "German", "Spanish", "French"],
        correctAnswer: "French"
    },
    {
        question: "Which Chinese landmark was viewed from space??",
        allAnswers: ["Great Wall of China", "The Forbidden City", "Summer Palace", "The Palace Mueseum"],
        correctAnswer:"Great Wall of China"
    },
    {
        question: "Lesotho is a southern African Kingdom surrounded by which country?",
        allAnswers: ["Uganda", "Swaziland", "South Africa", "Zambia"],
        correctAnswer: "South Africa"
    },
    {
        question: "What is the Great Barrier Reef made from",
        allAnswers: ["Plants", "Coral", "Rocks", "Jelly Fish"],
        correctAnswer: "Coral"
    },
    {
        question: "What is the world's largest ocean?",
        allAnswers: ["The Atlantic", "The Indian", "The Arctic", "The Pacific"],
        correctAnswer: "The Pacific"
    },
    {
        question: "What is the largest country in South America?",
        allAnswers: ["Mexico", "Argentina", "Chile", "Brazil"],
        correctAnswer: "Brazil"
    },
    {
        question: "What country has more volcanoes than any other?",
        allAnswers:  ["Indonesia", "Japan", "Philippines", "Ecuador"],
        correctAnswer: "Indonesia"
    },
]

function timerUpdate(){
    if (timer === 0){
        alert("Time's up! Try to answer the next question faster.")
        timer = 10;
        currentQuestionIndex = currentQuestionIndex + 1;
        clearInterval(timerInterval);
        populateQA();
        return;
    } else {
        document.getElementById("timerBox").innerText = timer;
        timer = timer - 1;
    }
}

function populateQA(){
    timerUpdate();
    timerInterval = setInterval(timerUpdate, 1000);
    var randomizeAnswers = Math.floor(Math.random()*4)
    document.getElementById("triviaQuestion").innerHTML = questionLibrary[currentQuestionIndex].question;
    document.getElementsByClassName("answerOptions")[0].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
    randomizeAnswers = (randomizeAnswers + 1) % 4;
    document.getElementsByClassName("answerOptions")[1].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
    randomizeAnswers = (randomizeAnswers + 1) % 4;
    document.getElementsByClassName("answerOptions")[2].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
    randomizeAnswers = (randomizeAnswers + 1) % 4;
    document.getElementsByClassName("answerOptions")[3].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
}

$('.answerOptions').click(function(event){
    var buttonVal = event.target.innerText;
    if(buttonVal === questionLibrary[currentQuestionIndex].correctAnswer) {
        alert("Correct!");
        numberCorrect = numberCorrect + 1;
    } else {
        alert("Sorry, that's not right.")
    }
    clearInterval(timerInterval);
    timer = 10;
    currentQuestionIndex = currentQuestionIndex + 1;
    if(currentQuestionIndex > 9) {
        //display score
        $("#triviaQuestion").text("You scored " + numberCorrect + " out of 10");
        $('.row').addClass('hidden');
    } else {
        populateQA();
    }
})

$('#start-button').click(function(event){
    $('.row').removeClass('hidden');
    $('#start-button-row').addClass('hidden');
    populateQA();
})