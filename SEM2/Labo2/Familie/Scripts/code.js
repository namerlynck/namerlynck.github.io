let setup = () => {
    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5"];
    console.log(familie.length);
    for(let i = 0; i < familie.length; i=i+2) {
        console.log(familie[i]);
    }

    voegNaamToe(familie);
    for(let i = 0; i < familie.length; i++) {
        console.log("familielid" + familie[i]);
    }
    console.log(familie.join(" - "));
}
const voegNaamToe = (leden) => {
    let  naam = window.prompt('geef een extra naam')
    leden.push(naam);
    console.log(leden[leden.length-1]);
}
window.addEventListener("load", setup);
