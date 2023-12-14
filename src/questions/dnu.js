export const dnu = [
    {
        type: "text",
        name: "SODANO_A",
        title: "During the past month, how often did you drink REGULAR SODA or pop that contains sugar? Do NOT include diet soda. You can tell me per day, per week, or per month.",
        isRequired: true,
        inputType: "text",
        inputMask: "999", // Restricts input to a three-digit number
        requiredErrorText: "Please indicate how often you drank regular soda containing sugar in the past 30 days.",
        validators: [
            {
                type: "numeric",
                minValue: 1, // Change if 'Never' is represented by a different numeric value
                maxValue: 995, // Change if upper limit is different
                text: "Please enter a valid frequency between 1 and 995, or '997' for 'Never'."
            }
        ],
        maxLength: 3, // Limits input length to 3 digits
        autoComplete: "off",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "SODATP_A",
        title: "Enter time period.",
        isRequired: true,
        colCount: 1, // Adjust based on the layout preferences
        choices: [
            {
                value: "1",
                text: "Day"
            },
            {
                value: "2",
                text: "Week"
            },
            {
                value: "3",
                text: "Month"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't know"
            }
        ],
        validators: [
            {
                type: "answercount",
                minCount: 1,
                maxCount: 1,
                text: "Please select one option."
            }
        ],
        hasOther: false,
        otherText: "Other",
        visibleIf: "{SODANO_A} > 0" // Assuming the time period question should be visible only if the respondent drank soda in the past month
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "text",
        name: "FRJUICNO_A",
        title: "How often did you drink 100% PURE fruit juice in the past month?",
        isRequired: true,
        inputType: "text",
        inputMask: "999", // Restricts input to a three-digit number
        requiredErrorText: "Please indicate how often you drank regular soda containing sugar in the past 30 days.",
        validators: [
            {
                type: "numeric",
                minValue: 1, // Change if 'Never' is represented by a different numeric value
                maxValue: 995, // Change if upper limit is different
                text: "Please enter a valid frequency between 1 and 995, or '997' for 'Never'."
            }
        ],
        maxLength: 3, // Limits input length to 3 digits
        autoComplete: "off",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    {
        type: "radiogroup",
        name: "FRJUICTP_A",
        title: "Enter time period of drinking pure fruit juice in the past month.",
        isRequired: true,
        colCount: 1, // Adjust based on the layout preferences
        choices: [
            {
                value: "1",
                text: "Day"
            },
            {
                value: "2",
                text: "Week"
            },
            {
                value: "3",
                text: "Month"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't Know"
            }
        ],
        validators: [
            {
                type: "answercount",
                minCount: 1,
                maxCount: 1,
                text: "Please select one option."
            }
        ],
        visibleIf: "{FRJUICNO_A} > 0", // Only visible if the respondent drank pure fruit juice at least once in the past month
        hasOther: false,
        otherText: "Other",
    },
    {
        type: "text",
        name: "COFFEENO_A",
        title: "During the past month, how often did you drink coffee or tea that had sugar or honey added to it?",
        inputType: "text",
        placeHolder: "Enter frequency (e.g., per day, per week, per month)",
        isRequired: true,
        validators: [
            {
                type: "text",
                minLength: 1,
                maxLength: 50,
                text: "Please enter the frequency."
            }
        ],
        visibleIf: "{COFFEENO_A} > 0", // To only show this question if respondent drank sweetened coffee or tea in the past month
        colCount: 1 // Adjust based on the layout preferences
    },
    {
        type: "radiogroup",
        name: "COFFEENOTP_A",
        title: "Enter time period of drinking coffee or tea with sugar in the past month.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Day"
            },
            {
                value: "2",
                text: "Week"
            },
            {
                value: "3",
                text: "Month"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't know"
            }
        ],
        validators: [
            {
                type: "answercount",
                minCount: 1,
                maxCount: 1,
                text: "Please select one option."
            }
        ],
        hasOther: false,
        otherText: "Other",
        visibleIf: "{COFFEENO_A} > 0", // Assuming this question is relevant only if the respondent drank coffee or tea with sugar in the past month
        // Adjust the visibility conditions based on your specific survey criteria or universe logic.
        // Universe logic for NHIS 'Sample Adults 18+' who drank coffee or tea with sugar in the past month
    },
    {
        type: "text",
        name: "SPORDRNO_A",
        title: "How often did you drink SPORTS and ENERGY drinks such as Gatorade®, Red Bull®, and Vitamin water® in the past month?",
        inputType: "text",
        placeHolder: "Enter frequency (e.g., per day, per week, per month)",
        isRequired: true,
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 995,
                text: "Please enter a valid frequency between 0 and 995, or '997' for 'Never'."
            }
        ],
        maxLength: 3, // Limits input length to 3 digits
        autoComplete: "off",
        requiredErrorText: "Please indicate how often you drank sports and energy drinks in the past month.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Adjust the visibility conditions based on your specific survey criteria or universe logic.
        // Universe logic for NHIS 'Sample Adults 18+'
    },
    {
        type: "radiogroup",
        name: "SPORDRTP_A",
        title: "Enter time period of drinking sports or energy drinks in the past month.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Day"
            },
            {
                value: "2",
                text: "Week"
            },
            {
                value: "3",
                text: "Month"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't know"
            }
        ],
        validators: [
            {
                type: "answercount",
                minCount: 1,
                maxCount: 1,
                text: "Please select one option."
            }
        ],
        hasOther: false,
        otherText: "Other",
        visibleIf: "{SPORDRNO_A} > 0", // Assuming this question is relevant only if the respondent drank sports or energy drinks in the past month
        // Adjust the visibility conditions based on your specific survey criteria or universe logic.
        // Universe logic for NHIS 'Sample Adults 18+' who drank sports or energy drinks in the past month
    },
    {
        type: "text",
        name: "FRTDRNO_A",
        title: "How often did you drink sweetened fruit drinks, such as Kool-aid®, cranberry, and lemonade in the past month?",
        inputType: "text",
        placeHolder: "Enter frequency (e.g., per day, per week, per month)",
        isRequired: true,
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 995,
                text: "Please enter a valid frequency between 0 and 995, or '997' for 'Never'."
            }
        ],
        maxLength: 3, // Limits input length to 3 digits
        autoComplete: "off",
        requiredErrorText: "Please indicate how often you drank sweetened fruit drinks in the past month.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Adjust the visibility conditions based on your specific survey criteria or universe logic.
        // Universe logic for NHIS 'Sample Adults 18+'
    },
    {
        type: "radiogroup",
        name: "FRTDRTP_A",
        title: "Enter time period of drinking sweetened fruit drinks in the past month.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Day"
            },
            {
                value: "2",
                text: "Week"
            },
            {
                value: "3",
                text: "Month"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't know"
            }
        ],
        validators: [
            {
                type: "answercount",
                minCount: 1,
                maxCount: 1,
                text: "Please select one option."
            }
        ],
        hasOther: false,
        otherText: "Other",
        visibleIf: "{FRTDRNO_A} > 0", // Assuming this question is relevant only if the respondent drank sweetened fruit drinks in the past month
        // Adjust the visibility conditions based on your specific survey criteria or universe logic.
        // Universe logic for NHIS 'Sample Adults 18+' who drank sweetened fruit drinks in the past month
    },
    
];