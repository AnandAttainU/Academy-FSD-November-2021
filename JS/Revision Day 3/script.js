
const API_KEY = "f33a484cf794d08d0148764789aaba32"

var submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', getWeather);

function getWeather(){
    var cityNameElement = document.getElementById("cityName");
    var cityName = cityNameElement.value;
    const fetchResponse = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    const fetchPromiseHandle = fetchResponse.then(
        (res)=>{

            return res.json()
        },
        (rej)=>{console.log(rej)}
    );

    const response = fetchPromiseHandle.then(
        (data) => {
            console.log(data);
            // var temp = data.main.temp;
            // var pElement = document.getElementById('temp');
            // pElement.innerText = temp;
        }
    )
}











