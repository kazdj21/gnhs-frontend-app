export const vet = [
    {
        type: "radiogroup",
        name: "AFVET_A",
        title: "Did you ever serve on active duty in the U.S. Armed Forces, military Reserves, or National Guard?",
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
        visibleIf: true // Setting to true for Sample Adults 18+ universe
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "AFVETTRN_A",
        title: "Were you on active duty ONLY for training in the Reserves or National Guard?",
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
        visibleIf: "{AFVET_A} == '1'" // Universe logic: Based on having ever served in the armed forces
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "COMBAT_A",
        title: "Did you ever serve in a foreign country during a time of armed conflict or on a humanitarian or peace-keeping mission?",
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
        visibleIf: "{AFVET_A} == '1' && {AFVETTRN_A} != '1'" // Universe logic: Based on having served in the armed forces and not only activated for training in Reserves or National Guard
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "VADISB_A",
        title: "Do you have a VA service-connected disability rating?",
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
        visibleIf: "{AFVET_A} == '1'" // Universe logic: Based on having served in the armed forces
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "VAHOSP_A",
        title: "During the past 12 months, did you receive any care at a Veteran's Health Administration facility or receive any other health care paid for by the VA?",
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
        visibleIf: "{AFVET_A} == '1'" // Universe logic: Based on having served in the armed forces
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "VACAREEV_A",
        title: "Have you ever enrolled in or used VA health care?",
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
        visibleIf: "{AFVET_A} == '1' && {VAHOSP_A} != '1'" // Universe logic: Based on having served in the armed forces and not receiving care at a VHA facility or other health care paid for by the VA in the past 12 months
        // Skip logic can be implemented here if needed.
    },
    
];