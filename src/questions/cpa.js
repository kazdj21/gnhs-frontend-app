export const cpa = [
    {
        type: "radiogroup",
        name: "ADVACTIVE_A",
        title: "During the past 12 months, has a doctor or other health professional ADVISED you to increase the amount of physical activity or exercise you get?",
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
        requiredErrorText: "Please indicate if a health professional advised you to increase physical activity or exercise in the past 12 months.",
        visibleIf: true // Assuming this question is relevant and visible to all Sample Adults 18+
        // Universe logic for NHIS 'Sample Adults 18+' is set to true to make the question visible for all in this demographic.
        // You might need to add skip logic or adjust the visibility conditions based on your specific survey criteria.
    },
    
];