export const phy = [
    {
        type: "text",
        inputType: "number",
        name: "MODN_A",
        title: "How often do you do MODERATE-INTENSITY LEISURE-TIME physical activities?",
        description: "Moderate-intensity activities cause moderate increases in breathing or heart rate.",
        isRequired: true,
        placeHolder: "Enter the frequency (000-995)",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 995,
                text: "Please enter a number between 000 and 995."
            }
        ],
        requiredErrorText: "Please enter the frequency of moderate-intensity leisure-time physical activities.",
        visibleIf: true // Visible for Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "MODTP_A",
        title: "Enter time period for moderate leisure-time physical activities.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Per day"
            },
            {
                value: 2,
                text: "Per week"
            },
            {
                value: 3,
                text: "Per month"
            },
            {
                value: 4,
                text: "Per year"
            },
            {
                value: 7,
                text: "Refused"
            },
            {
                value: 9,
                text: "Don't know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select a time period for moderate leisure-time physical activities.",
        visibleIf: "{MODN_A} > 0" // Assuming 'MODN_A' represents the frequency of moderate-intensity leisure-time physical activities
        // Universe logic for NHIS 'Sample Adults 18+ who do moderate physical activities' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "MODLN_A",
        title: "About how long do you do these moderate leisure-time physical activities each time?",
        description: "Moderate-intensity activities cause moderate increases in breathing or heart rate.",
        isRequired: true,
        placeHolder: "Enter the duration (001-995)",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 995,
                text: "Please enter a number between 001 and 995."
            }
        ],
        requiredErrorText: "Please enter the duration of moderate leisure-time physical activities.",
        visibleIf: "{MODN_A} > 0" // Assuming 'MODN_A' represents the frequency of moderate-intensity leisure-time physical activities
        // Universe logic for NHIS 'Sample Adults 18+ who do moderate physical activities' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "MODLN_A",
        title: "About how long do you do these moderate leisure-time physical activities each time?",
        description: "Moderate-intensity activities cause moderate increases in breathing or heart rate.",
        isRequired: true,
        placeHolder: "Enter the duration (001-995)",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 995,
                text: "Please enter a number between 001 and 995."
            }
        ],
        requiredErrorText: "Please enter the duration of moderate leisure-time physical activities.",
        visibleIf: "{MODN_A} > 0" // Assuming 'MODN_A' represents the frequency of moderate-intensity leisure-time physical activities
        // Universe logic for NHIS 'Sample Adults 18+ who do moderate physical activities' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "VIGN_A",
        title: "How often do you do VIGOROUS-INTENSITY LEISURE-TIME physical activities?",
        description: "Vigorous-intensity activities cause large increases in breathing or heart rate.",
        isRequired: true,
        placeHolder: "Enter the frequency (000-995)",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 995,
                text: "Please enter a number between 000 and 995."
            }
        ],
        requiredErrorText: "Please enter the frequency of vigorous-intensity leisure-time physical activities.",
        visibleIf: true // Assuming this question is relevant for all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "VIGTP_A",
        title: "Enter time period for vigorous leisure-time physical activities.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Per day"
            },
            {
                value: 2,
                text: "Per week"
            },
            {
                value: 3,
                text: "Per month"
            },
            {
                value: 4,
                text: "Per year"
            },
            {
                value: 7,
                text: "Refused"
            },
            {
                value: 9,
                text: "Don't know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select a time period for vigorous leisure-time physical activities.",
        visibleIf: "{VIGN_A} > 0" // Assuming 'VIGN_A' represents the frequency of vigorous-intensity leisure-time physical activities
        // Universe logic for NHIS 'Sample Adults 18+ who do vigorous physical activities' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "VIGLN_A",
        title: "About how long do you do these vigorous leisure-time physical activities each time?",
        description: "Vigorous-intensity activities cause large increases in breathing or heart rate.",
        isRequired: true,
        placeHolder: "Enter the duration (001-995)",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 995,
                text: "Please enter a number between 001 and 995."
            }
        ],
        requiredErrorText: "Please enter the duration of vigorous leisure-time physical activities.",
        visibleIf: "{VIGN_A} > 0" // Assuming 'VIGN_A' represents the frequency of vigorous-intensity leisure-time physical activities
        // Universe logic for NHIS 'Sample Adults 18+ who do vigorous physical activities' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "radiogroup",
        name: "VIGLTP_A",
        title: "Enter time period for length of vigorous leisure-time physical activities.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Minutes"
            },
            {
                value: 2,
                text: "Hours"
            },
            {
                value: 7,
                text: "Refused"
            },
            {
                value: 9,
                text: "Don't know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select a time period for length of vigorous leisure-time physical activities.",
        visibleIf: "{VIGN_A} > 0" // Assuming 'VIGN_A' represents the frequency of vigorous-intensity leisure-time physical activities
        // Universe logic for NHIS 'Sample Adults 18+ who do vigorous physical activities' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "STRN_A",
        title: "How often do you do LEISURE-TIME physical activities specifically designed to STRENGTHEN your muscles?",
        description: "Including activities like sit-ups, push-ups, or lifting weights.",
        isRequired: true,
        placeHolder: "Enter the frequency (000-995)",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 995,
                text: "Please enter a number between 000 and 995."
            }
        ],
        requiredErrorText: "Please enter the frequency of strengthening activities.",
        visibleIf: true // Assuming this question is relevant for all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "STRTP_A",
        title: "Enter time period for strengthening activities.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Per day"
            },
            {
                value: 2,
                text: "Per week"
            },
            {
                value: 3,
                text: "Per month"
            },
            {
                value: 4,
                text: "Per year"
            },
            {
                value: 7,
                text: "Refused"
            },
            {
                value: 9,
                text: "Don't know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select a time period for strengthening activities.",
        visibleIf: "{STRN_A} > 0" // Assuming 'STRN_A' represents the frequency of activities specifically designed to strengthen muscles
        // Universe logic for NHIS 'Sample Adults 18+ who do strengthening activities' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    
];