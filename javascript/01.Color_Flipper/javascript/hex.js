const hex_value = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

alert("Change the background color of page by clicking on the 'change background color' button.")

function pick_color_name(){
    let hex_color = "#";
    for(let i=0; i<6; ++i){
        let random_number = parseInt( Math.random() * hex_value.length );
        hex_color += hex_value[random_number];
    }
    // console.log(hex_color);
    return hex_color;
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