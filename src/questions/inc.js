export const inc = [
    {
        type: "radiogroup",
        name: "INCWRKO_A",
        title: "In the last year, did you receive income from wages, salaries, commissions, bonuses, tips, or self-employment?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INCINTER_A",
        title: "In the last year, did you receive income from interest-bearing accounts or investments, dividends from stocks or mutual funds, net rental income, royalty income, or income from estates and trusts?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INCSSRR_A",
        title: "In the last year, did you receive income from Social Security or Railroad Retirement?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INCSSISSDI_A",
        title: "In the last year, did you receive Supplemental Security Income (SSI) or Social Security Disability Income (SSDI), which are different from Social Security?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SSISSDIBTH_A",
        title: "Was this Supplemental Security Income (SSI), Social Security Disability Income (SSDI), or both?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "SSI"
            },
            {
                value: 2,
                text: "SSDI"
            },
            {
                value: 3,
                text: "Both SSI and SSDI"
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SSISSDIDSB_A",
        title: "Was this received as a disability benefit?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INCWELF_A",
        title: "In the last year, did you receive any public assistance or welfare payments from the state or local welfare office?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INCRETIRE_A",
        title: "In the last year, did you receive income from retirement, survivor, or disability pensions?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INCOTHR_A",
        title: "In the last year, did you receive any other sources of taxable and/or non-taxable income such as VA payments from the Veterans Benefits Administration, unemployment compensation, child support, or alimony?",
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
        requiredErrorText: "Please select an option."
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "INCTOTAL_A",
        title: "What is your best estimate of your total income from all sources, before taxes, in the last year? Enter '999995' if the reported income is $999,995 or greater.",
        inputType: "number",
        isRequired: true,
        min: 0,
        max: 999995,
        requiredErrorText: "Please enter your total income.",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 999995,
                text: "Please enter a valid income value between 0 and 999,995."
            }
        ],
        placeHolder: "Enter income here"
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INC250PCT_A",
        title: "Was your total family income from all sources less than 250% of the poverty level or 250% of the poverty level or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than 250% of the poverty level"
            },
            {
                value: "2",
                text: "250% of the poverty level or more"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't Know"
            }
        ]
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INC138PCT_A",
        title: "Was your total family income from all sources less than 138% of the poverty level or 138% of the poverty level or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than 138% of the poverty level"
            },
            {
                value: "2",
                text: "138% of the poverty level or more"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't Know"
            }
        ]
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INC100PCT_A",
        title: "Was your total family income from all sources less than 100% of the poverty level or 100% of the poverty level or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than 100% of the poverty level"
            },
            {
                value: "2",
                text: "100% of the poverty level or more"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't Know"
            }
        ]
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "INC200PCT_A",
        title: "Was your total family income from all sources less than 200% of the poverty level or 200% of the poverty level or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than 200% of the poverty level"
            },
            {
                value: "2",
                text: "200% of the poverty level or more"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't Know"
            }
        ]
        // Skip logic can be added here if needed.
    },
    {
        type: "radiogroup",
        name: "INC75K_A",
        title: "Was your total family income from all sources less than $75,000 or $75,000 or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than $75,000"
            },
            {
                value: "2",
                text: "$75,000 or more"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't Know"
            }
        ]
        // Skip logic can be added here if needed.
    },
    {
        type: "radiogroup",
        name: "INC100K_A",
        title: "Was your total family income from all sources less than $100,000 or $100,000 or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than $100,000"
            },
            {
                value: "2",
                text: "$100,000 or more"
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
        // Skip logic can be added here if needed.
        // Universe: Sample Adults 18+ who answered specific criteria (as mentioned in the description)
    },
    {
        type: "radiogroup",
        name: "INC400PCT_A",
        title: "Was your total family income from all sources less than 400% of poverty threshold or 400% of poverty threshold or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than 400% of poverty threshold"
            },
            {
                value: "2",
                text: "400% of poverty threshold or more"
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
        // Universe: Sample Adults 18+
    },
    {
        type: "radiogroup",
        name: "INC150K_A",
        title: "Was your total family income from all sources less than $150,000 or $150,000 or more?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Less than $150,000"
            },
            {
                value: "2",
                text: "$150,000 or more"
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
        // Universe: Sample Adults 18+
    },
    
];