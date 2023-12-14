export const cog = [
    {
        type: "radiogroup",
        name: "COGMEMDFF_A",
        title: "Do you have difficulty remembering or concentrating? Would you say no difficulty, some difficulty, a lot of difficulty, or you cannot do this at all?",
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
        name: "COGTYPEDFF_A",
        title: "Is that a difficulty with remembering, concentrating, or both?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Difficulty remembering only" },
            { value: "2", text: "Difficulty concentrating only" },
            { value: "3", text: "Difficulty with both remembering and concentrating" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{COGMEMDFF_A} > 1", // Assuming 'COGMEMDFF_A' is the variable name for the previous question about difficulty in remembering or concentrating
        // Skip logic can be implemented here if needed.
    },
    
];