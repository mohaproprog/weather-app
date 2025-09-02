const inputForm = document.getElementById("inputForm");
const button = document.querySelector("button");
const city = document.querySelector(".cityCOuntry p");
const iconFlag = document.querySelector(".cityCOuntry img");
const weatherIcon = document.querySelector(".weatherIcon img");
const degree = document.querySelector(".degree p");
const description = document.querySelector(".description");
const clouds = document.querySelector(".clouds");
const Humidity = document.querySelector(".Humidity");
const pressure = document.querySelector(".pressure");

const MY_API_KEY = "c959e4f4201ad301ac5a92e8e9b64af1"; 
button.addEventListener("click",()=>{
    const valueName = inputForm.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueName}&units=metric&appid=${MY_API_KEY}`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data);
        if(data.cod ==200){
            city.textContent = data.name;
            iconFlag.src =  `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            degree.textContent = `${Math.round(data.main.temp)}`
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            description.textContent = data.weather[0].description;
            clouds.textContent = `${data.clouds.all}%`
            Humidity.textContent = `${data.main.humidity}%`
            pressure.textContent = `${data.main.pressure}hpa`
        }
        else{
            alert("Enter Vailed Location Please");
        }
        
    })
})
