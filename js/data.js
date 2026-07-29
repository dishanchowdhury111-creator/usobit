const DATABASE = {

    calculators: [
        {
            id: "scientific-calculator",
            name: "Scientific Calculator",
            category: "calculators",
            icon: "🧮",
            description: "Advanced mathematical calculator.",
            keywords: ["math", "scientific", "calculator"],
            featured: true,
            popular: true
        },

        {
            id: "bmi-calculator",
            name: "BMI Calculator",
            category: "calculators",
            icon: "⚖️",
            description: "Calculate your Body Mass Index.",
            keywords: ["bmi", "health", "weight", "height"],
            featured: true,
            popular: false
        },

        {
            id: "age-calculator",
            name: "Age Calculator",
            category: "calculators",
            icon: "🎂",
            description: "Calculate your exact age.",
            keywords: ["age", "birthday", "date"],
            featured: true,
            popular: false
        },

        {
            id: "percentage-calculator",
            name: "Percentage Calculator",
            category: "calculators",
            icon: "📊",
            description: "Calculate percentages easily.",
            keywords: ["percentage", "percent", "math"],
            featured: true,
            popular: true
        },

        {
            id: "gst-calculator",
            name: "GST Calculator",
            category: "calculators",
            icon: "🧾",
            description: "Add or remove GST from a price.",
            keywords: ["gst", "tax", "price", "india"],
            featured: true,
            popular: true
        }
    ],

    converters: [
        {
            id: "length-converter",
            name: "Length Converter",
            category: "converters",
            icon: "📏",
            description: "Convert units of length.",
            keywords: ["length", "distance", "metre", "inch"],
            featured: false,
            popular: true
        },

        {
            id: "temperature-converter",
            name: "Temperature Converter",
            category: "converters",
            icon: "🌡️",
            description: "Convert Celsius, Fahrenheit and Kelvin.",
            keywords: ["temperature", "celsius", "fahrenheit", "kelvin"],
            featured: false,
            popular: true
        }
    ],

    tools: [
        {
            id: "password-generator",
            name: "Password Generator",
            category: "tools",
            icon: "🔑",
            description: "Generate secure passwords.",
            keywords: ["password", "security", "random"],
            featured: true,
            popular: true
        }
    ]
};

const TOOLS = Object.values(DATABASE).flat();
