import navbar from "./components/navbar.js";

let header = document.getElementById("header");

header.innerHTML = navbar();
// let show = document.querySelector(".offerViewDetails");
// show.addEventListener("click", display);

// Function to show popup details.

// const myBlurFunction = function(state) {
//     /* state can be 1 or 0 */
//     var containerElement = document.getElementById('container');
//     var overlayEle = document.getElementById('overlay');

//     if (state) {
//         overlayEle.style.display = 'block';
//         containerElement.setAttribute('class', 'blur');
//     } else {
//         overlayEle.style.display = 'none';
//         containerElement.setAttribute('class', null);
//     }
// };

// function myBlurFunction(state) {
//     var containerElement = document.getElementById('container');
//     var overlayEle = document.getElementById('overlay');

//     if (state) {
//         overlayEle.style.display = 'block';
//         containerElement.setAttribute('class', 'blur');
//     } else {
//         overlayEle.style.display = 'none';
//         containerElement.setAttribute('class', null);
//     }
// }
// myBlurFunction(state)