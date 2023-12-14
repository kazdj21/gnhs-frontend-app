export const mar = [

    {
        type: "radiogroup",
        name: "MARITAL_A",
        title: "Are you now married, living with a partner together as an unmarried couple (COMMON LAW), or neither?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Married"
            },
            {
                value: 2,
                text: "Living with a Partner together as an unmarried couple (Common Law)"
            },
            {
                value: 3,
                text: "Neither"
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
        visibleIf: "{AGE_A} >= 18", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "SPOUSLIV_A",
        title: "Does your spouse live here?",
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
        visibleIf: "{MARITAL_A} == 1", // Assuming 'MARITAL_A' represents the marital status and 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ who are married is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "SPOUNEWSEX_A",
        title: "Is your spouse male or female?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Male"
            },
            {
                value: 2,
                text: "Female"
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
        visibleIf: "{MARITAL_A} == 1", // Assuming 'MARITAL_A' represents the marital status and 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ who are married is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "SPOUSEP_A",
        title: "Does your spouse not live here because you and your spouse are legally separated?",
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
        visibleIf: "{MARITAL_A} == 1 && {SPOUSLIV_A} == 2", // Assuming 'MARITAL_A' represents the marital status, 'SPOUSLIV_A' represents the spouse living status, and 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ whose spouse does not live in the household is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "PARTNEWSEX_A",
        title: "Is your partner male or female?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Male"
            },
            {
                value: 2,
                text: "Female"
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
        visibleIf: "{MARITAL_A} == 2", // Assuming 'MARITAL_A' represents the marital status, 'GENDER1_A' represents the respondent's self-identified gender, and 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ with a partner with incorrect sex is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "EVRMARRIED_A",
        title: "Have you ever been married?",
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
        visibleIf: "({MARITAL_A} == 3 || {MARITAL_A} == 4 || {MARITAL_A} == 5 || {MARITAL_A} == 6 || {MARITAL_A} == 7) && {AGE_A} >= 18", // Assuming 'MARITAL_A' represents the marital status and 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ who are living with an unmarried partner or who are not married or living with an unmarried partner or refused or don't know is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "LEGALSTAT_A",
        title: "What is your current legal marital status?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Married"
            },
            {
                value: 2,
                text: "Widowed"
            },
            {
                value: 3,
                text: "Divorced"
            },
            {
                value: 4,
                text: "Separated"
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
        visibleIf: "({MARITAL_A} == 3)", // Assuming 'MARITAL_A' represents the marital status and 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ who are living with a partner but have been married is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "WIDIVSEP_A",
        title: "Are you widowed, divorced, or separated?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Widowed"
            },
            {
                value: 2,
                text: "Divorced"
            },
            {
                value: 3,
                text: "Separated"
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
        visibleIf: "({MARITAL_A} != 1 && {MARITAL_A} != 4)", // Assuming 'MARITAL_A' represents the marital status and 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ who are neither living with a partner nor married but have been married is applied using the visibleIf condition.
    }

];