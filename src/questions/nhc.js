export const nhc = [

    {
        type: "radiogroup",
        name: "SIDEWALK_C",
        title: "Where your child lives, are there roads, sidewalks, paths, or trails where they can walk or ride a bicycle?",
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
        visibleIf: "true" // Assuming 'AGEC' represents the age of the child being surveyed
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "PARKS_C",
        title: "Are there parks or playgrounds close enough for your child to walk or bike to?",
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
        visibleIf: "true" // Assuming 'AGEC' represents the age of the child being surveyed
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "TRAFFIC_C",
        title: "Does traffic make it unsafe for your child to walk or ride a bicycle, even with an adult?",
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
        visibleIf: "{AGEC} >= 6 && {AGEC} <= 17" // Assuming 'AGEC' represents the age of the child being surveyed
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "CRIME_C",
        title: "Does crime make it unsafe for your child to walk or ride a bicycle, even with an adult?",
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
        visibleIf: "true" // Assuming 'AGEC' represents the age of the child being surveyed
        // Skip logic can be implemented here if needed based on specific criteria
    }

];