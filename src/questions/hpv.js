export const hpv = [

    {
        type: "radiogroup",
        name: "SHTHPV_C",
        title: "Has your child ever received an HPV shot or vaccine?",
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
        visibleIf: "true" // Assuming 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "SHTHPVAGE_C",
        title: "How old was your child when they received their first HPV shot?",
        inputType: "number",
        isRequired: true,
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 17,
                allowDigits: true,
                text: "Please enter a valid age between 1 and 17."
            }
        ],
        requiredErrorText: "Please enter the age when the first HPV shot was received.",
        visibleIf: "{SHTHPV_C} == 1" // Assuming 'SHTHPV_C' represents having received an HPV shot, and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    

];