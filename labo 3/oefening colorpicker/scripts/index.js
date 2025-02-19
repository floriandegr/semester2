const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    sliders[0].addEventListener("change", update);
    sliders[1].addEventListener("change", update);
    sliders[2].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("input", update);
}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        document.getElementById(sliders[i].className).innerHTML = sliders[i].value;
    }
    document.getElementById(sliders[0].className).innerHTML = sliders[i].value;
    let r = document.getElementById(r).innerHTML.valueOf();
    let g = document.getElementById(g).innerHTML.valueOf();
    let b = document.getElementById(b).innerHTML.valueOf();
    document.getElementsByClassName("block")[0].style.backgroundColor= 'rgb=(r,g,b)';

}
window.addEventListener("load", setup);