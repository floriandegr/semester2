const setup = () => {
    let button=document.getElementById("button");
    button.addEventListener("click", update);
}
const update = () => {
    let textbox=document.getElementById("textbox");
    let text = textbox.value;
    let finText = "";
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i) !== " ") {
            finText += (text.charAt(i) + " ");
        }
    }
    finText = finText.trim()
    let result=document.getElementById("result");
    result.innerHTML=finText;
}
window.addEventListener("load", setup);
