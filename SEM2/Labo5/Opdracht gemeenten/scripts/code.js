const setup = () => {
    let gemeenten = [];
    while(true){
        let input = prompt("Gemeente");
        if(input === "stop"){
            break
        }
        gemeenten.push(input);
    }
    gemeenten.sort(compare);
    let boxGemeenten = document.getElementById("gemeenten");
    gemeenten.forEach(gemeente => {
        let option = document.createElement("option");
        option.textContent = gemeente;
        option.value = gemeente;
        boxGemeenten.appendChild(option);
    });
}

const compare = (a, b) => {
    return a.localeCompare(b);
}
window.addEventListener("load", setup);