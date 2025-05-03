global = {
    websites :[],
    sort : true

}

const setup = () => {

    let search = document.getElementById("search");
    search.addEventListener("click", getWebsite);
    let  sortB = document.getElementById("sort");
    sortB.addEventListener("click", changesort);
    let websites = JSON.parse(localStorage.getItem("website"))
    if(websites != null) {
        for (let website of websites) {
            blockbuilder(website[0], website[1]);
            global.websites.push(website);

        }
    }
    sort()
}
const getWebsite = () => {
    let input = document.getElementById("commando");
    let command = input.value;
    let website = command.split(" ")[0];
    let search = command.substring(3);

    switch(website) {
        case "/g": website =  "google"; break;
        case "/y": website =  "youtube"; break;
        case "/i": website =  "instagram"; break;
        case "/x": website =  "x"; break;
        case "/help": window.alert("the following commands are valid \n " +
            "/g : google \n" +
            "/y : youtube \n" +
            "/i : instagram \n" +
            "/x : x.com"); website =  "stop"; break;
        default: window.alert("not a valid website!"); website= "stop"; break;
    }
    if (website !== "stop") {

        window.open("https://www." + website + ".com/" + "/search?q=" + search, '_blank').focus();
        blockbuilder(website, search);
        updatestorage(website, search);
        sort()

    }

}
const blockbuilder = (website, search ) =>{
    let url = "https://www." + website + ".com/" + "/search?q=" + search;
    let block = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = website;
    block.appendChild(h3);
    let text = document.createTextNode(search);
    block.appendChild(text);
    let link = document.createElement("a");
    link.classList.add("link");
    link.href = url;
    link.innerText = "Go!";
    let br = document.createElement("br");
    block.appendChild(br);
    let div = document.getElementById("history");
    block.appendChild(link);
    block.classList.add("col-4");
    block.classList.add(website);
    div.appendChild(block);
}
const sort = () => {
    let websites = JSON.parse(localStorage.getItem("website"))
    if (global.sort) {
        websites = websites.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
    }
    else
    {
        websites = websites.sort((a, b) => b[0].localeCompare(a[0]) || b[1].localeCompare(a[1]));
    }
    global.websites = websites;
    let history =  document.getElementById("history");
    history.innerHTML = "";
    if(websites != null) {
        for (let website of websites) {
            blockbuilder(website[0], website[1]);

        }
    }
}
const changesort = () => {
    global.sort = !global.sort;
    let  sortB = document.getElementById("sort");
    if(sortB.innerText === "a-z") {
        sortB.innerText = "z-a";
    }
    else {
        sortB.innerText = "a-z";
    }
    sort()
}

const updatestorage = (website, search) => {
    let web = [website, search];
    global.websites.push(web);
    localStorage.setItem("website", JSON.stringify(global.websites));

}
window.addEventListener("load", setup);