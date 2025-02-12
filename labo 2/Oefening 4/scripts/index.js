const setup = () => {
    let btnsplice = document.getElementById("btnsplice");

    btnsplice.addEventListener("click", splice);
}
window.addEventListener("load", setup);

const splice = () =>
{
    let txtInput = document.getElementById("txtInput");
    let startInput = document.getElementById("startInput");
    let endInput = document.getElementById("endInput");
    let tekst = txtInput.value;

    console.log(tekst);
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = tekst.substring(startInput.value, endInput.value);

}