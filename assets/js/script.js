//global variable for the "main" element
let mainPage = document.getElementById('main-page');

//function to pull up movie confirm and ask if you want to add recipe
let activateMovieModal = function() {
    document.getElementById('movie-modal').classList.add("is-active");
}
//closes the 'moive-modal'
let closeMovieModal = function() {
    document.getElementById('movie-modal').classList.remove("is-active");
}

//tell user there's an error
let activateErrorModal = function() {
    document.getElementById("error-modal").classList.add("is-active");
}

//generates the html elements to ask about what type of movie you want when you click start
let movieQuiz = function() {
    //remove the welcome page
    let welcomePage = document.getElementById("welcome-page");
    welcomePage.remove();
  
    //create div to put elements in and append to page
    let quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id","quiz-container");
    mainPage.appendChild(quizContainerEl);

    //create header
    let quizHeaderEl = document.createElement("h1");
    quizHeaderEl.textContent = "What kind of movie are we looking for?";
    quizContainerEl.appendChild(quizHeaderEl);

    //create div for option 1
    let quizOption1El = document.createElement("div");
    quizContainerEl.appendChild(quizOption1El);

    //create form option 1 and label (comedy) then append
    let funnyInputEl = document.createElement("input");
    funnyInputEl.setAttribute("type","radio");
    funnyInputEl.setAttribute("id","comedy-input");
    funnyInputEl.setAttribute("value","with_genres=35");
    funnyInputEl.setAttribute("name","movie-input");

    let funnyLabelEl = document.createElement("label");
    funnyLabelEl.setAttribute("for","comedy-input");
    funnyLabelEl.textContent = "  Something funny!";

    quizOption1El.appendChild(funnyInputEl);
    quizOption1El.appendChild(funnyLabelEl);

    //create div for option 2
    let quizOption2El = document.createElement("div");
    quizContainerEl.appendChild(quizOption2El);

    //create form option 2 and label (family) then append
    let familyInputEl = document.createElement("input");
    familyInputEl.setAttribute("type","radio");
    familyInputEl.setAttribute("id","family-input");
    familyInputEl.setAttribute("value","certification_country=US&certification=PG|G");
    familyInputEl.setAttribute("name","movie-input");

    let familyLabelEl = document.createElement("label");
    familyLabelEl.setAttribute("for","family-input");
    familyLabelEl.textContent = "  Something for the whole family!";

    quizOption2El.appendChild(familyInputEl);
    quizOption2El.appendChild(familyLabelEl);

    //create div for option 3
    let quizOption3El = document.createElement("div");
    quizContainerEl.appendChild(quizOption3El);

    //option 3(action)
    let actionInputEl = document.createElement("input");
    actionInputEl.setAttribute("type","radio");
    actionInputEl.setAttribute("id","action-input");
    actionInputEl.setAttribute("value","with_genres=28");
    actionInputEl.setAttribute("name","movie-input");

    let actionLabelEl = document.createElement("label");
    actionLabelEl.setAttribute("for","action-input");
    actionLabelEl.textContent = "  Something exciting!";

    quizOption3El.appendChild(actionInputEl);
    quizOption3El.appendChild(actionLabelEl);

    //create div for option 4
    let quizOption4El = document.createElement("div");
    quizContainerEl.appendChild(quizOption4El);

    //option 4(horror)
    let horrorInputEl = document.createElement("input");
    horrorInputEl.setAttribute("type","radio");
    horrorInputEl.setAttribute("id","scary-input");
    horrorInputEl.setAttribute("value","with_genres=27");
    horrorInputEl.setAttribute("name","movie-input");

    let horrorLabelEl = document.createElement("label");
    horrorLabelEl.setAttribute("for","scary-input");
    horrorLabelEl.textContent = "  Something scary!";

    quizOption4El.appendChild(horrorInputEl);
    quizOption4El.appendChild(horrorLabelEl);

    //create div for option 5
    let quizOption5El = document.createElement("div");
    quizContainerEl.appendChild(quizOption5El);

    //option 5(romance)
    let romanceInputEl = document.createElement("input");
    romanceInputEl.setAttribute("type","radio");
    romanceInputEl.setAttribute("id","romance-input");
    romanceInputEl.setAttribute("value","with_genres=10749");
    romanceInputEl.setAttribute("name","movie-input");

    let romanceLabelEl = document.createElement("label");
    romanceLabelEl.setAttribute("for","romance-input");
    romanceLabelEl.textContent = "  Something romantic!";

    quizOption5El.appendChild(romanceInputEl);
    quizOption5El.appendChild(romanceLabelEl);

    //create div for option 6
    let quizOption6El = document.createElement("div");
    quizContainerEl.appendChild(quizOption6El);

    //option 6(dramatic)
    let dramaInputEl = document.createElement("input");
    dramaInputEl.setAttribute("type","radio");
    dramaInputEl.setAttribute("id","drama-input");
    dramaInputEl.setAttribute("value","with_genres=18");
    dramaInputEl.setAttribute("name","movie-input");

    let dramaLabelEl = document.createElement("label");
    dramaLabelEl.setAttribute("for","drama-input");
    dramaLabelEl.textContent = "  Something dramatic!";

    quizOption6El.appendChild(dramaInputEl);
    quizOption6El.appendChild(dramaLabelEl);

    //finished selecting button
    let doneMovieButttonEl = document.createElement("button");
    doneMovieButttonEl.textContent = "All Set!";
    quizContainerEl.appendChild(doneMovieButttonEl);
};

