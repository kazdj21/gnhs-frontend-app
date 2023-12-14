export const hou = [

    {
        type: "radiogroup",
        name: "HOUYRSLIV_A",
        title: "About how long have you lived at your current residence?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Less than 1 year"
            },
            {
                value: 2,
                text: "1 to 3 years"
            },
            {
                value: 3,
                text: "4 to 10 years"
            },
            {
                value: 4,
                text: "11 to 20 years"
            },
            {
                value: 5,
                text: "More than 20 years"
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
        name: "HOUTENURE_A",
        title: "Is the house owned or rented by you or someone in your family?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Owned or being bought"
            },
            {
                value: 2,
                text: "Rented"
            },
            {
                value: 3,
                text: "Other arrangement"
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
        visibleIf: "{AGE_A} >= 18" // Adjust the condition based on your age variable
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "HOUGVASST_A",
        title: "Are you paying lower rent because the Federal, State, or local government is paying part of the cost?",
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
        visibleIf: "{HOUTENURE_A} == 2" // Assuming HOUTENURE_A represents 'Rented' for the previous question
        // Skip logic can be implemented here if needed.
    },
    

];