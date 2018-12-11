// Modal Scripts //
var modal = document.getElementById('myModal');
var resultPage = document.getElementById('resultPage');
var container = document.getElementById('container');
var btn = document.getElementById("surrender");
var continueQuiz = document.getElementById("noSurrender");
var surrenderQuiz = document.getElementById("yesSurrender");
var tryAgain = document.getElementById("tryAgain");

btn.onclick = function () {
    modal.style.display = "block";
};

continueQuiz.onclick = function () {
    modal.style.display = "none";
};

surrenderQuiz.onclick = function () {
    modal.style.display = "none";
    container.style.display = "none";
    resultPage.style.display = "grid";

    surrenderQuiz();

};

tryAgain.onclick = function () {
    container.style.display = "grid";
    resultPage.style.display = "none";
    location.reload();
};
// Modal Ends //