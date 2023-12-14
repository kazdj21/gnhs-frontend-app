export const orn = [
    {
        type: "radiogroup",
        name: "ORIENT_A",
        title: "Do you think of yourself as gay/lesbian; straight, that is, not gay/lesbian; bisexual; something else; or you don't know the answer?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Gay/Lesbian"
            },
            {
                value: 2,
                text: "Straight"
            },
            {
                value: 3,
                text: "Bisexual"
            },
            {
                value: 4,
                text: "Something else"
            },
            {
                value: 5,
                text: "I don't know the answer"
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    }
];