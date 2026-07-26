const DATABASE = {

calculators: [

{
    id: "scientific-calculator",

    name: "Scientific Calculator",

    category: "calculators",

    icon: "🧮",

    description: "Advanced mathematical calculator.",

    keywords: [
        "math",
        "scientific",
        "calculator",
        "trigonometry",
        "log",
        "power",
        "sin",
        "cos",
        "tan"
    ],

    featured: true,

    popular: true
},

{
    id:"bmi-calculator",

    name:"BMI Calculator",

    category:"calculators",

    icon:"⚖️",

    description:"Calculate your Body Mass Index.",

    keywords:[
        "bmi",
        "body",
        "mass",
        "weight",
        "height",
        "health"
    ],

    featured:true,

    popular:false
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
