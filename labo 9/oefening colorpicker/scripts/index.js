

const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].value = localStorage.getItem('slider ' +i)
    }
    update()

    let colors = JSON.parse(localStorage.getItem("blocks"));
    let length = 0;
    if (colors == null) {length = 0;}
    else {length = colors.length;}
    for (let i = 0; i < length ; i++) {
        safeBlock(colors[i]);
    }
    let button = document.getElementById("save");
    sliders[0].addEventListener("change", update);
    sliders[1].addEventListener("change", update);
    sliders[2].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("input", update);
    button.addEventListener("click", save);


}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        localStorage.setItem(('slider ' + i), sliders[i].value);
        document.getElementById(sliders[i].className.substring(7)).innerHTML = sliders[i].value;

    }

    let r = document.getElementById("r").innerText.valueOf();
    let g = document.getElementById("g").innerText.valueOf();
    let b = document.getElementById("b").innerText.valueOf();
    r = parseInt(r, 10);
    g = parseInt(g, 10);
    b = parseInt(b, 10);
    document.getElementById("block").style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
}
const safeBlock = (color) => {
    console.log(color);
    let block = document.createElement("div");
    let body = document.getElementById("saved");
    block.classList.add("color");
    block.classList.add("saved");
    block.style.backgroundColor = color;
    let cross = document.createElement("input");
    cross.setAttribute("type", "button");
    cross.setAttribute("value", "x");
    cross.classList.add("cross");
    block.appendChild(cross);
    body.appendChild(block);

    cross.addEventListener("click", remove)
    block.addEventListener("click", placeColor);

}
const save = () => {
    let color = document.getElementById("block").style.backgroundColor;
    console.log(color);
    safeBlock(color);
    saveLocal()
}
const saveLocal =() =>{
    let blocks = document.getElementsByClassName("saved");
    localStorage.removeItem("blocks")
    let colors = []
    for (let i = 0; i < blocks.length; i++) {
        colors.push(blocks[i].style.backgroundColor)
    }

    localStorage.setItem("blocks",JSON.stringify(colors));
}
const remove = (event) => {
    event.target.parentNode.remove();
    event.stopPropagation();
    saveLocal()


}
const placeColor = (event) => {
    let colors = event.target.style.backgroundColor
    document.getElementById("block").style.backgroundColor= colors;
    event.stopPropagation();
    let sliders = document.getElementsByClassName("slider");
    "rgb(128, 128, 243)"
    let colorAray = colors.split(", ")
    sliders[0].value = colorAray[0].substring(4)
    sliders[1].value = colorAray[1]
    sliders[2].value = colorAray[2].substring(0,3)
    for (let i = 0; i < sliders.length; i++) {
        localStorage.setItem(('slider ' + i), sliders[i].value);
    }






}
window.addEventListener("load", setup);