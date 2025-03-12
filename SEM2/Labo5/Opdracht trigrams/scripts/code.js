const setup = () => {
    const woord = "onoorbaar";
    const tri = genereertrigrams(woord);
    tri.forEach(tri => console.log(tri));

    genereertrigrams();
}
const genereertrigrams = (woord) =>{
    let tri = [];

    for(let i = 0; i < woord.length - 2; i++){
        tri.push(woord.substring(i,i+3));
    }
    return tri;
}
window.addEventListener("load", setup);