export const sch = [

    {
        type: "radiogroup",
        name: "SCHCURENR_A",
        title: "Are you currently enrolled in or attending school?",
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

];