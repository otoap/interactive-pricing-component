let switcher = document.getElementsByClassName("switcher")[0];
let dot = document.getElementsByClassName("center-dot")[0];

let slider = document.getElementById("slider");
let k = document.getElementsByTagName("h2")[0];
let price = document.getElementsByClassName("price")[0];
let monthYear = document.getElementsByClassName("monthYear")[0];

console.log(window.getComputedStyle(slider).background);
//switcher
switcher.addEventListener("click", ()=> {
    if(window.getComputedStyle(dot).justifySelf == "start") {
        dot.style.justifySelf = "end";
    }else {
        dot.style.justifySelf = "start";
    }
    calculate();
})

//slider
slider.addEventListener("input", ()=> {
    calculate();
})


let pageView = 0;
let newK;
let newPrice;
function calculate() {
    //pageview
    pageView = Number(slider.value)*2;
    newK = pageView + "K PAGEVIEWS";
    k.innerHTML = newK;

    //background
    slider.style.background = `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(164, 243, 235) ${slider.value}%, rgb(207, 216, 239) ${slider.value}%) repeat scroll 0% 0% / auto padding-box border-box`;
    if(window.getComputedStyle(dot).justifySelf == "start"){
        //price
        newPrice = (Number(slider.value)*0.32).toFixed(2);
        price.innerHTML = `$${newPrice}`;
        monthYear.innerHTML = "/month";
        switcher.style.background = "#cfd8ef"

    }else {
        //price
        newPrice = (((Number(slider.value)*0.32*12)/100)*75).toFixed(2);
        price.innerHTML = `$${newPrice}`;
        monthYear.innerHTML = "/year";
        switcher.style.background = "#7aeadf"
    }
}