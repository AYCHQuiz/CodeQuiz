
//Psuedo code:
// needs a call to action to "start quiz" (alert and button)

var questionsQuiz = document.getElementById("quiz");
var questionSelect = document.getElementById("select");
var questionSubmit = document.getElementById("submit");

var startQuiz = document.getElementById("start");

// variableName.addEventListener(arg1, arg2)
// variableName.addEventListener(what we listen to, what we do)
var score = 0;

  // quiztime(questions);
  function quizTime(){

    for (var i = 0; i <questions.length; i++) {
      console.log(questions[i])
    }

  };

  startQuiz.addEventListener("click", quizTime);

//if statement?


function getNewQuestion (questionIndex){
document.getElementById("question").innerText = questions[questionIndex].title;
document.getElementById("answer1").innerText = questions[questionIndex].choices[0];
document.getElementById("answer2").innerText = questions[questionIndex].choices[1];
document.getElementById("answer3").innerText = questions[questionIndex].choices[2];
document.getElementById("answer4").innerText = questions[questionIndex].choices[3];
}
getNewQuestion(1);

//need to build a high score page and a timer that starts at 75 seconds (increments, count++)

//needs a onclick event to start the quiz (make a button also) and then the questions will appear.  Need to have a click event for the answer button to show the next question
//timer needs to start as soon as the question appears.  Make sure the timer is given a max amount of time for the user to click an answer and count downwards

//start calculating the score incrementally when the user gets a right answer ; create an alert on the page that tells you if the answer is right or wrong
//answering incorrectly results in a time penalty of 5 seconds from the total of seconds

//make it responsive in html

//when timer is done and/or all questions have been answered, show final score and create an input for the user to enter intials
// then show final score and initials in "local storage"

// store questions as an array of objects in a separate js file
// so you will need to reference questions.js
//length of array will determine the length of play: 15 seconds per question so if i have 5 questions then the time will be 75

