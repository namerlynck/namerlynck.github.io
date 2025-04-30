const setup = () => {
    document.getElementById("btnGo").addEventListener("click", createHeader());

}
const createTafel =(tafel) => {
    let tafelDiv = document.getElementById("tafels");
    let tafelsDiv = document.createElement("div")
    tafelDiv.setAttribute("class", "tafel");
    for(var i = 1; i <= 10; i++) {
        let row = document.createElement("div")
        if(i%2 === 0){
            row.setAttribute("class", "even");
        }
        row.appendChild(document.createTextNode(tafel.start + " x " + i + " = " + tafel.start*i));
        tafelDiv.appendChild(row);
    }
    tafelsDiv.appendChild(tafelDiv);
}
const createHeader = (tafel) =>{
    let headerDiv = document.createElement('div')
    headerDiv.setAttribute("class", "header");
    let headerNode = document.createTextNode("tafel van "
        + tafel.start + " aangemaakt op: "
        + tafel.datum.toTimeString().substring(0,8));

    headerDiv.appendChild(headerNode);
    return headerDiv;
}
const addTafel = () =>{
    let txtStartGetal = document.getElementById("txtStart");
    let startGetal = parseInt(txtStartGetal.value);
    if(isNan(startGetal)){
        
    }
}

window.addEventListener("load", setup);