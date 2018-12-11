// Qestions
var quiz = [
    {
        question: "UNIVAC is",
        a: "Universal Automatic Computer",
        b: "Universal Array Computer",
        c: "Unique Automatic Computer",
        d: "Unvalued Automatic Computer",
        answer: "a"
    },
    {
        question: "The basic operations performed by a computer are",
        a: "Arithmetic operation",
        b: "Logical operation",
        c: "Storage and relative",
        d: "All the above",
        answer: "d"
    },
    {
        question: "The two major types of computer chips are",
        a: "External memory chip",
        b: "Primary memory chip",
        c: "Microprocessor chip",
        d: "Both b and c",
        answer: "d"
    },
    {
        question: "Microprocessors as switching devices are for which generation computers",
        a: "First Generation",
        b: "Second Generation",
        c: "Third Generation",
        d: "Fourth Generation",
        answer: "d"
    }
];

var currentIndex = 0;
var totalQuestions = quiz.length;
var currentQuestion = currentIndex + 1;
var selectedOption;
var correctAnswer = 0;
var wrongAnswer = 0;
var score = 0;
var totalScore = totalQuestions * 5;
var testVariable;

var a = document.getElementById("optOne");
var b = document.getElementById("optTwo");
var c = document.getElementById("optThree");
var d = document.getElementById("optFour");
var questions = document.getElementById("questions");

var question_count_board = document.getElementById("question_count_board");
var timeInterval = document.getElementById("timeInterval");
var quiz_summary = document.getElementById("quiz_summary");
var score_summary = document.getElementById("score_summary");
var info = document.getElementById("info");

window.onload = function () {
    question_count_board.innerHTML = "1 of " + totalQuestions + " remaining";
    setTimer();
    loadQuestion();
};

function setTimer() {
    timeInterval.innerHTML = "Time Remaining: 5m 60s";
}

function loadQuestion() {
    if (a && b && c && d && questions && currentIndex >= 0) {
        a.innerHTML = quiz[currentIndex].a;
        b.innerHTML = quiz[currentIndex].b;
        c.innerHTML = quiz[currentIndex].c;
        d.innerHTML = quiz[currentIndex].d;
        questions.innerHTML = quiz[currentIndex].question;
    } else {
        console.log("Error!!!");
    }
}

function surrenderQuiz() {
    endQuiz();
    resetQuiz();
}

function incrementCurrentIndex() {
    currentIndex++;
}

function setQuestion_count_board() {
    currentQuestion++;
    question_count_board.innerText = currentQuestion + " of " + totalQuestions + " remaining";
}

function activeOptions(opt) {
    selectedOption = opt;
}

function markCorrect() {
    correctAnswer++;
}

function markWrong() {
    wrongAnswer++;
}

function uncheckOptions() {
    document.getElementById("option_a").checked = false;
    document.getElementById("option_b").checked = false;
    document.getElementById("option_c").checked = false;
    document.getElementById("option_d").checked = false;
}

function setSummary() {
    quiz_summary.innerHTML = "You answered " + correctAnswer + " of " + totalQuestions + " questions correctly";
    score_summary.innerHTML = "You scored " + score + " / " + totalScore;
    info.innerHTML = "N|B <span>Each question carries 5mrks</span>";
}

function incrementScore() {
    score = correctAnswer * 5;
}

function checkAnswer() {
    if (selectedOption && quiz[currentIndex]) {
        if ((quiz[currentIndex].answer) && (quiz[currentIndex].answer === selectedOption)) {
            markCorrect();
            incrementScore();
            alert("correct answer");
            console.log("correct answer");
        } else {
            markWrong();
            alert("Wrong!!! The correct answer is " + quiz[currentIndex].answer);
            console.log("Wrong!!! The correct answer is " + quiz[currentIndex].answer);
        }

        testVariable = true;
        selectedOption = "";

    } else {
        testVariable = false;
        alert("Please select an option to continue!!!");
        console.log("Please select an option to continue!!!");
    }
    uncheckOptions();
}

function endQuiz() {
    modal.style.display = "none";
    container.style.display = "none";
    resultPage.style.display = "grid";
    setSummary();
}

function resetQuiz() {
    currentIndex = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    currentQuestion = 0;
}

function nextQuestion() {
    checkAnswer();
    console.log(testVariable);
    if(testVariable === false) {
        loadQuestion();
    } else {
        if (currentQuestion !== totalQuestions) {
            incrementCurrentIndex();
            loadQuestion();
            setQuestion_count_board();
        } else {
            console.log("Ended");
            endQuiz();
            resetQuiz();
        }
    }
}