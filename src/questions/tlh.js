export const tlh = [
    {
        type: "radiogroup",
        name: "VIRAPP12M_A",
        title: "During the past 12 months, have you had an appointment with a doctor, nurse, or other health professional by video or by phone?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Yes"
            },
            {
                value: 2,
                text: "No"
            },
            {
                value: 7,
                text: "Refused"
            },
            {
                value: 9,
                text: "Don't Know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select an option.",
        visibleIf: "true" // This question does not have specific visibility conditions in the provided NHIS specifications
        // Skip logic can be implemented here if needed.
    },
    
];