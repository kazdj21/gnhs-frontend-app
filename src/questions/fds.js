export const fds = [
    {
        type: "radiogroup",
        name: "FDSRUNOUT_A",
        title: "'I/we was/were worried whether my/our food would run out before I/we got the money to buy more.' Was that often true, sometimes true, or never true for you/your family in the last 30 days?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Often true"
            },
            {
                value: 2,
                text: "Sometimes true"
            },
            {
                value: 3,
                text: "Never true"
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
        visibleIf: "true" // Adjust the condition based on your age variable
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "FDSLAST_A",
        title: "The food that I/we bought just didn't last, and I/we didn't have money to get more.' Was that often true, sometimes true, or never true for you/your family in the last 30 days?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Often true"
            },
            {
                value: 2,
                text: "Sometimes true"
            },
            {
                value: 3,
                text: "Never true"
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
        visibleIf: "true" // Adjust the condition based on your age variable
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "FDSBALANCE_A",
        title: "I/we couldn't afford to eat balanced meals.' Was that often true, sometimes true, or never true for you/your family in the last 30 days?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Often true"
            },
            {
                value: 2,
                text: "Sometimes true"
            },
            {
                value: 3,
                text: "Never true"
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
        visibleIf: "true" // Adjust the condition based on your age variable
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "FDSSKIP_A",
        title: "In the last 30 days, did you or other ever cut the size of your meals or skip meals because there wasn't enough money for food?",
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
        visibleIf: "true" // Adjust the condition based on your age variable
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "FDSSKIPDYS_A",
        title: "In the last 30 days, how many days did this happen?",
        isRequired: true,
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 30,
                text: "Please enter a number between 1 and 30"
            }
        ],
        inputFormat: "number",
        requiredErrorText: "Please enter a valid number between 1 and 30",
        visibleIf: "{FDSSKIP_A} == 1" // Assuming FDSSKIP_A represents 'Yes' for the previous question
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "FDSLESS_A",
        title: "In the last 30 days, did you or other ever eat less than you felt you should because there wasn't enough money for food?",
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
        visibleIf: "{FDSRUNOUT_A} == 1 || {FDSLAST_A} == 1 || {FDSBALANCE_A} == 1" // Assuming these variables represent 'Yes' for their respective questions
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "FDSHUNGRY_A",
        title: "In the last 30 days, were you or other ever hungry but didn't eat because there wasn't enough money for food?",
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
        visibleIf: "{FDSRUNOUT_A} == 1 || {FDSLAST_A} == 1 || {FDSBALANCE_A} == 1" // Assuming these variables represent 'Yes' for their respective questions
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "FDSWEIGHT_A",
        title: "In the last 30 days, did you or other lose weight because there wasn't enough money for food?",
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
        visibleIf: "{FDSRUNOUT_A} == 1 || {FDSLAST_A} == 1 || {FDSBALANCE_A} == 1" // Assuming these variables represent 'Yes' for their respective questions
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "FDSNOTEAT_A",
        title: "In the last 30 days, did you or other ever not eat for a whole day because there wasn't enough money for food?",
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
        visibleIf: "{FDSSKIP_A} == 1 || {FDSHUNGRY_A} == 1 || {FDSWEIGHT_A} == 1" // Assuming these variables represent 'Yes' for their respective questions
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "FDSNEDAYS_A",
        title: "In the last 30 days, how many days did this happen?",
        isRequired: true,
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 30,
                text: "Please enter a number between 1 and 30"
            }
        ],
        inputFormat: "number",
        requiredErrorText: "Please enter a valid number between 1 and 30",
        visibleIf: "{FDSNOTEAT_A} == 1" // Assuming FDSNOTEAT_A represents 'Yes' for the previous question
        // Skip logic can be implemented here if needed.
    },
    
];