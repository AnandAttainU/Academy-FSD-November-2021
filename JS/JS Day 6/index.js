var buttonClickCounter = 0;

function buttonClickHandler(){
    buttonClickCounter++;
    console.log("Button clicked!" + buttonClickCounter);
    if (buttonClickCounter===3){
        buttonElement.removeEventListener('click', buttonClickHandler);        
    }
}

function linkClickHandler(e){
    e.preventDefault();
    console.log("Link clicked");
}

function mouseEnterHandler() {
    console.log("Entered mouse");
}

function gpClickHandler(e){
    console.log("GP clicked");
}

// function parentClickHandler(event){
//     event.stopPropagation();
//     console.log("Parent clicked");
// }

// function childClickHandler(event){
//     event.stopPropagation();
//     console.log("Child clicked");
// }
// var buttonElement = document.getElementById("myButton");

// buttonElement.addEventListener('click', buttonClickHandler);

// var linkEle = document.getElementById("link");

// linkEle.addEventListener('click',linkClickHandler);

function gpClickHandlerNew(e) {
    console.log("new gp handler called");
    e.stopImmediatePropagation();
}

function gpClickHandlerThird(e) {
    console.log("new gp handler third called");
}


var gpElement = document.getElementById("GrandParent");
var parentElement = document.getElementById("Parent");
var childElement = document.getElementById("Child");

gpElement.addEventListener('click', gpClickHandler);
gpElement.addEventListener('click', gpClickHandlerNew);
gpElement.addEventListener('click', gpClickHandlerThird);
// parentElement.addEventListener('click', parentClickHandler);
// childElement.addEventListener('click', childClickHandler);








