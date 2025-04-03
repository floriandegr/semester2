let global = {
    personen : [],
    lastClicked : -1
}



// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

const naarForms = (event) => {
    console.log("naar de forms gestuurd")
    let formData = global.personen[parseInt(event.target.value)]
    document.getElementById('txtVoornaam').value = formData[0]; // Voornaam
    document.getElementById('txtFamilienaam').value = formData[1]; // Familienaam
    document.getElementById('txtGeboorteDatum').value = formData[2]; // Geboortedatum
    document.getElementById('txtEmail').value = formData[3]; // Email
    document.getElementById('txtAantalKinderen').value = formData[4]; // Aantal kinderen
    global.lastClicked =  parseInt(event.target.value);
    event.stopPropagation()
    
}

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    if (!valideer()) {
        let voornaam = document.getElementById("txtVoornaam").value
        let achternaam = document.getElementById("txtFamilienaam").value
        let formData = [];
        formData.push(document.getElementById('txtVoornaam').value);   // Voornaam
        formData.push(document.getElementById('txtFamilienaam').value); // Familienaam
        formData.push(document.getElementById('txtGeboorteDatum').value); // Geboortedatum
        formData.push(document.getElementById('txtEmail').value); // Email
        formData.push(document.getElementById('txtAantalKinderen').value); // Aantal kinderen

        let naam = voornaam + " " + achternaam;
        let select = document.getElementById("lstPersonen");
        let option  = document.createElement("option");
        option.innerText= naam;
        option.value = global.personen.length.toString();

        if(global.lastClicked == -1)
        {
            global.personen.push(formData);
            select.appendChild(option);
            option.addEventListener("click", naarForms);
            console.log("added a event listener");
        }
        else {
            global.personen[lastClicked] = formData;
            select.children[lastClicked] = option;
        }


    }


    // valideer alle input data en controleer of er geen errors meer zijn






    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById('txtVoornaam').value = ""; // Voornaam
    document.getElementById('txtFamilienaam').value = ""; // Familienaam
    document.getElementById('txtGeboorteDatum').value = ""; // Geboortedatum
    document.getElementById('txtEmail').value = ""; // Email
    document.getElementById('txtAantalKinderen').value = "";// Aantal kinderen
    global.lastClicked = -1;

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);