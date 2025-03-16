const setup = () => {
    let submit=document.getElementById("submit");
    submit.addEventListener("click", update  );
}
const update=()=>{
    let roker=document.getElementById("roker");
    let moedertalen  = document.getElementsByName("moedertaal");
    let buurland  = document.getElementById("buurland");
    let bestelling = document.getElementById("bestelling");
    if(roker.checked){
        console.log("is een roker");
    }
    else{
        console.log("is geen roker");
    }
    for(let moedertaal of moedertalen){
        if(moedertaal.checked){
            console.log("moedertaal is " + moedertaal.value);
        }
    }
    if(buurland.selectedIndex !== -1)
    {
        console.log("favoriete buurland is " + buurland[buurland.selectedIndex].value);
    }

    let lijst = [];
    let options = bestelling.options
    for(let item of options){
        if(item.selected){
            lijst.push(" " + item.value);
        }
    }
    console.log("bestelling bestaat uit" + lijst );
}

window.addEventListener("load", setup);