// generates html elements needed to select what kind of food the user wants
// activates with interactive food modal
let foodQuiz = function() {
let foodModal = document.getElementById("modal-card-body")

// create container to hold food quiz
    let foodContainerEl = document.createElement("div");
    foodContainerEl.setAttribute("id","food-quiz-container");
    foodModal.appendChild(foodContainerEl);

// create header
let foodQuizHeaderEl = document.createElement("h1");
    foodQuizHeaderEl.textContent = "What are you in the mood for?";
    foodContainerEl.appendChild(foodQuizHeaderEl);

// create div for option 1
let foodQuizOption1El = document.createElement("div");
    foodContainerEl.appendChild(foodQuizOption1El);

    let comfortFoodEl = document.createElement("input");
    comfortFoodEl.setAttribute("type", "radio");
    comfortFoodEl.setAttribute("id", "comfort-food-input");
    comfortFoodEl.setAttribute("value", "comfort_food");
    comfortFoodEl.setAttribute("name", "food-input");

    let comfortFoodLabelEl = document.createElement("label");
    comfortFoodLabelEl.setAttribute("for", "comfort-food-input");
    comfortFoodLabelEl.textContent = " Comfort food!"

    foodQuizOption1El.appendChild(comfortFoodEl);
    foodQuizOption1El.appendChild(comfortFoodLabelEl);

// create div for option 2
let foodQuizOption2El = document.createElement("div");
    foodContainerEl.appendChild(foodQuizOption2El);

    let dateNightEl = document.createElement("input");
    dateNightEl.setAttribute("type", "radio");
    dateNightEl.setAttribute("id", "date-night-input");
    dateNightEl.setAttribute("value", "date_night");
    dateNightEl.setAttribute("name", "food-input");

    let dateNightLabelEl = document.createElement("label");
    dateNightLabelEl.setAttribute("for", "date-night-input");
    dateNightLabelEl.textContent = " Something for date night!"

    foodQuizOption2El.appendChild(dateNightEl);
    foodQuizOption2El.appendChild(dateNightLabelEl);

// create div for option 3
let foodQuizOption3El = document.createElement("div");
    foodContainerEl.appendChild(foodQuizOption3El);

    let glutenFreeEl = document.createElement("input");
    glutenFreeEl.setAttribute("type", "radio");
    glutenFreeEl.setAttribute("id", "gluten-free-input");
    glutenFreeEl.setAttribute("value", "gluten_free");
    glutenFreeEl.setAttribute("name", "food-input");

    let glutenFreeLabelEl = document.createElement("label");
    glutenFreeLabelEl.setAttribute("for", "gluten-free-input");
    glutenFreeLabelEl.textContent = " Something gluten-free!"

    foodQuizOption3El.appendChild(glutenFreeEl);
    foodQuizOption3El.appendChild(glutenFreeLabelEl);

// create div for option 4
let foodQuizOption4El = document.createElement("div");
    foodContainerEl.appendChild(foodQuizOption4El);

    let vegetarianEl = document.createElement("input");
    vegetarianEl.setAttribute("type", "radio");
    vegetarianEl.setAttribute("id", "vegetarian-input");
    vegetarianEl.setAttribute("value", "vegetarian");
    vegetarianEl.setAttribute("name", "food-input");

    let vegetarianLabelEl = document.createElement("label");
    vegetarianLabelEl.setAttribute("for", "vegetarian-input");
    vegetarianLabelEl.textContent = " Something vegetarian!"
  
    foodQuizOption4El.appendChild(vegetarianEl);
    foodQuizOption4El.appendChild(vegetarianLabelEl);

//create div for option 5
let foodQuizOption5El = document.createElement("div");
    foodContainerEl.appendChild(foodQuizOption5El);

    let underThirtyEl = document.createElement("input");
    underThirtyEl.setAttribute("type", "radio");
    underThirtyEl.setAttribute("id", "under-thirty-minutes-input");
    underThirtyEl.setAttribute("value", "under_30_minutes");
    underThirtyEl.setAttribute("name", "food-input");
    
    let underThirtyLabelEl = document.createElement("label");
    underThirtyLabelEl.setAttribute("for", "under-thirty-minutes-input");
    underThirtyLabelEl.textContent = " Something under thirty minutes!"

    foodQuizOption5El.appendChild(underThirtyEl);
    foodQuizOption5El.appendChild(underThirtyLabelEl);

//create div for option 6
let foodQuizOption6El = document.createElement("div");
    foodContainerEl.appendChild(foodQuizOption6El);

    let easyEl = document.createElement("input");
    easyEl.setAttribute("type", "radio");
    easyEl.setAttribute("id", "easy-input");
    easyEl.setAttribute("value", "easy");
    easyEl.setAttribute("name", "food-input");

    let easyLabelEl = document.createElement("label");
    easyLabelEl.setAttribute("for", "easy-input");
    easyLabelEl.textContent = " Something easy!"

    foodQuizOption6El.appendChild(easyEl);
    foodQuizOption6El.appendChild(easyLabelEl);

//create div for option 7
let foodQuizOption7El = document.createElement("div");
    foodContainerEl.appendChild(foodQuizOption7El);

    let casualPartyEl = document.createElement("input");
    casualPartyEl.setAttribute("type", "radio");
    casualPartyEl.setAttribute("id", "casual-party-input");
    casualPartyEl.setAttribute("value", "casual_party");
    casualPartyEl.setAttribute("name", "food-input");

    let casualPartyLabelEl = document.createElement("label");
    casualPartyLabelEl.setAttribute("for", "casual-party-input");
    casualPartyLabelEl.textContent = " I'm throwing a casual party!"
   
    foodQuizOption7El.appendChild(casualPartyEl);
    foodQuizOption7El.appendChild(casualPartyLabelEl);

// when the user clicks "Yes, Feed Me" their choice will be passed to the fetchRecipe function   
    document.getElementById("food-modal-confirmation").addEventListener("click", fetchRecipe);
    }

