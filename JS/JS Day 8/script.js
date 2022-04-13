var btnEle = document.getElementById("geoLocation");
btnEle.addEventListener('click', getLocation);

function onSuccess(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(`lattitude: ${latitude} and longitude: ${longitude}`);
    var pEle = document.getElementById("locationDisplay");
    pEle.innerText = `lattitude: ${latitude} and longitude: ${longitude}`;
}

function onFailure(error){
    console.log(error.message);
}

function getLocation(event) {
    var location = navigator.geolocation;
    var currPosition = location.getCurrentPosition(onSuccess, onFailure);
    console.log(currPosition);
}

var clipBtn = document.getElementById("clipBtn");
clipBtn.addEventListener('click', displayClipboard);

async function displayClipboard(event) {
    var clippedContent = await navigator.clipboard.readText();
    console.log(clippedContent);
}