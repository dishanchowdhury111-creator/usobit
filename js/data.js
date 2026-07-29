const DATABASE = {

    calculators: [
        {
            id: "scientific-calculator",
            name: "Scientific Calculator",
            icon: "🧮",
            description: "Advanced scientific calculator.",
            keywords: ["math", "scientific", "calculator"],
            featured: true,
            popular: true
        },
        {
            id: "bmi-calculator",
            name: "BMI Calculator",
            icon: "⚖️",
            description: "Calculate your Body Mass Index.",
            keywords: ["bmi", "health", "weight", "height"],
            featured: true,
            popular: true
        },
        {
            id: "age-calculator",
            name: "Age Calculator",
            icon: "🎂",
            description: "Calculate your exact age.",
            keywords: ["age", "birthday", "date"],
            featured: true,
            popular: true
        },
        {
            id: "percentage-calculator",
            name: "Percentage Calculator",
            icon: "📊",
            description: "Calculate percentages easily.",
            keywords: ["percentage", "percent", "math"],
            featured: true,
            popular: true
        }
    ],

    converters: [
        {
            id: "length-converter",
            name: "Length Converter",
            icon: "📏",
            description: "Convert units of length.",
            keywords: ["length", "distance", "metre", "inch"],
            featured: true,
            popular: true
        },
        {
            id: "temperature-converter",
            name: "Temperature Converter",
            icon: "🌡️",
            description: "Convert Celsius, Fahrenheit and Kelvin.",
            keywords: ["temperature", "celsius", "fahrenheit", "kelvin"],
            featured: true,
            popular: true
        }
    ],

    tools: [
        {
            id: "password-generator",
            name: "Password Generator",
            icon: "🔑",
            description: "Generate secure passwords.",
            keywords: ["password", "security", "generator"],
            featured: true,
            popular: true
        }
    ]

};

const TOOLS = Object.entries(DATABASE).flatMap(([category, list]) =>
    list.map(tool => ({
        ...tool,
        category
    }))
);
