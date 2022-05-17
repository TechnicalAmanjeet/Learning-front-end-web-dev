import { colorList } from './color_list.js';

// console.log("just for testing.");

// just for testing pourpose
// console.log(colorList.length)

// alert("Change the background color of page by clicking on the 'change background color' button.")

function pick_color_name(){
    let random_number = parseInt( Math.random() * colorList.length );
    return colorList[random_number];
}

// console.log(colorList[2]);


const button = document.getElementById("change_background_color");
const background_to_change_color = document.querySelector(".main")
const output = document.getElementById("output-value");

button.addEventListener("click", () =>{
    const color = pick_color_name();
    background_to_change_color.style.background = color;
    output.innerText = color;
})