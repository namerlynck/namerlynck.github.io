let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_SUFFIX: ".png",
    IMAGE_PATH_PREFIX: "Images/kaart"
}
const setup = () => {
    maakSpeelVeld();
    //toonAchterkant();
    let kaarten = document.getElementsByTagName("img")
    for(let i = 0; i < kaarten.length; i++) {
        kaarten[i].addEventListener("click", draaiKaartOm);
    }
}
const maakSpeelVeld = () => {
    //div speelveld aanmaken
    let container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    //kaarten aan array toevoegen
    let kaarten = [];
    for(let i = 1; i < global.AANTAL_KAARTEN + 1; i++) {
        kaarten.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
    }
    //kaarten er nog eens aan toevoegen
    let meerkaarten = [...kaarten, ...kaarten];
    console.log(meerkaarten);
    //div voor rond de image toevoegen
    for(let i = 0; i < meerkaarten.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("divImage");
        container.appendChild(newDiv);

        let kaart = document.createElement("img");
        kaart.setAttribute("src", kaarten[i]);
        kaart.classList.add("kaart");
        newDiv.appendChild(kaart);
    }

}
const toonAchterkant = () => {
    let images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("src", "Images/kaart_achterkant(1).png");
    }
}

const draaiKaartOm = (event) => {
    let kaart = event.currentTarget;
    //kaart.setAttribute("src")


}
window.addEventListener("load", setup);