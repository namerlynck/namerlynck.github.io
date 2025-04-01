let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
}


const setup = () => {
   let button = document.getElementById("btn");
    button.addEventListener("click",speelspel );
    setInterval(() => {
        console.log("test")
    }, 600);

    global.timeoutId = setInterval(() => {
        moveImage();
    }, global.MOVE_DELAY);

}
const isBom = () => {
    //eerst image
    //dan kijken alt = bom?
    //alert of niet dan met if else
}
const speelspel = () =>{
    let speelveld = document.getElementById("speelveld");
    speelveld.innerHTML= "";
    let newDiv = document.createElement("div");
    newDiv.classList.add("speelveld");

    let newImg = document.createElement("img");
    newImg.setAttribute("src",getRandomImage());
    newImg.setAttribute("id","target");
    newImg.setAttribute("class","image");

    newDiv.appendChild(newImg);
    speelveld.appendChild(newDiv);
    let image = document.getElementById("target");
    image.addEventListener("click",() => {
        if(image.getAttribute("alt") === "bom"){
            alert("bom GAME OVER!");
        } else {
            global.score++;
            moveImage();
            changeImage();
        }
    });
    console.log(global.score);
}

const moveImage = () => {
    let image=document.getElementsByClassName("image")[0];
    let speelveld=document.getElementById("speelveld");
    let maxLeft=speelveld.clientWidth - image.offsetWidth;
    let maxHeight=speelveld.clientHeight - image.offsetHeight;

    // verplaats de image
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    image.style.left=left+"px";
    image.style.top=top+"px";
}
const changeImage = () => {
    let image = document.getElementById("target");
    let pad = getRandomImage();
    image.setAttribute("src",pad);
    //console.log(image);
    if(pad === "images/0.png"){
        image.setAttribute("alt", "bom");
    } else {
        image.setAttribute("alt", "image");
    }
    // console.log(image.alt);
}

const getRandomImage = () =>{
    let index = Math.floor(Math.random() * (global.IMAGE_COUNT -1)) +1;
    //console.log("index: " + index +"\npad: "+ global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX);
    return global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;

}

window.addEventListener("load", setup);


