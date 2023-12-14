export const anx = [
    {
        type: "radiogroup",
        name: "ANXFREQ_A",
        title: "How often do you feel worried, nervous, or anxious?",
        isRequired: true,
        colCount: 2, // Adjust the colCount as needed for the layout
        choices: [
            {
                value: 1,
                text: "Daily"
            },
            {
                value: 2,
                text: "Weekly"
            },
            {
                value: 3,
                text: "Monthly"
            },
            {
                value: 4,
                text: "A few times a year"
            },
            {
                value: 5,
                text: "Never"
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
    {
        type: "radiogroup",
        name: "ANXMED_A",
        title: "Do you take any medication when you feel worried, nervous, or anxious? (Prescription, traditional, or both)",
        isRequired: true,
        colCount: 2, // Adjust the colCount as needed for the layout
        choices: [
            {
                value: 1,
                text: "Prescription Medication"
            },
            {
                value: 2,
                text: "Traditional Medication"
            },
            {
                value: 3,
                text: "Both"
            },
            {
                value: 4,
                text: "None"
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
    {
        type: "radiogroup",
        name: "ANXLEVEL_A",
        title: "Thinking about the last time you felt worried, nervous, or anxious, would you say you were worried, nervous, or anxious?",
        isRequired: true,
        colCount: 2, // Adjust the colCount as needed for the layout
        choices: [
            {
                value: 1,
                text: "A little"
            },
            {
                value: 2,
                text: "A lot"
            },
            {
                value: 3,
                text: "Somewhere in between a little and a lot"
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
    }
];