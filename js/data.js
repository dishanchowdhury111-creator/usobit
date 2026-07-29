```javascript
const DATABASE = {

    calculators: [

        {
            id: "scientific-calculator",
            name: "Scientific Calculator",
            icon: "🧮",
            description: "Advanced mathematical calculator."
        },

        {
            id: "bmi-calculator",
            name: "BMI Calculator",
            icon: "⚖️",
            description: "Calculate your Body Mass Index."
        },

        {
            id: "age-calculator",
            name: "Age Calculator",
            icon: "🎂",
            description: "Calculate your exact age from your date of birth."
        },

        {
            id: "percentage-calculator",
            name: "Percentage Calculator",
            icon: "📊",
            description: "Find percentages quickly and easily."
        },

        {
            id: "gst-calculator",
            name: "GST Calculator",
            icon: "🧾",
            description: "Add or remove GST from an amount."
        }

    ],

    converters: [

        {
            id: "length-converter",
            name: "Length Converter",
            icon: "📏",
            description: "Convert metres, kilometres, inches, feet and more."
        },

        {
            id: "temperature-converter",
            name: "Temperature Converter",
            icon: "🌡️",
            description: "Convert Celsius, Fahrenheit and Kelvin."
        }

    ],

    tools: [

        {
            id: "password-generator",
            name: "Password Generator",
            icon: "🔑",
            description: "Generate strong random passwords."
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
```
