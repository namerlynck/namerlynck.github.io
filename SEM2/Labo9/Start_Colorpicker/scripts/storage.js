

const storeSliderValues = () => {
    let slider = {};
    let sliderJSON;

    slider.red = parseInt(document.getElementById("sldRed").value);
    slider.green = parseInt(document.getElementById("sldGreen").value);
    slider.blue = parseInt(document.getElementById("sldBlue").value);

    sliderJSON = JSON.stringify(slider);
    localStorage.setItem("VIVES.be.colorpicker.slider", sliderJSON);
    // return slider;
};

const restoreSliderValues = () => {
    let slider;
    let sliderJSON = localStorage.getItem("VIVES.be.colorpicker.slider");

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (sliderJSON === undefined) {
        slider = {
            age: 0,
            weight: 0,
            budget: 0
        };
    } else {
        slider = JSON.parse(sliderJSON);
    }

    // vul de invoervelden met de settings-waarden
    document.getElementById("sldRed").value = slider.red;
    document.getElementById("sldGreen").value = slider.green;
    document.getElementById("sldBlue").value = slider.blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatchesData = [];

    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    let swatchesJSON;
    for (let i = 0; i < swatches.length; i++) {
       let swatch = {};
       swatch.red = swatches[i].getAttribute("data-red");
       swatch.green =  swatches[i].getAttribute("data-green");
       swatch.blue =  swatches[i].getAttribute("data-blue");
       swatchesData.push(swatch);
    }

    swatchesJSON = JSON.stringify(swatchesData);
    localStorage.setItem("VIVES.be.colorpicker.swatches", swatchesJSON);
    console.log(swatchesData);
};

const restoreSwatches = () => {
    let swatches
    let swatchesJSON = localStorage.getItem("VIVES.be.colorpicker.swatches");
    swatches = JSON.parse(swatchesJSON);
    for(let i = 0; i < swatches.length; i++) {
        // let swatch = buildSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
        // document.getElementById("swatchComponents").appendChild(swatch);
        addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
    }
};
