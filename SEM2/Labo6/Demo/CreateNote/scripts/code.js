const setup = () => {
    let element = document.createElement('p');
    element.setAttribute("class", "color");
    element.setAttribute("id","txtPar");

    console.log(element.getAttribute("class"));

    let textNode = document.createTextNode("hello world!");
    element.appendChild(textNode);
    document.querySelector("#myDiv").appendChild(element);

}
window.addEventListener("load", setup);