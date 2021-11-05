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

//generates the html elements to ask about what type of movie you want when you click start
let movieQuiz = function() {
    //remove the welcome page
    let welcomePage = document.getElementById("welcome-page");
    welcomePage.remove();

    //create div to put elements in and append to page
    let quizContainerEl = document.createElement("div");
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
    funnyInputEl.setAttribute("value","comedy");
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
    familyInputEl.setAttribute("value","family");
    familyInputEl.setAttribute("name","movie-input");

    let familyLabelEl = document.createElement("label");
    familyLabelEl.setAttribute("for","comedy-input");
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
    actionInputEl.setAttribute("value","action");
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
    horrorInputEl.setAttribute("value","scary");
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
    romanceInputEl.setAttribute("value","romance");
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
    dramaInputEl.setAttribute("value","drama");
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

let foodQuiz = function() {
    let welcomePage = document.getElementById("welcome-page");
    welcomePage.remove();

        //create div to put elements in and append to page
        let quizContainerEl = document.createElement("div");
        mainPage.appendChild(quizContainerEl);
    
        //create header
        let quizHeaderEl = document.createElement("h1");
        quizHeaderEl.textContent = "What do you feel like eating?";
        quizContainerEl.appendChild(quizHeaderEl);
    
        //create div for option 1
        let quizOption1El = document.createElement("div");
        quizContainerEl.appendChild(quizOption1El);
    
        //create form option 1 and label (sweet) then append
        let sweetInputEl = document.createElement("input");
        sweetInputEl.setAttribute("type","radio");
        sweetInputEl.setAttribute("id","sweet-input");
        sweetInputEl.setAttribute("value","sweet");
        sweetInputEl.setAttribute("name","food-input");
    
        let sweetLabelEl = document.createElement("label");
        sweetLabelEl.setAttribute("for","sweet-input");
        sweetLabelEl.textContent = "  Something sweet!";
    
        quizOption1El.appendChild(sweetInputEl);
        quizOption1El.appendChild(sweetLabelEl);
    
        //create div for option 2
        let quizOption2El = document.createElement("div");
        quizContainerEl.appendChild(quizOption2El);
    
        //create form option 2 and label (savory) then append
        let savoryInputEl = document.createElement("input");
        savoryInputEl.setAttribute("type","radio");
        savoryInputEl.setAttribute("id","savory-input");
        savoryInputEl.setAttribute("value","savory");
        savoryInputEl.setAttribute("name","food-input");
    
        let savoryLabelEl = document.createElement("label");
        savoryLabelEl.setAttribute("for","savory-input");
        savoryLabelEl.textContent = "  Something savory!";
    
        quizOption2El.appendChild(savoryInputEl);
        quizOption2El.appendChild(savoryLabelEl);
    
        //create div for option 3
        let quizOption3El = document.createElement("div");
        quizContainerEl.appendChild(quizOption3El);
    
        //option 3(cheesy)
        let cheesyInputEl = document.createElement("input");
        cheesyInputEl.setAttribute("type","radio");
        cheesyInputEl.setAttribute("id","cheesy-input");
        cheesyInputEl.setAttribute("value","cheesy");
        cheesyInputEl.setAttribute("name","food-input");
    
        let cheesyLabelEl = document.createElement("label");
        cheesyLabelEl.setAttribute("for","cheesy-input");
        cheesyLabelEl.textContent = "  Something cheesy!";
    
        quizOption3El.appendChild(cheesyInputEl);
        quizOption3El.appendChild(cheesyLabelEl);
    
        //create div for option 4
        let quizOption4El = document.createElement("div");
        quizContainerEl.appendChild(quizOption4El);
    
        //option 4(salty)
        let saltyInputEl = document.createElement("input");
        saltyInputEl.setAttribute("type","radio");
        saltyInputEl.setAttribute("id","salty-input");
        saltyInputEl.setAttribute("value","salty");
        saltyInputEl.setAttribute("name","food-input");
    
        let saltyLabelEl = document.createElement("label");
        saltyLabelEl.setAttribute("for","salty-input");
        saltyLabelEl.textContent = "  Something salty!";
    
        quizOption5El.appendChild(saltyInputEl);
        quizOption5El.appendChild(saltyLabelEl);
        
        //create div for option 5
        let quizOption4El = document.createElement("div");
        quizContainerEl.appendChild(quizOption4El);
    
        //option 5(vegetarian)
        let vegetarianInputEl = document.createElement("input");
        vegetarianInputEl.setAttribute("type","radio");
        vegetarianInputEl.setAttribute("id","vegetarian-input");
        vegetarianInputEl.setAttribute("value","vegetarian");
        vegetarianInputEl.setAttribute("name","food-input");
    
        let vegetarianLabelEl = document.createElement("label");
        vegetarianLabelEl.setAttribute("for","vegetarian-input");
        vegetarianLabelEl.textContent = "  Something vegetarian!";
    
        quizOption4El.appendChild(vegetarianInputEl);
        quizOption4El.appendChild(vegetarianLabelEl);
    
        //create div for option 6
        let quizOption6El = document.createElement("div");
        quizContainerEl.appendChild(quizOption6El);
    
        //option 6(family)
        let familyDinnerInputEl = document.createElement("input");
        familyDinnerInputEl.setAttribute("type","radio");
        familyDinnerInputEl.setAttribute("id","family-dinner-input");
        familyDinnerInputEl.setAttribute("value","family-dinner");
        familyDinnerInputEl.setAttribute("name","food-input");
    
        let familyDinnerLabelEl = document.createElement("label");
        familyDinnerLabelEl.setAttribute("for","family-dinner-input");
        familyDinnerLabelEl.textContent = "  Something for the whole family!";
    
        quizOption6El.appendChild(familyDinnerInputEl);
        quizOption6El.appendChild(familyDinnerLabelEl);
    
        //finished selecting button
        let doneFoodButtonEl = document.createElement("button");
        doneFoodButtonEl.textContent = "All Set!";
        quizContainerEl.appendChild(doneFoodButtonEl);
}

//event listener to create quiz form when "get started!" is pressed
document.getElementById("start-button").addEventListener("click", movieQuiz);