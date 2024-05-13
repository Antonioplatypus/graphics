const questions = [
    {
    question: "Which was the first game ever made?",
    answers: [
        {text: "Tennis for Two", correct:true},
        {text: "Pong", correct:false},
        {text: "Mario", correct:false},
        {text: "Fortnite", correct:false},
    ]
    },
    {
    question: "Who manufactured Pong?",
    answers: [
        {text: "Microsoft", correct:false},
        {text: "Sony", correct:false},
        {text: "Atari", correct:true},
        {text: "Microsoft", correct:false},
    ]
    },
    {
    question: "Space invaders was the first game to: ",
    answers: [
        {text: "have enemies", correct:false},
        {text: "take place in space", correct:false},
        {text: "save the player's score", correct:true},
    ]
    },
    {
    question: "Which of these is the best selling NES game?",
    answers: [
        {text: "Super Mario Bros", correct:true},
        {text: "Super Mario Bros 3", correct:false},
        {text: "Tetris", correct:false},
        {text: "Donkey Kong", correct:false},
    ]
    },
    {
    question: "Which one of these popularized 3D graphics for fighting games?",
    answers: [
        {text: "Street Fighter", correct:false},
        {text: "Virtua Fighter", correct:true},
        {text: "Guilty Gear", correct:false},
        {text: "Tekken", correct:false},
    ]
    },
    {
    question: 'Which game has been termed "inarguably the most important" first-person shooter?',
    answers: [
        {text: "Call of Duty", correct:false},
        {text: "Quake", correct:false},
        {text: "Wolfenstein", correct:false},
        {text: "DOOM", correct:true},
    ]
    },
    {
    question: "Which company dominated the handheld market during the 2000's?",
    answers: [
        {text: "Nintendo", correct:true},
        {text: "Playstation", correct:false},
        {text: "Xbox", correct:false},
        {text: "Atari", correct:false},
    ]
    },
    {
    question: "The most expensive game ?",
    answers: [
        {text: "Super Mario Bros", correct:true},
        {text: "Super Mario Bros 3", correct:false},
        {text: "Tetris", correct:false},
        {text: "Donkey Kong", correct:false},
    ]
    },
    {
    question: "Which one of these popularized 3D graphics for fighting games?",
    answers: [
        {text: "Street Fighter", correct:false},
        {text: "Virtua Fighter", correct:true},
        {text: "Guilty Gear", correct:false},
        {text: "Tekken", correct:false},
    ]
    },
    {
    question: 'Which game has been termed "inarguably the most important" first-person shooter?',
    answers: [
        {text: "Call of Duty", correct:false},
        {text: "Quake", correct:false},
        {text: "Wolfenstein", correct:false},
        {text: "DOOM", correct:true},
    ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("appbtn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex  < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();