const setup = () => {
    let gemeentes = askGemeente().sort();
    displayGemeentes(gemeentes);


}
const askGemeente = ()  => {
    let gemeente = "";
    let gemeentes = [];


    while (gemeente.toLowerCase() !== "stop") {
        gemeente = window.prompt("Geef een gemeente op", "gemeente");
        if (gemeente != "stop") {
            gemeentes.push(gemeente);
        }

    }
    return gemeentes;
}
const displayGemeentes = (gemeentes) => {
    let select = document.getElementById("gemeentes");
    let innerHtlm = ""
    for (let gemeente of gemeentes){
        innerHtlm += "<option>" + gemeente + "</option>";
    }
    select.innerHTML = innerHtlm;

}

window.addEventListener("load", setup);