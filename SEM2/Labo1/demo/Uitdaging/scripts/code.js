const setup = () => {
    let btnVoegToe=document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", addImage);
}
function addImage() {
    const url = document.getElementById('txtInput').value;
    if (url) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Toegevoegde afbeelding';
        document.getElementById('divImages').appendChild(img);
    } else {
        alert('Voer een geldige URL in.');
    }

}
window.addEventListener("load", setup);