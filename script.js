function showCropInfo() {
    var crop = document.getElementById("crop").value;
    var result = document.getElementById("result");

    if (crop === "rice") {
        result.innerHTML =
        "🌾 Rice Crop<br>Season: Kharif<br>Water: High<br>Duration: 120 days";
    }
    else if (crop === "cotton") {
        result.innerHTML =
        "🌿 Cotton Crop<br>Season: Kharif<br>Water: Medium<br>Duration: 150 days";
    }
    else if (crop === "maize") {
        result.innerHTML =
        "🌽 Maize Crop<br>Season: Rabi<br>Water: Medium<br>Duration: 90 days";
    }
    else {
        result.innerHTML = "Please select a crop";
    }
}
function showFertilizer() {
    var crop = document.getElementById("fertCrop").value;
    var result = document.getElementById("fertResult");

    if (crop === "rice") {
        result.innerHTML =
        "Rice Fertilizer:<br>Urea – 50 kg/acre<br>DAP – 25 kg/acre";
    }
    else if (crop === "cotton") {
        result.innerHTML =
        "Cotton Fertilizer:<br>Urea – 40 kg/acre<br>Potash – 20 kg/acre";
    }
    else if (crop === "maize") {
        result.innerHTML =
        "Maize Fertilizer:<br>Urea – 45 kg/acre<br>DAP – 20 kg/acre";
    }
    else {
        result.innerHTML = "Please select a crop";
    }
}
function showWeatherTip() {
    var weather = document.getElementById("weather").value;
    var result = document.getElementById("weatherResult");

    if (weather === "rainy") {
        result.innerHTML =
        "🌧 Rain Expected<br>Do not spray pesticides or fertilizers today.";
    }
    else if (weather === "sunny") {
        result.innerHTML =
        "☀ Sunny Weather<br>Good time for irrigation and field work.";
    }
    else if (weather === "cold") {
        result.innerHTML =
        "❄ Cold Weather<br>Protect crops from frost, avoid excess water.";
    }
    else {
        result.innerHTML = "Please select weather condition";
    }
}
