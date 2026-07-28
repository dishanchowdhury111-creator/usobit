// ======================================
// USOBIT TOOL ENGINE
// ======================================

const TOOL_FUNCTIONS = {

    "scientific-calculator": renderScientificCalculator,

    "bmi-calculator": renderBMICalculator,

    "age-calculator": renderAgeCalculator,

    "length-converter": renderLengthConverter,

    "temperature-converter": renderTemperatureConverter,

    "password-generator": renderPasswordGenerator

};


// ======================================
// PLACEHOLDER FUNCTIONS
// ======================================

function renderScientificCalculator(container){

container.innerHTML=`

<div class="calculator">

<input
id="calcDisplay"
type="text"
placeholder="0"
readonly>

<div class="calcGrid">

<button onclick="clearDisplay()">C</button>
<button onclick="backspace()">⌫</button>
<button onclick="press('(')">(</button>
<button onclick="press(')')">)</button>

<button onclick="sqrtValue()">√</button>
<button onclick="square()">x²</button>
<button onclick="press('**')">xʸ</button>
<button onclick="press('/')">÷</button>

<button onclick="press('7')">7</button>
<button onclick="press('8')">8</button>
<button onclick="press('9')">9</button>
<button onclick="press('*')">×</button>

<button onclick="press('4')">4</button>
<button onclick="press('5')">5</button>
<button onclick="press('6')">6</button>
<button onclick="press('-')">−</button>

<button onclick="press('1')">1</button>
<button onclick="press('2')">2</button>
<button onclick="press('3')">3</button>
<button onclick="press('+')">+</button>

<button onclick="press('0')">0</button>
<button onclick="press('.')">.</button>
<button onclick="press(Math.PI)">π</button>
<button onclick="press(Math.E)">e</button>

<button style="grid-column:span 4;"
onclick="calculate()">=</button>

</div>

</div>

`;

}
function renderBMICalculator(container){

container.innerHTML += `

<div class="converter">

    <input
        id="bmiWeight"
        type="number"
        placeholder="Weight (kg)">

    <input
        id="bmiHeight"
        type="number"
        placeholder="Height (cm)">

    <button onclick="calculateBMI()">
        Calculate BMI
    </button>

    <div id="bmiResult" class="resultBox">
        Your BMI result will appear here
    </div>

</div>

`;

}
function calculateBMI(){

const weight=parseFloat(document.getElementById("bmiWeight").value);
const heightCm=parseFloat(document.getElementById("bmiHeight").value);

if(isNaN(weight)||isNaN(heightCm)||weight<=0||heightCm<=0){

    document.getElementById("bmiResult").innerHTML=
        "Please enter valid weight and height values.";

    return;

}

const height=heightCm/100;

const bmi=weight/(height*height);

let category;

if(bmi<18.5)
    category="Underweight";

else if(bmi<25)
    category="Normal weight";

else if(bmi<30)
    category="Overweight";

else
    category="Obesity";

document.getElementById("bmiResult").innerHTML=`
    <strong>BMI:</strong> ${bmi.toFixed(2)}<br>
    <strong>Category:</strong> ${category}
`;

}
function renderAgeCalculator(container){

    container.innerHTML += "<p>This calculator is coming soon.</p>";

}

function renderLengthConverter(container){

container.innerHTML += `

<div class="converter">

    <input
        id="lengthInput"
        type="number"
        placeholder="Enter value">

    <div class="converterRow">

        <select id="fromLength">
            <option value="m">Metre</option>
            <option value="km">Kilometre</option>
            <option value="cm">Centimetre</option>
            <option value="mm">Millimetre</option>
            <option value="inch">Inch</option>
            <option value="ft">Foot</option>
        </select>

        <span>→</span>

        <select id="toLength">
            <option value="m">Metre</option>
            <option value="km">Kilometre</option>
            <option value="cm">Centimetre</option>
            <option value="mm">Millimetre</option>
            <option value="inch">Inch</option>
            <option value="ft">Foot</option>
        </select>

    </div>

    <button onclick="convertLength()">
        Convert
    </button>

    <div id="lengthResult" class="resultBox">
        Result will appear here
    </div>

</div>

`;

}
function convertLength(){

const value=parseFloat(document.getElementById("lengthInput").value);

if(isNaN(value)){

    document.getElementById("lengthResult").innerHTML=
        "Please enter a valid number.";

    return;

}

const from=document.getElementById("fromLength").value;
const to=document.getElementById("toLength").value;

const factors={
    mm:0.001,
    cm:0.01,
    m:1,
    km:1000,
    inch:0.0254,
    ft:0.3048
};

const metres=value*factors[from];

const result=metres/factors[to];

document.getElementById("lengthResult").innerHTML=`
    <strong>${value} ${from}</strong><br>
    = <strong>${result.toFixed(6)} ${to}</strong>
`;

}
function renderTemperatureConverter(container){

container.innerHTML += `

<div class="converter">

    <input
        id="tempInput"
        type="number"
        placeholder="Enter temperature">

    <div class="converterRow">

        <select id="fromTemp">
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
        </select>

        <span>→</span>

        <select id="toTemp">
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
        </select>

    </div>

    <button onclick="convertTemperature()">
        Convert
    </button>

    <div id="tempResult" class="resultBox">
        Result will appear here
    </div>

</div>

`;

}
function convertTemperature(){

const value=parseFloat(document.getElementById("tempInput").value);

if(isNaN(value)){

    document.getElementById("tempResult").innerHTML=
        "Please enter a valid temperature.";

    return;

}

const from=document.getElementById("fromTemp").value;
const to=document.getElementById("toTemp").value;

let celsius;

// Convert to Celsius first
if(from==="C")
    celsius=value;

else if(from==="F")
    celsius=(value-32)*5/9;

else if(from==="K")
    celsius=value-273.15;

let result;

// Convert from Celsius to target
if(to==="C")
    result=celsius;

else if(to==="F")
    result=celsius*9/5+32;

else if(to==="K")
    result=celsius+273.15;

document.getElementById("tempResult").innerHTML=`
    <strong>${value} °${from}</strong><br>
    = <strong>${result.toFixed(2)} °${to}</strong>
`;

}
function renderPasswordGenerator(container){

    container.innerHTML += "<p>This tool is coming soon.</p>";

}
function press(value){

    document.getElementById("calcDisplay").value += value;

}

function clearDisplay(){

    document.getElementById("calcDisplay").value = "";

}
function backspace(){

    const display=document.getElementById("calcDisplay");

    display.value=display.value.slice(0,-1);

}

function square(){

    const display=document.getElementById("calcDisplay");

    try{

        display.value=Math.pow(Number(display.value),2);

    }

    catch{

        display.value="Error";

    }

}

function sqrtValue(){

    const display=document.getElementById("calcDisplay");

    try{

        display.value=Math.sqrt(Number(display.value));

    }

    catch{

        display.value="Error";

    }

}

function calculate(){

    const display=document.getElementById("calcDisplay");

    try{

        display.value=Function("return " + display.value)();

    }

    catch{

        display.value="Error";

    }

}
document.addEventListener("keydown", function(e){

    const display = document.getElementById("calcDisplay");

    if(!display) return;

    if(e.key >= '0' && e.key <= '9')
        press(e.key);

    else if("+-*/().".includes(e.key))
        press(e.key);

    else if(e.key === "Enter"){
        e.preventDefault();
        calculate();
    }

    else if(e.key === "Backspace"){
        backspace();
    }

    else if(e.key === "Delete"){
        clearDisplay();
    }

});
