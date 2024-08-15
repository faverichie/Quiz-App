
const questions = [
    {
        text: "Who gave birth to me?",
        options: ["Mary", "Tiwa", "My mother", "Festus"],
        correctAnswer: "My mother"
    },
    {
        text: "What is the source of evil?",
        options: ["Gold", "Silver", "Money"],
        correctAnswer: "Money"
    },
    {
        text: "What is 10+3?",
        options: [12, 13, 18, 20],
        correctAnswer: "13"
    }
];

let currentQuestionIndex = 0;
let timeLeft = 10;
let timer;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.text;
    // Here you would also update the options displayed to the user
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong Answer!");
    }
    clearInterval(timer);
    document.getElementById('nextQuestion').style.display = 'block';
}

function useLifeline(lifeline) {
    alert(`You used ${lifeline}!`);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('nextQuestion').style.display = 'none';
        timeLeft = 10;
        startTimer();
    } else {
        alert("Quiz completed!");
    }
}

function startTimer() {
    document.getElementById('timer').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Time's up!");
            document.getElementById('nextQuestion').style.display = 'block';
        }
    }, 1000);
}

loadQuestion();
startTimer();
