//global variable for the "main" element
let mainPage = document.getElementById('main-page');

//function to pull up movie confirm and ask if you want to add recipe
let activateModal = function() {
    document.getElementById('movie-modal').classList.add("is-active");
}
//closes the 'moive-modal'
let closeModal = function() {
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

    //create form
    let quizFormEl = document.createElement("form");
    quizContainerEl.appendChild(quizFormEl);

    //create form option 1 and label (comedy) then append
    let funnyInputEl = document.createElement("input");
    funnyInputEl.setAttribute("type","radio");
    funnyInputEl.setAttribute("id","comedy-input");
    funnyInputEl.setAttribute("value","comedy");
    funnyInputEl.setAttribute("name","comedy-input");

    let funnyLabelEl = document.createElement("label");
    funnyLabelEl.setAttribute("for","comedy-input");
    funnyLabelEl.textContent = "  Something funny!";

    quizFormEl.appendChild(funnyInputEl);
    quizFormEl.appendChild(funnyLabelEl);

    //create form option 2 and label (family) then append
    let familyInputEl = document.createElement("input");
    familyInputEl.setAttribute("type","radio");
    familyInputEl.setAttribute("id","family-input");
    familyInputEl.setAttribute("value","family");
    familyInputEl.setAttribute("name","family-input");

    let familyLabelEl = document.createElement("label");
    familyLabelEl.setAttribute("for","comedy-input");
    familyLabelEl.textContent = "  Something for the whole family!";

    quizFormEl.appendChild(familyInputEl);
    quizFormEl.appendChild(familyLabelEl);

    //option 3(action)
    let actionInputEl = document.createElement("input");
    actionInputEl.setAttribute("type","radio");
    actionInputEl.setAttribute("id","action-input");
    actionInputEl.setAttribute("value","action");
    actionInputEl.setAttribute("name","action-input");

    let actionLabelEl = document.createElement("label");
    actionLabelEl.setAttribute("for","action-input");
    actionLabelEl.textContent = "  Something exciting!";

    quizFormEl.appendChild(actionInputEl);
    quizFormEl.appendChild(actionLabelEl);

    //option 4(horror)
    let horrorInputEl = document.createElement("input");
    horrorInputEl.setAttribute("type","radio");
    horrorInputEl.setAttribute("id","scary-input");
    horrorInputEl.setAttribute("value","scary");
    horrorInputEl.setAttribute("name","scary-input");

    let horrorLabelEl = document.createElement("label");
    horrorLabelEl.setAttribute("for","scary-input");
    horrorLabelEl.textContent = "  Something scary!";

    quizFormEl.appendChild(horrorInputEl);
    quizFormEl.appendChild(horrorLabelEl);

    //option 5(romance)
    let romanceInputEl = document.createElement("input");
    romanceInputEl.setAttribute("type","radio");
    romanceInputEl.setAttribute("id","romance-input");
    romanceInputEl.setAttribute("value","romance");
    romanceInputEl.setAttribute("name","romance-input");

    let romanceLabelEl = document.createElement("label");
    romanceLabelEl.setAttribute("for","romance-input");
    romanceLabelEl.textContent = "  Something romantic!";

    quizFormEl.appendChild(romanceInputEl);
    quizFormEl.appendChild(romanceLabelEl);

    //option 6(dramatic)
    let dramaInputEl = document.createElement("input");
    dramaInputEl.setAttribute("type","radio");
    dramaInputEl.setAttribute("id","drama-input");
    dramaInputEl.setAttribute("value","drama");
    dramaInputEl.setAttribute("name","drama-input");

    let dramaLabelEl = document.createElement("label");
    dramaLabelEl.setAttribute("for","drama-input");
    dramaLabelEl.textContent = "  Something dramatic!";

    quizFormEl.appendChild(dramaInputEl);
    quizFormEl.appendChild(dramaLabelEl);
};

//event listener to create quiz form when "get started!" is pressed
document.getElementById("start-button").addEventListener("click", movieQuiz);