/* ================= CROP INFORMATION ================= */
function showCropInfo() {
    var crop = document.getElementById("crop").value;
    var r = document.getElementById("cropResult");

    var crops = {
        rice: "🌾 Rice<br>Season: Kharif<br>Soil: Clay loam<br>Water: High<br>Duration: 120–135 days<br>Diseases: Blast, Brown spot",
        cotton: "🌿 Cotton<br>Season: Kharif<br>Soil: Black soil<br>Water: Medium<br>Duration: 150–180 days<br>Diseases: Bollworm, Leaf curl",
        maize: "🌽 Maize<br>Season: Rabi/Kharif<br>Soil: Loamy soil<br>Water: Medium<br>Duration: 90–110 days<br>Diseases: Leaf blight",
        wheat: "🌾 Wheat<br>Season: Rabi<br>Soil: Clay loam<br>Water: Medium<br>Duration: 110–130 days<br>Diseases: Rust",

        sugarcane: "Sugarcane<br>Season: Year-round<br>Soil: Deep loamy<br>Water: High<br>Duration: 10–12 months",
        groundnut: "Groundnut<br>Season: Kharif<br>Soil: Sandy loam<br>Water: Medium<br>Duration: 100–120 days",
        sunflower: "Sunflower<br>Season: Rabi<br>Soil: Loamy<br>Water: Low<br>Duration: 90 days",
        soybean: "Soybean<br>Season: Kharif<br>Soil: Well-drained loam<br>Water: Medium<br>Duration: 90–100 days",
        chili: "Chili<br>Season: Kharif/Rabi<br>Soil: Sandy loam<br>Water: Medium<br>Duration: 120 days",
        tomato: "Tomato<br>Season: All seasons<br>Soil: Loamy<br>Water: Medium<br>Duration: 90 days",
        potato: "Potato<br>Season: Rabi<br>Soil: Sandy loam<br>Water: Medium<br>Duration: 90–120 days",
        onion: "Onion<br>Season: Rabi<br>Soil: Loamy<br>Water: Medium<br>Duration: 120 days",
        banana: "Banana<br>Season: All seasons<br>Soil: Rich loamy<br>Water: High<br>Duration: 10–12 months",
        mango: "Mango<br>Season: Summer<br>Soil: Loamy<br>Water: Medium<br>Duration: Perennial",
        pulses: "Pulses<br>Season: Rabi/Kharif<br>Soil: Loamy<br>Water: Low<br>Duration: 90 days",
        jowar: "Jowar<br>Season: Kharif<br>Soil: Black soil<br>Water: Low<br>Duration: 100 days",
        bajra: "Bajra<br>Season: Kharif<br>Soil: Sandy soil<br>Water: Low<br>Duration: 80 days",
        ragi: "Ragi<br>Season: Kharif<br>Soil: Red soil<br>Water: Low<br>Duration: 100 days",
        cabbage: "Cabbage<br>Season: Rabi<br>Soil: Loamy<br>Water: Medium<br>Duration: 90 days",
        cauliflower: "Cauliflower<br>Season: Rabi<br>Soil: Loamy<br>Water: Medium<br>Duration: 90 days",
        brinjal: "Brinjal<br>Season: All seasons<br>Soil: Loamy<br>Water: Medium<br>Duration: 120 days",
        cucumber: "Cucumber<br>Season: Summer<br>Soil: Sandy loam<br>Water: Medium<br>Duration: 60 days",
        watermelon: "Watermelon<br>Season: Summer<br>Soil: Sandy soil<br>Water: Medium<br>Duration: 90 days"
    };

    r.innerHTML = crops[crop] || "Please select a crop";
}

/* ================= FERTILIZER SUGGESTION ================= */
function showFertilizer() {
    var crop = document.getElementById("fertCrop").value;
    var r = document.getElementById("fertResult");

    var fert = {
        rice: "Rice Fertilizer<br>Urea: 50 kg/acre<br>DAP: 25 kg/acre<br>Potash: 20 kg/acre<br>Apply in 3 stages",
        cotton: "Cotton Fertilizer<br>Urea: 40 kg/acre<br>DAP: 20 kg/acre<br>Potash: 20 kg/acre",
        maize: "Maize Fertilizer<br>Urea: 45 kg/acre<br>DAP: 20 kg/acre<br>Potash: 15 kg/acre",
        wheat: "Wheat Fertilizer<br>Urea: 50 kg/acre<br>DAP: 25 kg/acre"
    };

    r.innerHTML = fert[crop] || "Please select a crop";
}

/* ================= WEATHER BASED TIPS ================= */
function showWeatherTip() {
    var w = document.getElementById("weather").value;
    var r = document.getElementById("weatherResult");

    var tips = {
        rainy: "🌧 Rainy Weather<br>Avoid spraying fertilizers & pesticides<br>Ensure proper drainage",
        sunny: "☀ Sunny Weather<br>Do irrigation early morning or evening<br>Use mulching to reduce water loss",
        cold: "❄ Cold Weather<br>Protect crops from frost<br>Avoid excess irrigation",
        windy: "🌬 Windy Weather<br>Avoid spraying<br>Provide crop support if needed"
    };

    r.innerHTML = tips[w] || "Please select weather";
}

