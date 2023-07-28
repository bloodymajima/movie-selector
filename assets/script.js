// Variables

var questions = [
    {
        question: "What is your mood today?",
        answer: "Happy" || "Neutral" || "Sad",
        choices: ["Happy", "Neutral", "Sad"]
    },
    {
        question: "Question 2",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"]
    },
    {
        question: "Question 3",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"]
    },
    {
        question: "Question 4",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"]
    },
    {
        question: "Question 5",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"]
    }

]

const count = 0

const homePage = document.getElementById('homepage')

const startButton = document.getElementById('start-button')

const previousQuestionButton = document.getElementById('back-button')

const questionContainer = document.getElementById('questions')

const nextQuestionButton = document.getElementById('next-button')

const questionOne = document.getElementById('question-1')

const questionTwo = document.getElementById('question-2')

const questionThree = document.getElementById('question-3')

const questionFour = document.getElementById('question-4')

const questionFive = document.getElementById('question-5')

const recContainer = document.getElementById('recommended')

const trailerButton = document.getElementById('trailer')

const newRecButton = document.getElementById('new-rec')

const streamingOnButton = document.getElementById('watch-on')

const restartQuiz = document.getElementById('start-over')



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdownBtn')) {
      var dropdown = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdown.length; i++) {
        var openDropdown = dropdown[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




homePage.classList.remove('hide')

startButton.addEventListener('click', startQ)

function startQ() {
    homePage.classList.add('hide')
    questionContainer.classList.remove('hide')
    showQ()
}

function showQ() {
    questionContainer.innerHTML = ""
    var question = document.createElement("h2");
    question.innerHTML = questions[count].question;
    questionContainer.append(question)
    for (var i = 0; i < questions[count].choices.length; i++) {
        var button = document.createElement("button")
        button.textContent = questions[count].choices[i]
        button.value = questions[count].choices[i]
        questionContainer.append(button)
    }
}

//How to define variables using jQuery?


// Nav bar link for movie quiz takes you to the start page, genre link takes you to movie genres if thats all you want

// When start button is pressed, it goes to the first question. hide class is removed for next question. 

// When a question shows up, hide class is added for previous question, removed for current

// Input from questions goes into function for selecting movies

// Create card for the reccomended movie, trailer button takes to youtube, new button runs function for selecting movie, watch on buttons show what streaming service 

