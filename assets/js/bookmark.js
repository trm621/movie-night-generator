//global variable for local storage saved recipes
let savedRecipes = [];

//load saved recipes
let recipeLoader = function() {
    savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
}
recipeLoader();

for (let i=0; i<savedRecipes.length; i++) {
    let recipeItemEl = document.createElement("li");
    let recipeEl = document.createElement("a");
    recipeEl.textContent = savedRecipes[i];
    recipeEl.setAttribute("href", savedRecipes[i]);
    document.getElementById("bookmarked-recipes-list").appendChild(recipeItemEl);
    recipeItemEl.appendChild(recipeEl);
}