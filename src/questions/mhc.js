export const mhc = [
    {
        type: "radiogroup",
        name: "MHRX_A",
        title: "During the past 12 months, did you take any medication to help you with any other emotions or with your concentration, behavior, or mental health? (Prescription, traditional, or both)",
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
                text: "None (Check Skip Pattern for previously #2 as 'No')"
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
        visibleIf: "true" // Adjust the conditions based on your skip logic and survey structure
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MHTHRPY_A",
        title: "During the past 12 months, did you receive counseling or therapy from a mental health professional such as a psychiatrist, psychologist, psychiatric nurse, or clinical social worker?",
        isRequired: true,
        colCount: 1, // Adjust the colCount as needed for the layout
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
    {
        type: "radiogroup",
        name: "MHTPYNOW_A",
        title: "Are you currently receiving counseling or therapy from a mental health professional?",
        isRequired: true,
        colCount: 1, // Adjust the colCount as needed for the layout
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
        visibleIf: "({MHTHRPY_A} == '1' || {MHTHRPY_A} == '7' || {MHTHRPY_A} == '9')" // Adjust the condition based on your skip logic and survey structure
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MHTHDLY_A",
        title: "During the past 12 months, have you delayed getting counseling or therapy from a mental health professional because of the cost?",
        isRequired: true,
        colCount: 1, // Adjust the colCount as needed for the layout
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
    {
        type: "radiogroup",
        name: "MHTHND_A",
        title: "During the past 12 months, was there any time when you needed counseling or therapy from a mental health professional, but DID NOT GET IT because of the cost?",
        isRequired: true,
        colCount: 1, // Adjust the colCount as needed for the layout
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
    }
];