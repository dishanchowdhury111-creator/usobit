const DATABASE = {
    calculators: [
        {
            id: "scientific-calculator",
            name: "Scientific Calculator",
            icon: "🧮",
            description: "Advanced mathematical calculator."
        }
    ],

    converters: [
        {
            id: "length-converter",
            name: "Length Converter",
            icon: "📏",
            description: "Convert units of length."
        }
    ],

    tools: [
        {
            id: "password-generator",
            name: "Password Generator",
            icon: "🔑",
            description: "Generate secure passwords."
        }
    ]
};

const TOOLS = [
    ...DATABASE.calculators.map(t => ({ ...t, category: "calculators" })),
    ...DATABASE.converters.map(t => ({ ...t, category: "converters" })),
    ...DATABASE.tools.map(t => ({ ...t, category: "tools" }))
];
