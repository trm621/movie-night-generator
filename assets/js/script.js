//global variable for the "main" element
let mainPage = document.getElementById('main-page');

//function to pull up movie confirm and ask if you want to add recipe
let activateFoodModal = function() {
    document.getElementById('food-modal').classList.add("is-active");
}
//closes the 'moive-modal'
let closeFoodModal = function() {
    document.getElementById('food-modal').classList.remove("is-active");
}

//tell user there's an error
let activateErrorModal = function() {
    document.getElementById("error-modal").classList.add("is-active");
}

//generates the html elements to ask about what type of movie you want when you click start
let movieQuiz = function() {
    //remove the welcome page and prep screen
    let welcomePage = document.getElementById("welcome-page");
    welcomePage.remove();
    mainPage.classList.remove('center-all');
    //create div to put elements in and append to page
    let quizContainerEl = document.createElement("div");
    quizContainerEl.setAttribute("id","quiz-container");
    quizContainerEl.setAttribute("class", "container");
    quizContainerEl.classList.add("column","is-half", "is-three-quarters-mobile", "center-text", "trans-bg");
    mainPage.appendChild(quizContainerEl);

    //create header
    let quizHeaderEl = document.createElement("h1");
    quizHeaderEl.textContent = "What kind of movie are we looking for?";
    quizContainerEl.appendChild(quizHeaderEl);

    //create div for option 1
    let quizOption1El = document.createElement("div");
    quizOption1El.setAttribute("class","option");
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
    quizOption2El.setAttribute("class","option");
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
    quizOption3El.setAttribute("class","option");
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
    quizOption4El.setAttribute("class","option");
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
    quizOption5El.setAttribute("class","option");
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
    quizOption6El.setAttribute("class","option");
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

    //break to space button
    let formBreak = document.createElement("br");
    quizContainerEl.appendChild(formBreak);

    //finished selecting button
    let doneMovieButttonEl = document.createElement("button");
    doneMovieButttonEl.textContent = "All Set!";
    doneMovieButttonEl.setAttribute("id","done-movie-button");
    doneMovieButttonEl.setAttribute("class","button is-warning")
    quizContainerEl.appendChild(doneMovieButttonEl);

    //event listener for "All Set" to fetch movie data and pull up food modal
    document.getElementById("done-movie-button").addEventListener("click", function() {
    activateFoodModal();
    foodQuiz();

});
};

// generates html elements needed to select what kind of food the user wants
// activates with interactive food modal
let foodQuiz = function() {
let foodModal = document.getElementById("food-modal-body");

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
    comfortFoodLabelEl.textContent = " Comfort food!";

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
    dateNightLabelEl.textContent = " Something for date night!";

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
    glutenFreeLabelEl.textContent = " Something gluten-free!";

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
    vegetarianLabelEl.textContent = " Something vegetarian!";
  
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
    underThirtyLabelEl.textContent = " Something under thirty minutes!";

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
    easyLabelEl.textContent = " Something easy!";

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
    casualPartyLabelEl.textContent = " I'm throwing a casual party!";
   
    foodQuizOption7El.appendChild(casualPartyEl);
    foodQuizOption7El.appendChild(casualPartyLabelEl);
}

//function to fetch movie data
let fetchMovie = function() {
    //find the selected radio button
    let movieSearchCode = document.querySelector('input[name=movie-input]:checked').value;
    let tmdbURL = "https://api.themoviedb.org/3/discover/movie?api_key=c0ab3fea9a9c982aea8dbffab1e88337&language=en-US&sort_by=popularity.desc&" + movieSearchCode + "&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

    fetch(tmdbURL).then(function(response) {
        //successful request
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayMovie(data);
                closeFoodModal();
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
            displayRecipe(data);
        })
    })
    .catch(err => {
        console.error(err);
    });
};

let goBack = function() {
    //clear container so you can go back
    document.getElementById("food-quiz-container").remove();

    //close the modal
    closeFoodModal();
}

let displayMovie = function(data) {
    //remove movie quiz and set up page
    document.getElementById("quiz-container").remove();
    mainPage.classList.remove("columns");

    //MATH FOR TOM :(

    //build the container part of the display
    let contentContainerEl = document.createElement("div");
    contentContainerEl.setAttribute("id", "content-container");
    contentContainerEl.setAttribute("class", "columns");
    mainPage.appendChild(contentContainerEl);

    //build the movie part of the display
    let movieContainerEl = document.createElement("div");
    movieContainerEl.setAttribute("id", "movie-container");
    movieContainerEl.setAttribute("class", "column");
    movieContainerEl.classList.add("is-half");
    contentContainerEl.appendChild(movieContainerEl);

    //build the title of the movie
    let movieTitleEl = document.createElement("h1");
    movieTitleEl.setAttribute("id", "movie-title");
    movieTitleEl.textContent = data.results[0].title;
    movieContainerEl.appendChild(movieTitleEl);

    //build poster
    let moviePosterEl = document.createElement("img");
    moviePosterEl.setAttribute("id", "movie-poster");
    moviePosterEl.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path);
    movieContainerEl.appendChild(moviePosterEl);

    //build description
    let movieDescEl = document.createElement("p");
    movieDescEl.setAttribute("id", "movie-desc");
    movieDescEl.textContent = data.results[0].overview;
    movieContainerEl.appendChild(movieDescEl);
};

let displayRecipe = function(data) {
    //MATH
    var generatedRecipe;
    let generateNumber = function() {
        generatedRecipe = Math.floor(Math.random()*20);
        return generatedRecipe
    }

    generateNumber();

    //build the container part of the display
    let contentContainerEl = document.createElement("div");
    contentContainerEl.setAttribute("id", "content-container");
    contentContainerEl.setAttribute("class", "columns");
    mainPage.appendChild(contentContainerEl);

    //build the recipe part of the display
    let recipeContainerEl = document.createElement("div");
    recipeContainerEl.setAttribute("id", "recipe-container");
    recipeContainerEl.setAttribute("class", "column");
    recipeContainerEl.classList.add("is-half");
    contentContainerEl.appendChild(recipeContainerEl);

    //build the title of the recipe
    let recipeTitleEl = document.createElement("h1");
    recipeTitleEl.setAttribute("id", "recipe-title");
    recipeTitleEl.textContent = data.results[generatedRecipe].name;
    recipeContainerEl.appendChild(recipeTitleEl);

    //build image of recipe
    let foodPicEl = document.createElement("img");
    foodPicEl.setAttribute("id", "recipe-picture");
    foodPicEl.setAttribute("src", data.results[generatedRecipe].thumbnail_url);
    recipeContainerEl.appendChild(foodPicEl);

    //build description section
    let foodDescEl = document.createElement("p");
    foodDescEl.setAttribute("id", "movie-desc");
    foodDescEl.textContent = data.results[generatedRecipe].description;
    recipeContainerEl.appendChild(foodDescEl);

    let foodLink = document.createElement("a")
    foodLink.setAttribute("href", "https://tasty.co/recipe/" + data.results[generatedRecipe].slug);
    foodLink.innerText = "Click here for recipe!"
    recipeContainerEl.appendChild(foodLink);
};

//event listener to create quiz form when "get started!" is pressed
document.getElementById("start-button").addEventListener("click", movieQuiz);

//event listener to "go back" button and for closing the modal
document.getElementById("food-modal-back").addEventListener("click", goBack);

//event listener to fetch movie and food
document.getElementById("food-modal-confirmation").addEventListener("click", function() {
    fetchMovie();
    fetchRecipe();
}
);

//event listener to fetch only movie
document.getElementById("food-modal-skip").addEventListener("click", fetchMovie);