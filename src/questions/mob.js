export const mob = [
    {
        type: "radiogroup",
        name: "DIFF_A",
        title: "Do you have difficulty walking or climbing steps? Would you say no difficulty, some difficulty, a lot of difficulty, or you cannot do this at all?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "No difficulty" },
            { value: "2", text: "Some difficulty" },
            { value: "3", text: "A lot of difficulty" },
            { value: "4", text: "Cannot do at all" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Visible by default; you can specify conditions if needed
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EQUIP_A",
        title: "Do you use any equipment or receive help for getting around?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Visible by default; you can specify conditions if needed
        // Skip logic can be implemented here if needed.
    },
    
];