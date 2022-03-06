import navbar from "./components/navbar.js";

let header = document.getElementById("header");

header.innerHTML = navbar();

// www.themealdb.com/api/json/v1/1/random.php

async function getData() {
    try {
        let res = await fetch(`http://themealdb.com/api/json/v1/1/random.php`);
        let data = await res.json();
        console.log(data);
        displayData(data);
    } catch (err) {
        console.log(err);
    }
}
getData();

function displayData(data) {
    data.meals.forEach(element => {
        let container = document.getElementById("containerDiv");
        let div = document.createElement("div");
        div.className = "myDiv";

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



// dateModified: null
// idMeal: "52990"
// strArea: "British"
// strCategory: "Dessert"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Butter"
// strIngredient2: "Muscovado Sugar"
// strIngredient3: "Plain Flour"
// strIngredient4: "Eggs"
// strIngredient5: "Ground Almonds"
// strIngredient6: "Sherry"
// strIngredient7: "Candied Peel"
// strIngredient8: "Glace Cherry"
// strIngredient9: "Raisins"
// strIngredient10: "Currants"
// strIngredient11: "Pecan Nuts"
// strIngredient12: "Lemon"
// strIngredient13: "Mixed Spice"
// strIngredient14: "Rose water"
// strIngredient15: "Vanilla Extract"
// strIngredient16: "Baking Powder"
// strIngredient17: ""
// strIngredient18: ""
// strIngredient19: ""
// strIngredient20: ""
// strInstructions: "Heat oven to 160C/fan 140C/gas 3. Line the base and sides of a 20 cm round, 7.5 cm deep cake tin. Beat the butter and sugar with an electric hand mixer for 1-2 mins until very creamy and pale in colour, scraping down the sides of the bowl half way through. Stir in a spoonful of the flour, then stir in the beaten egg and the rest of the flour alternately, a quarter at a time, beating well each time with a wooden spoon. Stir in the almonds.\r\n\r\nMix in the sherry (the mix will look curdled), then add the peel, cherries, raisins, cherries, nuts, lemon zest, spice, rosewater and vanilla. Beat together to mix, then stir in the baking powder.\r\n\r\nSpoon mixture into the tin and smooth the top, making a slight dip in the centre. Bake for 30 mins, then lower temperature to 150C/fan 130C/gas 2 and bake a further 2-2¼ hrs, until a skewer insterted in the middle comes out clean. Leave to cool in the tin, then take out of the tin and peel off the lining paper. When completely cold, wrap well in cling film and foil to store until ready to decorate. The cake will keep for several months."
// strMeal: "Christmas cake"
// strMealThumb: "https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg"
// strMeasure1: "200g"
// strMeasure2: "200g"
// strMeasure3: "200g"
// strMeasure4: "4 Beaten"
// strMeasure5: "50g"
// strMeasure6: "100ml"
// strMeasure7: "85g"
// strMeasure8: "85g"
// strMeasure9: "250g"
// strMeasure10: "250g"
// strMeasure11: "100g "
// strMeasure12: "Grated zest of 1"
// strMeasure13: "1 ½ tbsp"
// strMeasure14: "1 ½ tbsp"
// strMeasure15: "1/2 tsp"
// strMeasure16: "1/2 tsp"
// strMeasure17: " "
// strMeasure18: " "
// strMeasure19: " "
// strMeasure20: " "
// strSource: "https://www.bbcgoodfood.com/recipes/angela-nilsens-christmas-cake"
// strTags: "Christmas"
// strYoutube: "https://www.youtube.com/watch?v=34yeL8TstO0"