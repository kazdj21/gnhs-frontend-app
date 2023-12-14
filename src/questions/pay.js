export const pay = [
    {
        type: "radiogroup",
        name: "PAYBLL12M_A",
        title: "In the past 12 months, did anyone have problems paying or were unable to pay any medical bills?",
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
        visibleIf: "true" // This will always display the question
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PAYNOBLLNW_A",
        title: "Do you or does anyone in the family currently have any medical bills that you are unable to pay at all?",
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
        visibleIf: "true"
        // Replace {PAYBILL12M_C} with the appropriate variable from your survey data.
        // Universe logic has been provided based on NHIS specifications.
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PAYWORRY_A",
        title: "If you get sick or have an accident, how worried are you that you will be able to pay your medical bills?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Very worried"
            },
            {
                value: 2,
                text: "Somewhat worried"
            },
            {
                value: 3,
                text: "Not at all worried"
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