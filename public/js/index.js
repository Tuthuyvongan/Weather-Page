const APP_ID = 'a53d9e9f4933f82dce81835109a05568';
const DEFAULT_VALUE = "--"

const searchInput = document.querySelector('#search-input');

const cityName = document.querySelector('.city-name');
const weatherDescription = document.querySelector('.weather-description');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const timeRise = document.querySelector('.time-rise');
const timeSet = document.querySelector('.time-set');
const humidityValue = document.querySelector('.humidity-value');
const windSpeed = document.querySelector('.wind-speed');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json();
        console.log('[searchInput]', data);
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherDescription.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
        timeRise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
        timeSet.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
        humidityValue.innerHTML = data.main.humidity + "%" || DEFAULT_VALUE;
        windSpeed.innerHTML = data.wind.speed + " m/s" || DEFAULT_VALUE;
    });
});