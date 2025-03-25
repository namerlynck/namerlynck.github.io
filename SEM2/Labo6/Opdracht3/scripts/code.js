const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", create);
}

const create =() => {
    let para = document.createElement("p");
    let t = document.createTextNode("Dit is een paragraaaf");
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
}
window.addEventListener("load", setup);