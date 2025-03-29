let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,
// aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let play = document.getElementById('playButton');
    play.addEventListener('click', startGame)


}
const startGame = () => {
    let img = document.getElementById('bom');
    let play = document.getElementById('playButton');
    img.addEventListener('click', clicked)
    img.classList.remove('hidden');
    play.classList.add('hidden');
    global.timeoutId = setTimeout(changeplace, global.MOVE_DELAY);


}
const clicked = () => {
    clearTimeout(global.timeoutId);

    let img = document.getElementById('bom');
    if(img.getAttribute("src") ===global.IMAGE_PATH_PREFIX +0 + global.IMAGE_PATH_SUFFIX) {
        window.alert("ow no, that's a bom \n watch out next time")
        img.classList.add('hidden');
        let play = document.getElementById('playButton');
        play.classList.remove('hidden');
        global.score = 0;

    }
    else{global.score++;
        changeplace(); }
    document.getElementById('score').innerText = global.score;



}
const changeplace = () =>{

    let img = document.getElementById('bom');
    let x = Math.random() * 600
    let y = Math.random() * 800;
    img.style.marginLeft= x + "px";
    img.style.marginTop= y + "px";
    let randImg = Math.floor(Math.random() * global.IMAGE_COUNT);
    img.src = global.IMAGE_PATH_PREFIX +randImg + global.IMAGE_PATH_SUFFIX;
    global.timeoutId = setTimeout(changeplace, global.MOVE_DELAY);


}




window.addEventListener("load", setup);


