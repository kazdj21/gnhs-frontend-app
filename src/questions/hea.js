export const hea = [
    {
        type: "radiogroup",
        name: "HEARAID_A",
        title: "Do you use a hearing aid?",
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