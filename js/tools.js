// ======================================
// USOBIT TOOL ENGINE
// ======================================

const TOOL_FUNCTIONS = {
    "scientific-calculator": renderScientificCalculator,
    "bmi-calculator": renderBMICalculator,
    "age-calculator": renderAgeCalculator,
    "percentage-calculator": renderPercentageCalculator,
    "gst-calculator": renderGSTCalculator,
    "length-converter": renderLengthConverter,
    "temperature-converter": renderTemperatureConverter,
    "password-generator": renderPasswordGenerator
};

function renderScientificCalculator(container){
    container.innerHTML += '<p>Scientific Calculator works.</p>';
}

function renderBMICalculator(container){
    container.innerHTML += '<p>BMI Calculator works.</p>';
}

function renderAgeCalculator(container){
    container.innerHTML += '<p>Age Calculator works.</p>';
}

function renderPercentageCalculator(container){
    container.innerHTML += '<p>Percentage Calculator works.</p>';
}

function renderGSTCalculator(container){
    container.innerHTML += '<p>GST Calculator works.</p>';
}

function renderLengthConverter(container){
    container.innerHTML += '<p>Length Converter works.</p>';
}

function renderTemperatureConverter(container){
    container.innerHTML += '<p>Temperature Converter works.</p>';
}

function renderPasswordGenerator(container){
    container.innerHTML += '<p>Password Generator works.</p>';
}
