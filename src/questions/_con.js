export const con = [
    {
        type: "radiogroup",
        name: "COPDEV_A",
        title: "Have you EVER been told by a doctor or other health professional that you had Chronic Obstructive Pulmonary Disease (COPD), emphysema, or chronic bronchitis?",
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
        name: "ARTHEV_A",
        title: "Have you EVER been told by a doctor or other health professional that you had some form of arthritis, rheumatoid arthritis, gout, lupus, or fibromyalgia?",
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
        name: "DEMENEV_A",
        title: "Have you EVER been told by a doctor or other health professional that you had dementia, including Alzheimer's disease?",
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
        name: "ANXEV_A",
        title: "Have you EVER been told by a doctor or other health professional that you had any type of anxiety disorder?",
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
        name: "DEPEV_A",
        title: "Have you EVER been told by a doctor or other health professional that you had any type of depression?",
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
    

];