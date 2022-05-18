
function pick_color_name(){
    let hsl_color = [];
    let random_number = parseInt( Math.random() * 360 );
    hsl_color.push(random_number);
    for(let i=0; i<2; ++i){
        let random_number = parseInt( Math.random() * 100 );
        hsl_color.push(random_number);
    }
    let hsl = 'hsl('+hsl_color[0]+','+hsl_color[1]+'%,'+hsl_color[2]+'%)';
    // console.log(hsl);
    return hsl;
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