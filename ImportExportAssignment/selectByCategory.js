import navbar from "./components/navbar.js";

let header = document.getElementById("header");

header.innerHTML = navbar();
let select = document.getElementById("select");
let store = JSON.parse(localStorage.getItem("store"));

        if(store===null){

            localStorage.setItem("store", JSON.stringify([]));

            async function foodData(){
                try {
                    let res = await fetch(`http://themealdb.com/api/json/v1/1/categories.php`);
                    let data = await res.json();
                    console.log(data);
                    data.categories.forEach(element => {
                        console.log(element.strCategory)

                        let option = document.createElement("option");
                        option.textContent = element.strCategory;

                        let  again = JSON.parse(localStorage.getItem("store"));
                    
                        let obj = {};
                        obj.category = element.strCategory;
                
                        // console.log(again)
                        again.push(obj);

                        let store = localStorage.setItem("store", JSON.stringify(again));

                        let select = document.getElementById("select");
                        select.append(option);
                    });
                }
                catch (err) {
                    console.log(err);
                }
            }
            foodData();
        }


        function fetchCategory() {

            let data = JSON.parse(localStorage.getItem("store"));

            data.forEach(element => {

                let option = document.createElement("option");
                option.textContent = element.category;

                let select = document.getElementById("select");
                select.append(option);

            });
        }

        fetchCategory();

        // let select = document.getElementById("select").value;
        select.addEventListener("click", display);
        function display() {

            // let select = document.getElementById("select").value;
        
            // console.log(select)
            async function foodItem() {
                try {
                    let res = await fetch(`http://themealdb.com/api/json/v1/1/filter.php?c=${select.value}`);
                    let data1 = await res.json();
                    console.log("data1" + data1)
                    displayData(data1);
                }
                catch (err) {
                    console.log(err);
                }
            }

            foodItem();

            function displayData(data1) {
                // console.log(data1)
                container.innerText = "";
                data1.meals.forEach(element => {

                    let main = document.createElement("div");

                    let container = document.getElementById("container");

                    let img = document.createElement("img");
                    img.src = element.strMealThumb;

                    let title = document.createElement("p");
                    title.textContent = element.strMeal;

                    main.append(img, title);
                    container.append(main);
                });
            }
            // displayData()

        }

        // display();