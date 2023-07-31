// Variables
const randomNumber = Math.floor(Math.random()* 566)
const movieDBAPI = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+randomNumber+'&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&apiKey=51460ea6e050952a835f989f5534065e'
console.log(randomNumber);
fetch(movieDBAPI, {
    headers: {
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTQ2MGVhNmUwNTA5NTJhODM1Zjk4OWY1NTM0MDY1ZSIsInN1YiI6IjY0YzQ1ZjA3ZWMwYzU4MDBlODBiMzZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8YQ-iktr5Z81LBFOrqWmbmt1O82PsVJk8qXLAvZx72I'
    }
}).then((response)=>{
    return response.json()
}).then((data)=>{
    const randomMovie = data.results[Math.floor(Math.random()* data.results.length)]
    console.log(randomMovie);

})

const drinkDBAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'+'&apiKey=1'+'/images/media/drink/vrwquq1478252802.jpg/preview'
console.log(randomNumber);
fetch(drinkDBAPI, {
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        const randomDrink = data.results[Math.floor(Math.random()* data.results)]
        console.log(randomDrink);

    });


const urlforposter = 'http://image.tmdb.org/t/p/w500/'

const homePage = document.querySelector('#homepage');

const startButton = document.querySelector('#start-button');

const previousQuestionButton = document.querySelector('.back-button');

const nextQuestionButton = document.querySelector('.next-button');

const questionContainer = document.querySelector('#questions');

const answersContainer = document.querySelector('#answers');

const questionEle = document.querySelector('#question');

// const questionOne = document.getElementById('question-1')

// const questionTwo = document.getElementById('question-2')

// const questionThree = document.getElementById('question-3')

// const questionFour = document.getElementById('question-4')

// const questionFive = document.getElementById('question-5')

const recContainer = document.querySelector('#recommended');

const trailerButton = document.querySelector('#trailer');

const newRecButton = document.querySelector('#new-rec');

const streamingOnButton = document.querySelector('#watch-on');

const restartQuiz = document.querySelector('#start-over');

const questions = [
    {
        question: "What is your mood today?",
        shortName: "mood",
        answers: [
            {
               label: "Happy",
               value: "happy"
             },
            {
                label: "Neutral",
                value: "neutral"
            },
            {
                label: "Sad",
                value: "sad"
            }
        ]
    },
    {
        question: "Choose a genre",
        shortName: "genre",
        answers: [
            {
               label: "Action",
               value: "action"
             },
            {
                label: "Comedy",
                value: "comedy"
            },
            {
                label: "Drama",
                value: "drama"
            },
            {
                label: "Adventure",
                value: "adventure"
            },
            {
                label: "Thriller",
                value: "thriller"
            },
            {
                label: "Crime",
                value: "crime"
            },
            {
                label: "Romance",
                value: "romance"
            },
            {
                label: "Science Fiction",
                value: "science fiction"
            },
            {
                label: "Fantasy",
                value: "fantasy"
            },
            {
                label: "Family",
                value: "family"
            },
            {
                label: "Mystery",
                value: "mystery"
            },
            {
                label: "Biography",
                value: "biography"
            },
            {
                label: "History",
                value: "history"
            },
            {
                label: "Animation",
                value: "animation"
            },
            {
                label: "Music",
                value: "music"
            },
            {
                label: "Sport",
                value: "sport"
            },
            {
                label: "Disaster",
                value: "disaster"
            },
            {
                label: "Western",
                value: "western"
            },
            {
                label: "War",
                value: "war"
            },
            {
                label: "Horror",
                value: "horror"
            },
        ]
    },
    {
        question: "How old would you like the movie to be?",
        shortName: "movie age",
        answers: [
            {
               label: "Doesn't matter",
               value: "N/A"
             },
            {
                label: "Published in the last 3 years",
                value: "> 3 years"
            },
            {
                label: "Published in the last 5 years",
                value: "> 5 years"
            },
            {
                label: "Published in the last 10 years",
                value: "> 10 years"
            },
            {
                label: "Published in the last 20 years",
                value: "> 20 years"
            },
        ]
    },
    {
        question: "Choose a rating for your movie",
        shortName: "rating",
        answers : [
            {
               label: "Doesn't matter",
               value: "N/A"
             },
            {
                label: "Rated-G",
                value: "G"
            },
            {
                label: "Rated-PG",
                value: "PG"
            },
            {
                label: "Rated PG-13",
                value: "> 10 years"
            },
            {
                label: "Rated R",
                value: "> 20 years"
            },
        ]
    },
    {
        question: "Other catergories for your movie",
        shortName: "other",
        answers: [
            {
               label: "No preference",
               value: "N/A"
             },
            {
                label: "Based on a true story",
                value: "true story"
            },
            {
                label: "Set in New York City",
                value: "nyc"
            },
            {
                label: "Set in Las Vegas",
                value: "las vegas"
            },
            {
                label: "Space Movies",
                value: "space"
            },
            {
                label: "Based on a book",
                value: "book"
            },
            {
                label: "Spy and Cop movies",
                value: "spy cop"
            },
            {
                label: "Involves a wedding",
                value: "wedding"
            },
            {
                label: "Racing movies",
                value: "racing"
            },
            {
                label: "IMDb Top 250 Movies",
                value: "top 250"
            },
        ]
    }
]

homePage.classList.remove('hide');
previousQuestionButton.classList.add('hide');
nextQuestionButton.classList.add('hide');

startButton.addEventListener('click', startQ, showQ);

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

const userAnswers = [];

let count = 0;

function startQ() {
    homePage.classList.add('hide');
    questionContainer.classList.remove('hide');
    previousQuestionButton.classList.remove('hide');
    nextQuestionButton.classList.remove('hide');
    showQ();
}

function showQ() {
    questionContainer.textContent = "";
    answersContainer.innerHTML = "";
    const currentQuestion = questions[count];
    questionContainer.textContent = currentQuestion.question;
    for (var j = 0; j < currentQuestion.answers.length; j++) {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        label.textContent = currentQuestion.answers[j].label;
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.setAttribute("value", currentQuestion.answers[j].value);
        check.setAttribute("data-shortName", currentQuestion.shortName);
        label.appendChild(check);
        listItem.appendChild(label);
        answersContainer.appendChild(listItem);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (count === questions.length - 1) {
      console.log(userAnswers);
      return;
    }
    count++;
    showQ();
  }
  
  function handleClick(e) {
    const target = e.target;
    const answer = target.value;
    const shortName = target.getAttribute("data-shortName");
    userAnswers.push({
      shortName: shortName,
      answer: answer
    });
  }
  
  nextQuestionButton.addEventListener("click", handleSubmit);
  answersContainer.addEventListener("click", handleClick);

//   startButton.addEventListener('click', showQ);

    // var question = document.createElement("h2");
    // question.innerHTML = questionContainer[count].question;
    // questionContainer.append(question)
    // for (var i = 0; i < questions[count].choices.length; i++) {
    //     var button = document.createElement("button")
    //     button.textContent = questions[count].choices[i]
    //     button.value = questions[count].choices[i]
    //     questionContainer.append(button)
    // }
}

//How to define variables using jQuery?


// Nav bar link for movie quiz takes you to the start page, genre link takes you to movie genres if thats all you want

// When start button is pressed, it goes to the first question. hide class is removed for next question. 

// When a question shows up, hide class is added for previous question, removed for current

// Input from questions goes into function for selecting movies

// Create card for the reccomended movie, trailer button takes to youtube, new button runs function for selecting movie, watch on buttons show what streaming service 

