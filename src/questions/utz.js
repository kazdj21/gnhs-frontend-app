export const utz = [
    {
        type: "radiogroup",
        name: "LASTDR_A",
        title: "About how long has it been since you last saw a doctor or other health professional about your health?",
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
        name: "WELLNESS_A",
        title: "Was this a wellness visit, physical, or general purpose check-up?",
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
        visibleIf: "{LASTDR_A} > '0'" // Assuming 'LASTDR_A' represents the time since the last doctor visit. Adjust if necessary based on your dataset's structure.
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "WELLVIS_A",
        title: "About how long has it been since you last saw a doctor or other health professional for a wellness visit, physical, or general purpose check-up?",
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
        visibleIf: "{LASTDR_A} != '1'" // Assuming 'LASTDR_A' represents the nature of the last doctor visit. Adjust if necessary based on your dataset's structure.
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "USUALPL_A",
        title: "Is there a place that you go to if you are sick and need health care?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Yes"
            },
            {
                value: 2,
                text: "There is NO place"
            },
            {
                value: 3,
                text: "There is MORE THAN ONE place"
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
        type: "checkbox",
        name: "USPLKIND_A",
        title: "What kind of place do you go to most often for health care?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "A doctor's office or health center"
            },
            {
                value: 2,
                text: "Urgent care center or clinic in a drug store or grocery store"
            },
            {
                value: 3,
                text: "Hospital emergency room"
            },
            {
                value: 4,
                text: "A VA Medical Center or VA outpatient clinic"
            },
            {
                value: 5,
                text: "Some other place (NOTE: TRADITIONAL OR HOLISTIC MEDICINE)"
            },
            {
                value: 6,
                text: "Does not go to one place most often"
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
        requiredErrorText: "Please select at least one option.",
        visibleIf: "{USUALPL_A} > 0" // Assuming 'USUALPL_A' represents having a usual place of care. Adjust if necessary based on your dataset's structure.
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "URGENT12M_A",
        title: "During the past 12 months, how many times have you gone to an urgent care center or a clinic in a drug store or grocery store about your health?",
        isRequired: true,
        placeHolder: "Enter number of visits",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 96,
                text: "Please enter a valid number of visits between 00-96"
            }
        ],
        requiredErrorText: "Please enter the number of visits during the past 12 months.",
        visibleIf: "true" // This question does not have specific visibility conditions in the provided NHIS specifications
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "EMERGE12M_A",
        title: "During the past 12 months, how many times have you gone to a hospital emergency room about your health?",
        isRequired: false,
        placeHolder: "Enter number of visits",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 96,
                text: "Please enter a valid number of visits between 00-96"
            }
        ],
        requiredErrorText: "Please enter the number of visits during the past 12 months.",
        visibleIf: "true" // This question does not have specific visibility conditions in the provided NHIS specifications
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "HOSPONGT_A",
        title: "During the past 12 months, have you been hospitalized overnight?",
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
        name: "MEDDL12M_A",
        title: "During the past 12 months, have you delayed getting medical care because of the cost?",
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
        name: "MEDNG12M_A",
        title: "During the past 12 months, was there any time when you needed medical care, but DID NOT GET IT because of the cost?",
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
    }
];