export const wlk = [
    {
        type: "radiogroup",
        name: "WLKTRAN_A",
        title: "In the past 7 days, did you walk for transportation?",
        description: "This includes walking to or from work, doing errands, or moving from place to place (excluding relaxation or exercise walking).",
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
        requiredErrorText: "Please select whether you walked for transportation in the past 7 days.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "text",
        inputType: "number",
        name: "WLKTRANDAY_A",
        title: "In the past 7 days, how many days did you walk for transportation?",
        isRequired: true,
        placeHolder: "Enter the number of days (01-07)",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 7,
                text: "Please enter a number between 01 and 07."
            }
        ],
        requiredErrorText: "Please enter the number of days you walked for transportation in the past 7 days.",
        visibleIf: "{WLKTRAN_A} == 1" // Assuming 'WLKTRAN_A' represents the respondent's affirmative response to walking for transportation in the past 7 days
        // Universe logic for NHIS 'Sample Adults 18+ who have walked for transportation in the past 7 days' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "radiogroup",
        name: "WLKLEIS_A",
        title: "In the past 7 days, did you walk for fun, relaxation, exercise, or to walk the dog?",
        description: "Exclude walking for transportation purposes.",
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
        requiredErrorText: "Please indicate if you walked for non-transportation reasons in the past 7 days.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+ who are able to walk' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "text",
        inputType: "number",
        name: "WLKLEISDAY_A",
        title: "In the past 7 days, how many days did you walk for leisure or exercise?",
        description: "Exclude walking for transportation purposes.",
        isRequired: true,
        placeHolder: "Enter the number of days (01-07)",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 7,
                text: "Please enter a number between 01 and 07."
            }
        ],
        requiredErrorText: "Please enter the number of days you walked for leisure or exercise in the past 7 days.",
        visibleIf: "{WLKLEIS_A} == 1" // Assuming 'WLKLEIS_A' represents the respondent's affirmative response to walking for leisure in the past 7 days
        // Universe logic for NHIS 'Sample Adults 18+ who have walked for leisure in the past 7 days' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    }
];