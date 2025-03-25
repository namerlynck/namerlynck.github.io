const setup = () => {
    let list = document.querySelectorAll("li");
    for(let i = 0; i < list.length; i++) {
        list[i].className = "listitem";
    }
    let myPic = document.createElement("img");
    myPic.setAttribute("src","./images/pictureOfMe.png");
    myPic.setAttribute("alt","picture of me");
    document.querySelector("body").appendChild(myPic);
}
window.addEventListener("load", setup);