export const foo = [
    {
        type: "radiogroup",
        name: "FSNAP12M_A",
        title: "At any time in the last 12 months did your family receive food stamp benefits?",
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
        visibleIf: "true" // Assuming AGE_A represents respondent's age as 18 or older
        // Skip logic can be implemented here if needed based on your survey's requirements.
    },
    {
        type: "radiogroup",
        name: "FSNAP30D_A",
        title: "Did ^YOUFAMLVHERE_A receive ^FSSNAPNM in the LAST 30 days?",
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
        visibleIf: "{FSNAP12M_A} == 1" // Assuming FSNAP12M_A represents receiving food stamps in the last 12 months and AGE_A represents respondent's age as 18 or older
        // Skip logic can be implemented here if needed based on your survey's requirements.
    },
    {
        type: "radiogroup",
        name: "FWIC12M_A",
        title: "At any time in the last 12 months did your family receive benefits from the WIC program, that is, the Women, Infants, and Children program?",
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
        visibleIf: "true" // Assuming AGE_A represents respondent's age as 18 or older
        // Skip logic can be implemented here if needed based on your survey's requirements.
    },
    {
        type: "radiogroup",
        name: "FLUNCH12M_A",
        title: "At any time in the last 12 months, did any child in your family receive free or reduced-cost breakfasts or lunches at school?",
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
        visibleIf: "true" // Assuming AGE_A represents respondent's age as 18 or older
        // Skip logic can be implemented here if needed based on your survey's requirements.
    },
    
];