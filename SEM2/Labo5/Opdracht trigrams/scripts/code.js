const setup = () => {
    let btn = document.getElementById("btnTrigram");
    btn.addEventListener("click",output);



    //genereertrigrams();
}
const output = () => {
    let txtInput = document.getElementById("woord");
    let tekst = txtInput.value;
    let list = document.getElementById('lstTrigrams')

    const tri = genereertrigrams(tekst);
    tri.forEach(tri => console.log(tri));

    for(let i = 0; i < tri.length; i++) {
        list.innerHTML += "<li>" + tri[i] + "</li>";
    }

}

const genereertrigrams = (woord) =>{
    let tri = [];

    for(let i = 0; i < woord.length - 2; i++){
        tri.push(woord.slice(i,i+3));
    }
    return tri;
}
window.addEventListener("load", setup);