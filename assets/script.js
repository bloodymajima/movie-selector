// Variables

const randomNumber = Math.floor(Math.random() * 566)
const movieDBAPI = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + randomNumber + '&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&apiKey=51460ea6e050952a835f989f5534065e'
console.log(randomNumber);
fetch(movieDBAPI, {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTQ2MGVhNmUwNTA5NTJhODM1Zjk4OWY1NTM0MDY1ZSIsInN1YiI6IjY0YzQ1ZjA3ZWMwYzU4MDBlODBiMzZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8YQ-iktr5Z81LBFOrqWmbmt1O82PsVJk8qXLAvZx72I'
    }
}).then((response) => {
    return response.json()
}).then((data) => {
    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]
    console.log(randomMovie);

})

const urlForPoster = 'http://image.tmdb.org/t/p/w500/'

const drinkDBAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

console.log(randomNumber);
fetch(drinkDBAPI, {
}).then((response) => {
    return response.json()
}).then((data) => {
    const randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)]
    console.log(randomDrink);

});

const youtubeAPI = 'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCBp-H6Xzxmc5vbdG9KKx53znHWxVz85qo'
fetch(youtubeAPI, {
}).then((res) => {
    return res.json()
  }).then((data) => {
      console.log(data)
  })

// const urlforposter = 'http://image.tmdb.org/t/p/w500/'

const homePage = document.querySelector('#homepage');

const startButton = document.querySelector('#start-button');

const previousQuestionButton = document.querySelector('.back-button');

const nextQuestionButton = document.querySelector('.next-button');

const questionContainer = document.querySelector('#questions');

const answersContainer = document.querySelector('#answers');

const questionEl = document.querySelector('#question');

const recContainer = document.querySelector('#recommended');

const trailerButton = document.querySelector('#trailer');

const newRecButton = document.querySelector('#new-rec');

const questions = [
    {
        question: "1. What is your mood today?",
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
        question: "2. Choose a genre",
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
]

homePage.classList.remove('hide');
previousQuestionButton.classList.add('hide');
nextQuestionButton.classList.add('hide');

// Nav bar link for movie quiz takes you to the start page, genre link takes you to movie genres if thats all you want
function myFunction() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
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


startButton.addEventListener('click', startQ, showQ);

const userAnswers = [];

let count = 0;

function startQ() {
    homePage.addClass('hide');
    questionContainer.removeClass('hide');
    previousQuestionButton.removeClass('hide');
    nextQuestionButton.removeClass('hide');
    showQ();
}

function showQ() {
    questionContainer.textContent = "";
    answersContainer.innerHTML = "";
    const currentQuestion = questions[count];
    questionContainer.textContent = currentQuestion.question;
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        label.textContent = currentQuestion.answers[i].label;
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.setAttribute("value", currentQuestion.answers[i].value);
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

//How to define variables using jQuery? DONE

// When a question shows up, hide class is added for previous question, removed for current NOT WORKING

// Input from questions goes into function for selecting movies NOT WORKING

// Create card for the reccomended movie, trailer button takes to youtube, new button runs function for selecting movie, watch on buttons show what streaming service CONTINUE TO WORK ON

