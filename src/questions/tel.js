export const tel = [

    {
        type: "radiogroup",
        name: "TELCURWRK_A",
        title: "Is there at least one telephone INSIDE your home that is currently working and is not a cell phone?",
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
        name: "TELCEL_A",
        title: "Do you have a working cell phone?",
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
        name: "PHONELIVE_A",
        title: "Do you live with anyone at home who has a working cell phone?",
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
        name: "PHONEUSE_A",
        title: "Of all the telephone calls that you answer...",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "All or almost all calls on cell phone"
            },
            {
                value: 2,
                text: "Some on cell phone and some on home phone"
            },
            {
                value: 3,
                text: "Very few or none on cell phone"
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
        visibleIf: "{TELCEL_A} == 1 || {TELCURWRK_A} == 1" // Assuming TELCEL_A and TELCURWRK_A represent having a working personal cell phone and a working landline in the household respectively
        // Skip logic can be implemented here if needed.
    },
    

];