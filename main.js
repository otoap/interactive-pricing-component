let switcher = document.getElementsByClassName("switcher")[0];
let dot = document.getElementsByClassName("center-dot")[0];

let slider = document.getElementById("slider");
let k = document.getElementsByTagName("h2")[0];
let price = document.getElementsByClassName("price")[0];
let monthYear = document.getElementsByClassName("monthYear")[0];
console.log(monthYear)

//switcher
switcher.addEventListener("click", ()=> {
    if(window.getComputedStyle(dot).justifySelf == "start") {
        dot.style.justifySelf = "end";
    }else {
        dot.style.justifySelf = "start";
    }
    console.log(window.getComputedStyle(dot).justifySelf)
    calculate();
})

//slider
slider.addEventListener("input", ()=> {
    console.log(slider.value);
    calculate();
})


let pageView = 0;
let newK;
let newPrice;
function calculate() {
    if(window.getComputedStyle(dot).justifySelf == "start"){
        //pageview
        pageView = Number(slider.value)*2;
        newK = pageView + "K PAGEVIEWS";
        k.innerHTML = newK;

        //price
        newPrice = (Number(slider.value)*0.32).toFixed(2);
        price.innerHTML = `$${newPrice}`;
        monthYear.innerHTML = "/month";
    }else {
        //pageview
        pageView = Number(slider.value)*2;
        newK = pageView + "K PAGEVIEWS";
        k.innerHTML = newK;

        //price
        newPrice = (((Number(slider.value)*0.32*12)/100)*75).toFixed(2);
        price.innerHTML = `$${newPrice}`;
        monthYear.innerHTML = "/year";
    }
    


}