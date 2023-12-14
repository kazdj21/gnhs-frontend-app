export const cvl = [
    {
        type: "radiogroup",
        name: "CVDDIAG_A",
        title: "Has a doctor or other health professional ever told you that you had or likely had coronavirus or COVID-19?",
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
        name: "POSTEST_A",
        title: "Did you ever take a test that showed you had coronavirus or COVID-19?",
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
        name: "CVDSEV_A",
        title: "How would you describe your coronavirus symptoms when they were at their worst?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "No symptoms"
            },
            {
                value: 2,
                text: "Mild symptoms"
            },
            {
                value: 3,
                text: "Moderate symptoms"
            },
            {
                value: 4,
                text: "Severe symptoms"
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
        visibleIf: "({CVDDIAG_A} == '1' || {CVDDIAG_A} == '7' || {POSTEST_A} == '1' || {POSTEST_A} == '7')" // Replace {CVDDIAG_A} and {POSTEST_A} with the appropriate variables from your survey data
        // Universe logic has been provided based on NHIS specifications.
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "LONGCVD_A",
        title: "Did you have any symptoms lasting 3 months or longer that you did not have prior to having coronavirus or COVID-19?",
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
        visibleIf: "({CVDSEV_A} == '2' || {CVDSEV_A} == '3' || {CVDSEV_A} == '4' || {CVDSEV_A} == '7' || {CVDSEV_A} == '9')" // Replace {CVDSEV_A} with the appropriate variable from your survey data
        // Universe logic has been provided based on NHIS specifications.
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SYMPNOW_A",
        title: "Do you have symptoms NOW?",
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
        visibleIf: "({CVDSEV_A} == '2' || {CVDSEV_A} == '3' || {CVDSEV_A} == '4' || {CVDSEV_A} == '7' || {CVDSEV_A} == '9')" // Replace {CVDSEV_A} with the appropriate variable from your survey data
        // Universe logic has been provided based on NHIS specifications.
        // Skip logic can be implemented here if needed.
    },
    
];