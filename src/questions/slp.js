export const slp = [
    {
        type: "text",
        inputType: "number",
        name: "SLPHOURS_A",
        title: "On average, how many hours of sleep do you get in a 24-hour period?",
        description: "Enter hours in whole numbers, rounding 30 minutes (1/2 hour) or more UP to the next whole hour and dropping 29 or fewer minutes.",
        isRequired: true,
        placeHolder: "Enter hours (01-24)",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 24,
                text: "Please enter a number between 01 and 24."
            }
        ],
        requiredErrorText: "Please enter the average number of hours of sleep you get in a 24-hour period.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "SLPREST_A",
        title: "During the past 30 days, how often did you wake up feeling well-rested?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Never"
            },
            {
                value: 2,
                text: "Some days"
            },
            {
                value: 3,
                text: "Most days"
            },
            {
                value: 4,
                text: "Every day"
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
        requiredErrorText: "Please select how often you woke up feeling well-rested in the past 30 days.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "SLPFLL_A",
        title: "During the past 30 days, how often did you have trouble falling asleep?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Never"
            },
            {
                value: 2,
                text: "Some days"
            },
            {
                value: 3,
                text: "Most days"
            },
            {
                value: 4,
                text: "Every day"
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
        requiredErrorText: "Please select how often you had trouble falling asleep in the past 30 days.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "SLPSTY_A",
        title: "During the past 30 days, how often did you have trouble staying asleep, including waking up too early?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Never"
            },
            {
                value: 2,
                text: "Some days"
            },
            {
                value: 3,
                text: "Most days"
            },
            {
                value: 4,
                text: "Every day"
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
        requiredErrorText: "Please select how often you had trouble staying asleep in the past 30 days.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "SLPMED_A",
        title: "During the past 30 days, how often did you take any medication to help you fall asleep or stay asleep? Include both prescribed and over-the-counter medications.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Never"
            },
            {
                value: 2,
                text: "Some days"
            },
            {
                value: 3,
                text: "Most days"
            },
            {
                value: 4,
                text: "Every day"
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
        requiredErrorText: "Please select how often you took medication to help with sleep in the past 30 days.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    
];