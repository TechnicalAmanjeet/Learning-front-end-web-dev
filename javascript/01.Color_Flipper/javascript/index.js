import { colorList } from './color_list.js';

console.log("just for testing.");

// just for testing pourpose

console.log(colorList[2]);


const button = document.getElementById("change_background_color");
const background_to_change_color = document.querySelector(".main")
const output = document.getElementById("output-value");

button.addEventListener("click", () =>{
    console.log("red");
    background_to_change_color.style.background = "red";
})