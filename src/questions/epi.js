export const epi = [
    {
        type: "radiogroup",
        name: "EPIEV_A",
        title: "Have you ever been told by a doctor or other health professional that you have a seizure disorder or epilepsy?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Assuming respondents are adults (18+)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EPIMED_A",
        title: "Are you currently taking any medicine to control your seizure disorder or epilepsy?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{EPIEV_A} == '1'", // Assuming respondents are adults (18+) who ever had epilepsy
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EPINUMSEIZ_A",
        title: "About how many seizures of any type have you had during the past 12 months?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "0", text: "0" },
            { value: "1", text: "1" },
            { value: "2", text: "2 or 3" },
            { value: "3", text: "Between 4 and 10" },
            { value: "4", text: "More than 10" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{EPIEV_A} == '1'", // Assuming respondents are adults (18+) who ever had epilepsy
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EPIDR_A",
        title: "During the past 12 months, have you seen a neurologist or epilepsy specialist for your seizure disorder or epilepsy?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{EPIEV_A} == '1'", // Assuming respondents are adults (18+) who ever had epilepsy
        // Skip logic can be implemented here if needed.
    }
];