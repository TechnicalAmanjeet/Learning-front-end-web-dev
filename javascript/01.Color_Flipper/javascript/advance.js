




function pick_color_name() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    let a = Math.random().toFixed(2);
    // let a=1;
   let bgcol1 = `rgba(${x},${y},${z},${a})`;
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);
    a = Math.random().toFixed(2);
    let bgcol2 = `rgba(${x},${y},${z},${a})`;
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);
    a = Math.random().toFixed(2);
    let bgcol3 = `rgba(${x},${y},${z},${a})`;

    let deg = Math.floor(Math.random() * 360);

    let bg = `linear-gradient(${deg}deg, ${bgcol1}, ${bgcol2},${bgcol3}`;

    
    return bg;
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













