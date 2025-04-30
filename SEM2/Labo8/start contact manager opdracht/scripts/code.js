let personen = [];
let aantal = 0;
// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);


    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener("change", toonPersoon);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    voegPersoonToe();
};
const voegPersoonToe = () => {
    console.log("voegPersoonToe uitgevoerd");
    let lstPersonen = document.getElementById("lstPersonen");
    let elements = document.getElementsByClassName("invalid");
    //valideer();
    if (elements.length === 0) {
        // alles in orde, we mogen bewaren
        let pers = {};
        if (lstPersonen.selectedIndex === -1) {
            // nieuwe persoon bewaren
            console.log("eerste keer" + pers);
            voegPersoonToeAanLijst(pers);
            personen.push(pers); // toevoegen aan interne lijst
            voegPersoonToeAanUI(pers);
            clearLines();
        } else {
            // bestaande persoon wijzigen
            console.log("pesoon " + JSON.stringify(pers));
            verwijderUitUI(pers);
            //voegPersoonToeAanLijst(pers2); staat al in de lijst
            voegPersoonToeAanUI(pers); //overbodig staat al in de UI
            clearLines();
        }
    }
}
const verwijderUitUI = (persoon) => {
    console.log("verwijderUitUI uitgevoerd");
    let index = personen.selectedIndex;
    document.getElementById(index).remove();

}
const voegPersoonToeAanLijst = (persoon) => {
   //let persoon = {};
   let inputElem = document.querySelectorAll('input[type=text]');
    persoon.voornaam =inputElem[0].value;
    persoon.familienaam = inputElem[1].value;
    persoon.geboortedatum = inputElem[2].value;
    persoon.email = inputElem[3].value;
    persoon.aantalKinderen = inputElem[4].value;
    //console.log(inputElem[0].value);
}
const voegPersoonToeAanUI = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let text = document.createTextNode(persoon.voornaam + " " + persoon.familienaam +
        " " + persoon.geboortedatum + " " + persoon.email + " kinderen: " + persoon.aantalKinderen);
    let option = document.createElement("option")
    option.setAttribute("class", "persoon");
    option.setAttribute("id", "aantal");
    aantal++;
    option.append(text);
    lstPersonen.appendChild(option);
}
const clearLines = () => {
    let inputElem = document.querySelectorAll('input[type=text]')
    inputElem.forEach((elem) => {
        elem.value="";
    });
    console.log("clearLines uitgevoerd");
}
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = (event) => {
    console.log("Klik op de knop nieuw");
    clearLines();
    //voegPersoonToe();
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
}
const toonPersoon = (event) => {
    console.log("ToonPersoon uitgevoerd");
    let ListPersoon = event.target;
    let index = ListPersoon.selectedIndex;
    if(index !== -1){
        let persoon = personen[index];
        let inputElem = document.querySelectorAll('input[type=text]')

        inputElem[0].value = persoon.voornaam;
        inputElem[1].value = persoon.familienaam;
        inputElem[2].value = persoon.geboortedatum;
        inputElem[3].value = persoon.email;
        inputElem[4].value = persoon.aantalKinderen;
    }
}
window.addEventListener("load", setup);