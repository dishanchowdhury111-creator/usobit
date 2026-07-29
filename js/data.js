```javascript
const DATABASE = {

    calculators: [

        {
            id: "scientific-calculator",
            name: "Scientific Calculator",
            icon: "🧮",
            description: "Advanced mathematical calculator.",
            keywords: ["math", "scientific", "calculator"]
        },

        {
            id: "bmi-calculator",
            name: "BMI Calculator",
            icon: "⚖️",
            description: "Calculate your Body Mass Index.",
            keywords: ["bmi", "health", "weight"]
        },

        {
            id: "age-calculator",
            name: "Age Calculator",
            icon: "🎂",
            description: "Calculate your exact age from your date of birth.",
            keywords: ["age", "birthday", "date"]
        },

        {
            id: "percentage-calculator",
            name: "Percentage Calculator",
            icon: "📊",
            description: "Find percentages quickly and easily.",
            keywords: ["percentage", "percent", "math"]
        },

        {
            id: "gst-calculator",
            name: "GST Calculator",
            icon: "🧾",
            description: "Add or remove GST from an amount.",
            keywords: ["gst", "tax", "invoice"]
        }

    ],

    converters: [

        {
            id: "length-converter",
            name: "Length Converter",
            icon: "📏",
            description: "Convert metres, kilometres, inches, feet and more.",
            keywords: ["length", "distance", "metre"]
        },

        {
            id: "temperature-converter",
            name: "Temperature Converter",
            icon: "🌡️",
            description: "Convert Celsius, Fahrenheit and Kelvin.",
            keywords: ["temperature", "celsius", "fahrenheit"]
        }

    ],

    tools: [

        {
            id: "password-generator",
            name: "Password Generator",
            icon: "🔑",
            description: "Generate strong random passwords.",
            keywords: ["password", "security", "random"]
        }

    ]

};

const TOOLS = [

    ...DATABASE.calculators.map(tool => ({
        ...tool,
        category: "calculators"
    })),

    ...DATABASE.converters.map(tool => ({
        ...tool,
        category: "converters"
    })),

    ...DATABASE.tools.map(tool => ({
        ...tool,
        category: "tools"
    }))

];
