export const dnc = [
    {
        type: "radiogroup",
        name: "DENPREV_A",
        title: "About how long has it been since you last had a dental examination or cleaning?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 0,
                text: "Never"
            },
            {
                value: 1,
                text: "Within the past year (anytime less than 12 months ago)"
            },
            {
                value: 2,
                text: "Within the last 2 years (1 year but less than 2 years ago)"
            },
            {
                value: 3,
                text: "Within the last 3 years (2 years but less than 3 years ago)"
            },
            {
                value: 4,
                text: "Within the last 5 years (3 years but less than 5 years ago)"
            },
            {
                value: 5,
                text: "Within the last 10 years (5 years but less than 10 years ago)"
            },
            {
                value: 6,
                text: "10 years ago or more"
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
        name: "DENDL12M_A",
        title: "During the past 12 months, have you DELAYED getting dental care because of the cost?",
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
        name: "DENNG12M_A",
        title: "During the past 12 months, was there any time when you needed dental care, but DID NOT GET IT because of the cost?",
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