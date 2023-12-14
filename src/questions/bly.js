export const bly = [

    {
        type: "radiogroup",
        name: "BULLYVIC_C",
        title: "During the past 12 months, how often was your child bullied, picked on, or excluded by other children?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 0,
                text: "Never in the past 12 months"
            },
            {
                value: 1,
                text: "1-2 times in the past 12 months"
            },
            {
                value: 2,
                text: "1-2 times per month"
            },
            {
                value: 3,
                text: "1-2 times per week"
            },
            {
                value: 4,
                text: "Almost every day"
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
        visibleIf: "true" // Assuming 'AGEC' represents the age of the child being surveyed
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "CYBERVIC_C",
        title: "During the past 12 months, has your child been electronically bullied?",
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
        visibleIf: "true" // Assuming 'AGEC' represents the age of the child being surveyed
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "BULLYPERP_C",
        title: "During the past 12 months, how often did your child bully others, pick on them, or exclude them?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 0,
                text: "Never in the past 12 months"
            },
            {
                value: 1,
                text: "1-2 times in the past 12 months"
            },
            {
                value: 2,
                text: "1-2 times per month"
            },
            {
                value: 3,
                text: "1-2 times per week"
            },
            {
                value: 4,
                text: "Almost every day"
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
        visibleIf: "true" // Assuming 'AGEC' represents the age of the child being surveyed
        // Skip logic can be implemented here if needed based on specific criteria
    },
    

];