//function to fetch movie data
let fetchMovie = function() {
    //find the selected radio button
    let movieSearchCode = document.querySelector('input[name=movie-input]:checked').value;
    let tmdbURL = "https://api.themoviedb.org/3/discover/movie?api_key=c0ab3fea9a9c982aea8dbffab1e88337&language=en-US&sort_by=popularity.desc&" + movieSearchCode + "&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

    console.log(tmdbURL);
    fetch(tmdbURL).then(function(response) {
        //successful request
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data); //here is where the functions that display the data will need to go, for now it's console log :)
            })
        }
    })
    //for if there is an error with the api
    .catch(function(error) {
        alert("An error occurred - please try again later!") //placeholder!! NO ALERTS
    })
};

//function to fetch recipes
let fetchRecipe = function() {
    // find the selected radio button
    let selectedTag = document.querySelector('input[name=food-input]:checked').value;
    let tastyURL = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=" + selectedTag;
    // fetches the corresponding data
    fetch(tastyURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "3045accac6msh300a69851f07f41p1bf6b9jsn0abefe11abef"
        }
    })
    .then(response => {
        response.json().then(function(data) {
            console.log(data);
        })
    })
    .catch(err => {
        console.error(err);
    });
}

//event listener to create quiz form when "get started!" is pressed
document.getElementById("start-button").addEventListener("click", movieQuiz);