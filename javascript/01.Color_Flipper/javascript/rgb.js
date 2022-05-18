
function pick_color_name(){
    let rgb_color = [];
    for(let i=0; i<3; ++i){
        let random_number = parseInt( Math.random() * 255 );
        rgb_color.push(random_number);
    }
    let rgb = 'rgb('+rgb_color[0]+','+rgb_color[1]+','+rgb_color[2]+')';
    console.log(rgb);
    return rgb;
}

function change_background_color_f(){
    const color = pick_color_name();
    background_to_change_color.style.background = color;
    output.innerText = color;
}


alert("Change the background color of page by clicking on the 'change background color' button.");
// console.log(colorList[2]);


const button = document.getElementById("change_background_color");
const background_to_change_color = document.querySelector(".main")
const output = document.getElementById("output-value");

button.addEventListener("click", change_background_color_f)