const setup = () => {
    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInfo(evenement);
}
const toonEvenementInfo = evenement => {
    // let tekst = JSON.stringify(evenement);
    // console.log(tekst);
    console.log("Evenement: " + evenement.naam + "\n");
    console.log("Datum: " + evenement.datum + "\n");
    console.log("Locate: "  + evenement.locatie + "\n");
    console.log("Deelnemers: " + evenement.deelnemers.join(" - ") + "\n");
    console.log("Aantal dagen tot het evenement: " + dagenTotEvent(evenement));
}
const dagenTotEvent = (event) => {
    return Math.ceil((event.datum - new Date())/1000 *3600 *24)
}
window.addEventListener("load", setup);