export const fem = [
    {
        type: "radiogroup",
        name: "FEMWORK_C",
        title: "Do you work for pay at a job or business?",
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
        name: "FEMWKFT_C",
        title: "Do you usually work 35 hours or more per week in total at at your job or jobs?",
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
        visibleIf: "{FEMWORK_C} == 1" // Assuming 'ADLT18_A' represents adults over 18 years in Sample Child's family and 'FEMWORK_C' represents whether the respondent works for pay at a job or business
        // Skip logic can be implemented here if needed.
    },
    
];