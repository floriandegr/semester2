const setup = () => {
    let submit=document.getElementById("submit");
    submit.addEventListener("click", update  );
}
const update=()=>{

    let voornaam=document.getElementById("voornaam");
    let familienaam=document.getElementById("familienaam");
    let geboortedatum=document.getElementById("geboortedatum");
    let email=document.getElementById("email");
    let aantalkinderen=document.getElementById("aantalKinderen");
    let correct = true;
    let error = document.getElementById("errorVoornaam");
    error.innerHTML= "";
    voornaam.classList.remove("error");
    if(voornaam.value.length>30){
        correct=false;

        error.innerText = "max 30 karakters";
        voornaam.classList.add("error");
    }


    error = document.getElementById("errorFamilienaam");
    error.innerHTML= "";
    familienaam.classList.remove("error");
    if(familienaam.value.trim().length>50){
        correct=false;
        error.innerText = "max 50 karakters";
        familienaam.classList.add("error");
    }
    if(familienaam.value.trim === ""){
        correct=false;
        error.innerText = " verplicht veld";
        familienaam.classList.add("error");
    }



    error = document.getElementById("errorGeboortedatum");
    error.innerHTML= "";
    geboortedatum.classList.remove("error");
    let datum = geboortedatum.value.trim();
    if (!(isposGetal(datum.substring(0, 4)) && datum.substring(4, 5) === "-" && isposGetal(datum.substring(5, 7)) && datum.substring(7, 8) === "-" && isposGetal(datum.substring(8, 10)))) {
        correct = false;

        error.innerText = "formaat is niet jjjj-mm-dd";
        geboortedatum.classList.add("error");
    }


    error = document.getElementById("errorEmail");
    error.innerHTML= "";
    email.classList.remove("error");
    let emailValue = email.value.trim();
    if(emailValue.indexOf("@") !== emailValue.lastIndexOf("@") || emailValue.indexOf("@") === -1 || emailValue[emailValue.indexOf("@")+1] === "" || emailValue[emailValue.indexOf("@")-1] === "")
    {
        correct=false;

        error.innerText = "geen geldig email adres";
        email.classList.add("error");

    }


    error = document.getElementById("erroraantalKinderen");
    error.innerHTML= "";
    aantalkinderen.classList.remove("error");
    if(!(isposGetal(aantalkinderen.value.trim()))){
        correct=false;

        error.innerText = "geen positief getal";
        aantalkinderen.classList.add("error");
    }
    if(parseInt(aantalkinderen.value.trim)>99){
        correct=false;

        error.innerText = "te vruchtbaar";
        aantalkinderen.classList.add("error");
    }


    if(correct === true){
        window.alert("proficiat")
    }

}

const isposGetal = (tekst) => {
    return !isNaN(tekst) && parseInt(tekst) > 0;
}
window.addEventListener("load", setup);