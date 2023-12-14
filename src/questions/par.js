export const par = [

    {
        type: "radiogroup",
        name: "RELCHPAR_C",
        title: "Are you the child's biological, adoptive, or step father/mother?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Biological"
            },
            {
                value: 2,
                text: "Adoptive"
            },
            {
                value: 3,
                text: "Step"
            },
            {
                value: 4,
                text: "Other"
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
        visibleIf: "true" // Assuming 'AGEGRP' represents age group (0-17 years)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MARITAL_C",
        title: "^AreyouIspar married, living with a partner together as an unmarried (OR COMMON LAW) couple, or neither?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Married"
            },
            {
                value: 2,
                text: "Living with a partner together as an unmarried couple"
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
        visibleIf: "{MARSTAT_A} == 9 || {MARSTAT_A} == 7 || ({MARSTAT_A} == 99)" // Assuming 'MARSTAT_A' represents the parent's marital status in the Sample Adult section and 'RELATE_C' represents the relationship between the parent and child
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SPOUSLIV_C",
        title: "Does ^yourPARspouse (OR PARTNER) currently live in the household?",
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
        visibleIf: "{MARITAL_C} == 1" // Assuming 'MARITAL_C' represents the marital status of the parent as married
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SPOUSEP_C",
        title: "Does your spouse (OR PARTNER) not live here because you and your spouse are legally separated?",
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
        visibleIf: "{MARITAL_C} == 1 && {SPOUSLIV_C} == 2" // Assuming 'MARITAL_C' represents the parent's marital status as married and 'SPOUSLIV_C' represents whether the spouse lives in the household
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EVRMARRIED_C",
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
        visibleIf: "({MARITAL_C} != 1) || {MARSTAT_A} == 7 || {MARSTAT_A} == 9" // Assuming 'MARITAL_C' represents the parent's marital status, 'RELATE_C' represents the relationship between parent and child, 'MARSTAT_A' represents marital status in Sample Adult section, and 'COHAB_A' represents cohabitation status in Sample Adult section
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "LEGALSTAT_C",
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
        visibleIf: "({MARITAL_C} == 1)" // Assuming 'MARITAL_C' represents the parent's marital status, 'COHAB_A' represents cohabitation status in Sample Adult section, and 'COHAB_MAR_A' represents cohabitation status with partner in Sample Adult section
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "WIDIVSEP_C",
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
        visibleIf: "({MARITAL_C} != 1)" // Assuming 'MARITAL_C' represents the parent's marital status, 'COHAB_A' represents cohabitation status in Sample Adult section, and 'COHAB_MAR_A' represents cohabitation status with partner in Sample Adult section
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PARBORN_C",
        title: "Were you born in the United States or a U.S. territory?",
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
        visibleIf: "true" // Assuming 'BPL_A' represents the parent's place of birth in Sample Adult section where 7 represents Refused and 9 represents Don't Know
        // Skip logic can be implemented here if needed.
    }

];