import navbar from "./components/navbar.js";

import { getData, displayData } from "./scripts/showData.js";
let header = document.getElementById("header");
let container = document.getElementById("container");

header.innerHTML = navbar();

let url = `https://fakestoreapi.com/products/category/jewelery`;

let output = await getData(url);

displayData(output, container);