function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let heightCm = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(heightCm) || heightCm <= 0) {
        document.getElementById("bmiValue").innerHTML = "--";
        document.getElementById("bmiStatus").innerHTML = "Enter valid inputs";
        document.getElementById("bmiStatus").style.color = "black";
        return;
    }

    let heightM = heightCm / 100;
    let bmi = weight / (heightM * heightM);
    let status = "";
    let color = "";

    if (bmi < 18) {
        status = "Underweight BMI";
        color = "orange";
    } else if (bmi >= 18 && bmi < 25) {
        status = "Normal BMI";
        color = "green";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight BMI";
        color = "#c98c00";
    } else {
        status = "Obese BMI";
        color = "red";
    }

    document.getElementById("bmiValue").innerHTML = bmi.toFixed(1);
    document.getElementById("bmiStatus").innerHTML = status;
    document.getElementById("bmiStatus").style.color = color;
}
