import navbar from "./components/navbar.js";


let header = document.getElementById("header");

header.innerHTML = navbar();


let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", searchNow);


function searchNow() {
    document.getElementById("containerSearch").textContent = "";
    async function getData(){
        try {
            let select = document.getElementById("searchFood").value;
            console.log(select)
            let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${select}`
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            displayData(data);
        } catch (err) {
            console.log(err);
        }
    }
    getData();
}

function displayData(data) {
    
    data.meals.forEach(element => {
        let container = document.getElementById("containerSearch");
        let div = document.createElement("div");

        let foodImg = document.createElement("img");
        foodImg.src = element.strMealThumb;

        let foodTitle = document.createElement("p");
        foodTitle.textContent = `Food name : ${element.strMeal}`

        let category = document.createElement("p");
        category.textContent = `Category : ${element.strCategory}`;

        let ingredients = document.createElement("p");
        ingredients.textContent = `Ingredients : ${element.strIngredient1}, ${element.strIngredient2}, ${element.strIngredient3}, ${element.strIngredient4}, ${element.strIngredient5}, ${element.strIngredient6}, ${element.strIngredient7}, ${element.strIngredient8}, ${element.strIngredient9}, ${element.strIngredient10},`

        div.append(foodImg, foodTitle, category, ingredients);
        container.append(div);
    });

}