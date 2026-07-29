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
            keywords: ["bmi", "health", "weight", "height"]
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
            keywords: ["length", "distance", "metre", "inch"]
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
    ...DATABASE.calculators.map(t => ({ ...t, category: "calculators" })),
    ...DATABASE.converters.map(t => ({ ...t, category: "converters" })),
    ...DATABASE.tools.map(t => ({ ...t, category: "tools" }))
];
```
