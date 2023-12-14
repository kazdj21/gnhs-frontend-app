export const tbh = [
    {
        type: "radiogroup",
        name: "TRANSPOR_A",
        title: "In the past 12 months, has a lack of reliable transportation kept you from medical appointments, meetings, work, or from getting things you needed for daily living?",
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
    
];