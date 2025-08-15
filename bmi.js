function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("bmi-value").innerText = "--";
        document.getElementById("bmi-status").innerText = "";
        return;
    }

    // convert cm to meters
    height = height / 100;
    let bmi = weight / (height * height);
    let status = "";

    if (bmi < 18) {
        status = "Underweight BMI";
    } else if (bmi >= 18 && bmi < 25) {
        status = "Normal BMI";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight BMI";
    } else {
        status = "Obese BMI";
    }

    document.getElementById("bmi-value").innerText = bmi.toFixed(1);
    document.getElementById("bmi-status").innerText = status;
}

// Run at start for default values
calculateBMI();


