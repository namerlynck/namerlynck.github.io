const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    console.log(start.getDay()); //geeft dag van de week niet bv eerste van de maand
    console.log(start.getMonth() + 1);
    console.log(start.getFullYear());
    console.log(start.getDate());

    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2025, 0, 1);
    console.log(datum);

    let event = new Date();
    console.log("toString " + event.toString()); //gebruikt de eigen tijd op het apparaat| toString is niet nodig

    console.log("toISOString " + event.toISOString());
    console.log("toDateString " + event.toDateString());
    console.log("toTimeString " + event.toTimeString());

    let datumNu = new Date();
    let datumGeboorte = new Date(2006, 6, 25);
    let milisec = datumNu - datumGeboorte;
    let sec = milisec / 1000;
    let min = sec / 60;
    let uren = min / 60
    let dagen = uren /24
    console.log(dagen);
    console.log((datumNu - datumGeboorte) / 1000 / 60 / 60 / 24);
}
window.addEventListener("load", setup);