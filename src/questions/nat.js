export const nat = [
    {
        type: "radiogroup",
        name: "NATUSBORN_A",
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
        visibleIf: "true" // Universe logic: All Sample Adults 18+
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "NATSTBORN_A",
        title: "In what state or U.S. territory were you born?",
        isRequired: true,
        requiredErrorText: "Please enter your birth state or U.S. territory.",
        maxLength: 100,
        inputType: "text",
        visibleIf: "NATUSBORN_A == 1" // Assuming 'NATUSBORN_A' is the variable for being born in the United States or U.S. territory
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "NATUSYR_A",
        title: "In what year did you come to Guam to stay?",
        isRequired: true,
        inputType: "number",
        min: 1900,
        max: 2030,
        requiredErrorText: "Please enter the year you came to Guam to stay.",
        visibleIf: "NATUSBORN_A != 1" // Assuming 'NATUSBORN_A' is the variable for being born in the United States or U.S. territory
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "CITIZEN_A",
        title: "Are you a citizen of the United States?",
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
        visibleIf: "NATUSBORN_A != 1" // Assuming 'NATUSBORN_A' is the variable for being born in the United States or U.S. territory or born in American Samoa
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "NATCTZN_A",
        title: "Were you born abroad to an American parent, born abroad and adopted by an American parent, or did you become a U.S. citizen by naturalization?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Born abroad to American parent"
            },
            {
                value: 2,
                text: "Born abroad and adopted by an American parent"
            },
            {
                value: 3,
                text: "Became U.S. citizen by naturalization"
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
        visibleIf: "NATUSBORN_A != 1" // Assuming 'NATUSBORN_A' is the variable for being born in the United States or a U.S. territory or born in American Samoa but are U.S. citizens
        // Skip logic can be implemented here if needed.
    }
];