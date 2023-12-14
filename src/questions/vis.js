export const vis = [
    {
        type: "radiogroup",
        name: "WEARGLSS_A",
        title: "Do you wear glasses or contact lenses?",
        isRequired: true,
        colCount: 1,
        choices: [
            "Yes",
            "No",
            "Refused",
            "Don't Know"
        ],
        visibleIf: "true", // Assuming respondents are adults (18+)
        // Additional skip logic can be added here if needed.
    }
];