const DATABASE = {

calculators: [

{
id:"scientific-calculator",
name:"Scientific Calculator",
icon:"🧮",
description:"Advanced mathematical calculator."
},

{
id:"bmi-calculator",
name:"BMI Calculator",
icon:"⚖️",
description:"Calculate your BMI."
},

{
id:"age-calculator",
name:"Age Calculator",
icon:"🎂",
description:"Calculate your exact age."
}

],

converters: [

{
id:"length-converter",
name:"Length Converter",
icon:"📏",
description:"Convert units of length."
},

{
id:"temperature-converter",
name:"Temperature Converter",
icon:"🌡️",
description:"Convert temperature units."
}

],

tools: [

{
id:"password-generator",
name:"Password Generator",
icon:"🔑",
description:"Generate secure passwords."
}

]

};

const TOOLS = Object.entries(DATABASE).flatMap(([category, list]) =>
    list.map(tool => ({
        ...tool,
        category
    }))
);
