export const pmd = [
    {
        type: "radiogroup",
        name: "RX12M_A",
        title: "At any time in the past 12 months, did you take prescription medication?",
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
    {
        type: "radiogroup",
        name: "RXSK12M_A",
        title: "During the past 12 months, were any of the following true for you? You skipped medication doses to save money.",
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
        visibleIf: "{RX12M_A} == 1" // Dependent on the respondent taking prescription medication in the past 12 months
        // Skip logic can be implemented here based on the respondent's medication history.
    },
    {
        type: "radiogroup",
        name: "RXLS12M_A",
        title: "During the past 12 months, were any of the following true for you? You took less medication to save money.",
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
        visibleIf: "{RX12M_A} == 1" // Dependent on the respondent taking prescribed medication in the past 12 months
        // Skip logic can be implemented here based on the respondent's medication history.
    },
    {
        type: "radiogroup",
        name: "RXDL12M_A",
        title: "During the past 12 months, were any of the following true for you? You DELAYED filling a prescription to save money.",
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
        visibleIf: "{RX12M_A} == 1" // Dependent on the respondent taking prescribed medication in the past 12 months
        // Skip logic can be implemented here based on the respondent's medication history.
    },
    {
        type: "radiogroup",
        name: "RXDG12M_A",
        title: "During the past 12 months, was there any time when you needed prescription medication, but DID NOT GET IT because of the cost?",
        isRequired: true,
        visibleIf: "{RX12M_A} == 1",
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
        requiredErrorText: "Please select an option."
        // Universe: Sample Adults 18+
    }
];