export const emp = [
    {
        type: "radiogroup",
        name: "EMPLASTWK_A",
        title: "Last week, did you work for pay at a job or business?",
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
        visibleIf: "true" // Universe logic: All Sample Adults 18+
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EMPNOWRK_A",
        title: "Did you have a job or business LAST WEEK, but were temporarily absent due to illness, vacation, family or maternity leave, or some other reason?",
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
        visibleIf: "{EMPLASTWK_A} == 2" // Assuming 'EMPLASTWK_A' represents 'No' for working for pay at a job or business last week
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EMPWHYNOT_A",
        title: "What is the MAIN reason you were not working for pay at a job or business last week?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "01",
                text: "Unemployed, laid off, looking for work"
            },
            {
                value: "02",
                text: "Seasonal/Temporal/Contract work"
            },
            {
                value: "03",
                text: "Retired"
            },
            {
                value: "04",
                text: "Unable to work for health reasons/disabled"
            },
            {
                value: "05",
                text: "Taking care of house or family"
            },
            {
                value: "06",
                text: "Going to school"
            },
            {
                value: "07",
                text: "Working at a family-owned job or business not for pay"
            },
            {
                value: "08",
                text: "Other"
            },
            {
                value: "97",
                text: "Refused"
            },
            {
                value: "99",
                text: "Don't Know"
            }
        ],
        hasOther: true,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select an option.",
        visibleIf: "{EMPLASTWK_A} == 2 && {EMPNOWRK_A} != 1" // Assuming 'EMPLASTWK_A' represents 'No' for working for pay at a job or business last week and 'EMPNOWRK_A' is not 'Yes' for being temporarily absent
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EMPWHENWRK_A",
        title: "When was the last time you worked for pay at a job or business, even if only for a few days?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Within the past 12 months"
            },
            {
                value: 2,
                text: "1-5 years ago"
            },
            {
                value: 3,
                text: "Over 5 years ago"
            },
            {
                value: 4,
                text: "Never worked"
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
        visibleIf: "{EMPWHYNOT_A} == '01' || {EMPWHYNOT_A} == '02' || {EMPWHYNOT_A} == '03' || {EMPWHYNOT_A} == '04' || {EMPWHYNOT_A} == '05' || {EMPWHYNOT_A} == '06' || {EMPWHYNOT_A} == '07' || {EMPWHYNOT_A} == '08' || {EMPWHYNOT_A} == '97' || {EMPWHYNOT_A} == '99'" // Assuming 'EMPWHYNOT_A' represents the main reason for not working last week
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "EMPHOURS_A",
        title: "How many hours do you USUALLY work in total at ALL jobs or businesses?",
        isRequired: true,
        inputType: "number",
        min: 1,
        max: 168,
        requiredErrorText: "Please enter the number of hours.",
        visibleIf: "{EMPLASTWK_A} == 1 || {EMPNOWRK_A} == 1 || ({EMPLASTWK_A} == 2 && {EMPWHYNOT_A} == '02')", // Assuming 'EMPLASTWK_A' represents working last week, 'EMPNOWRK_A' represents temporarily absent last week, 'EMPWHYNOT_A' represents the main reason for not working last week
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EMPFULLTIM_A",
        title: "Do you USUALLY work 35 hours or more per week in total at ALL jobs or businesses?",
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
        visibleIf: "{EMPHOURS_A} == null" // Assuming 'EMPHOURS_A' represents the response where the respondent refused or didn't know how many hours they usually work
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EMPSICKLV_A",
        title: "Was paid sick leave available if you needed it at your last job?",
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
        visibleIf: "{EMPLASTWK_A} == 1 || ({EMPLASTWK_A} == 2 && {EMPNOWRK_A} == 1) || ({EMPLASTWK_A} == 2 && {EMPWHYNOT_A} != '04' && {EMPWHYNOT_A} != '08')" // Assuming 'EMPLASTWK_A' represents working last week, 'EMPNOWRK_A' represents temporarily absent last week, 'EMPWHYNOT_A' represents the main reason for not working last week
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "EMPHEALINS_A",
        title: "Was health insurance offered to you through your workplace at your last job?",
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
        visibleIf: "{EMPLASTWK_A} == 1 || ({EMPLASTWK_A} == 2 && {EMPNOWRK_A} == 1) || ({EMPLASTWK_A} == 2 && {EMPWHYNOT_A} != '04' && {EMPWHYNOT_A} != '08')" // Assuming 'EMPLASTWK_A' represents working last week, 'EMPNOWRK_A' represents temporarily absent last week, 'EMPWHYNOT_A' represents the main reason for not working last week
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "EMPDAYMISS_A",
        title: "During the past 12 months, about how many days of work did you miss because you had an illness, injury, or disability?",
        isRequired: true,
        inputType: "number",
        min: 0,
        max: 365,
        requiredErrorText: "Please enter the number of days.",
        visibleIf: "{EMPLASTWK_A} == 1 || ({EMPLASTWK_A} == 2 && {EMPNOWRK_A} == 1) || ({EMPLASTWK_A} == 2 && {EMPWHYNOT_A} != '04' && {EMPWHYNOT_A} != '08')" // Assuming 'EMPLASTWK_A' represents working last week, 'EMPNOWRK_A' represents temporarily absent last week, 'EMPWHYNOT_A' represents the main reason for not working last week
        // Skip logic can be implemented here if needed.
    }
];