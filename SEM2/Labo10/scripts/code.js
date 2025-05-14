const setup = () => {
   //document.getElementById("buttonGo").addEventListener("click", () => maakKaart("Titel", "TEXT"));
   document.getElementById("buttonGo").addEventListener("click", () => voerCommandoUit());
   document.getElementById("buttonGo").addEventListener("click", () => saveSearches());
   //showSavedSearches();
   restoreSearches();
}
const maakKaart = (title, commandosuffix,url ) => {
    let col = makeElementWithClassName("div", "col-4");
    let card = makeElementWithClassName("div", "card");
    //correcte class toevoegen aan de card
    card.classList.add(title.toLowerCase()+"-card");
    let cardheader = makeElementWithClassName("div", "card-header")
    let cardbody = makeElementWithClassName("div", "card-body");
    let cardTitle = makeElementWithClassNameAndText("h5", "card-title", title);
    let cardText = makeElementWithClassNameAndText("p", "card-text", commandosuffix);
    let linkButton = createLinkButton(url);
    console.log(title.toLowerCase()+"-card");
    cardTitle.setAttribute("id", "title");
    linkButton.setAttribute("id", "linkButton");
    cardText.setAttribute("id", "text");
    //alle elementen toevoegen aan de div "card-body"
    cardbody.appendChild(cardTitle);
    cardbody.appendChild(cardText);
    cardbody.appendChild(linkButton);

    //alle elementen toevoegen aan de div "card"
    card.appendChild(cardbody);
    card.appendChild(cardheader);
    col.appendChild(card);
    document.querySelector("#listCards .row").appendChild(col);
    console.log("MaakKaartUitgevoerd");
}

const makeElementWithClassName = (elem, className) => {
    let element = document.createElement(elem);
    element.setAttribute("class", className);
    return element;
}

const makeElementWithClassNameAndText = (element, className, text) => {
    let e =  makeElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}
const validateSearch = () => {
    let txtInput = document.getElementById("txtInput");
    let txtPrefix = txtInput.value.substring(0,2);
    if(txtInput.value.substring(0,1) !== "/"){
        alert("invalid command, please use one of the following commands: \n/g, /i, /y, /x");
    } else if(txtPrefix )
    console.log("ValidateSearch uitgevoerd");
}

const voerCommandoUit = () => {
    let txtCommandoInput = document.getElementById("txtInput");
    let command = txtCommandoInput.value;
    let commandosuffix = txtCommandoInput.value.substring(3, txtCommandoInput.value.length);
    let regex = command.match("\/(g|x|y|i) [a-z]*");
    if(regex != null){
        if(command.substring(1,2) === "g"){
           // maakKaart("Google",commandosuffix);
            Google(commandosuffix);
            saveLocalStorage("Google", commandosuffix, Google(commandosuffix));
            validateSearch();
        } else if(command.substring(1,2) === "y"){
            YouTube(commandosuffix);
            saveLocalStorage();
        }else if(command.substring(1,2) === "x"){
            X(commandosuffix);
            saveLocalStorage();
        } else {
            Instagram(commandosuffix);
            saveLocalStorage();
        }
        console.log("voerCommandoUit uitgevoerd");
    }else {
        alert("invalid command");
    }

}

const Google = (commandosuffix) => {
    let url = "https://www.google.com/search?q=" + commandosuffix;
    //window.open(url, "_blank");
    maakKaart("Google",commandosuffix,url);
    return url;
}

const Instagram = (commandosuffix) => {
    let url = "https://www.instagram.com/search?q=" + commandosuffix;
    maakKaart("Instagram",commandosuffix,url);
    return url;
}

let X = (commandosuffix) =>{
    let url = "https://x.com/hashtag/" + commandosuffix;
    maakKaart("X",commandosuffix,url);
    return url;
}
let YouTube = (commandosuffix) =>{
    let url = "https://www.youtube.com/results?search_query=" + commandosuffix;
    maakKaart("YouTube",commandosuffix,url);
    return url;
}

const saveSearches = () => {
    let searchesData = [];

    let searches = document.querySelectorAll('.card');
    let searchesJSON;
    for(let i = 0; i < searches.length; i++){
        let search = {};
        //console.log("title: " + searches[i].title.innerText);
        search.title = searches[i].title;
        //let title = searches[i].title
        search.url = searches[i].url;
        search.text = searches[i].text;
        searchesData.push(search);
    }

    searchesJSON = JSON.stringify(searchesData);
    localStorage.setItem("VIVES.be.searchPage.Card", searchesJSON);
}

const saveLocalStorage = (title, commandoSuffix, url) => {
    let lsHistory;
    let historyObject = {
        title: title,
        text: commandoSuffix,
        url: url
    };
    lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if(!lsHistory){
        lsHistory = [];
    }
    lsHistory.push(historyObject);
    localStorage.setItem("vives.be.history", JSON.stringify(lsHistory));
};

// const showSavedSearches = () => {
//     let settings;
//     let settingsJSON = localStorage.getItem("VIVES.be.settingsCard");
//
//     if (settingsJSON === undefined) {
//         settings = {
//             title: "",
//             url: "",
//             text:""
//         };
//     } else {
//         settings = JSON.parse(settingsJSON);
//     }
//     document.getElementById("title").textContent = settings.title;
//     document.getElementById("url").href = settings.url;
//     document.getElementById("text").textContent = settings.text;
// }

const restoreSearches = () => {
    let searches;
    let searchesJSON = localStorage.getItem("vives.be.history");
    searches = JSON.parse(searchesJSON);
    for(let i = 0; i < searches.length; i++){
        maakKaart(searches[i].title, searches[i].text, searches[i].url);
    }
}

window.addEventListener("load", setup);