export const gni = [

    {
        type: "radiogroup",
        name: "ASAB1_A",
        title: "What sex were you assigned at birth, on your original birth certificate?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Male"
            },
            {
                value: 2,
                text: "Female"
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
    },
    {
        type: "radiogroup",
        name: "GENDER1_A",
        title: "Do you currently describe yourself as a man, as a woman, or in some other way?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Man"
            },
            {
                value: 2,
                text: "Woman"
            },
            {
                value: 3,
                text: "Some other way"
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent, and 'GNIPATH_FLG' is a flag indicating certain criteria for the sample
        // Universe logic for Sample Adults 18+ where GNIPATH_FLG is set to 1 or 2 is applied using the visibleIf condition.
    },
    {
        type: "text",
        name: "GENDSPEC1_A",
        title: "How would you describe yourself?",
        isRequired: true,
        requiredErrorText: "Please provide a description.",
        visibleIf: "{GENDER1_A} == '3'", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "GENDER2_A",
        title: "Do you currently describe yourself as male, female, or transgender?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Male"
            },
            {
                value: 2,
                text: "Female"
            },
            {
                value: 3,
                text: "Transgender"
            },
            {
                value: 4,
                text: "None of these"
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
    },
    {
        type: "text",
        name: "GENDSPEC2_A",
        title: "How would you describe yourself?",
        isRequired: true,
        requiredErrorText: "Please provide a description.",
        visibleIf: "{GENDER2_A} == 4", // Assuming 'AGE_A' represents the age of the respondent and 'GENDER2_A' refers to the question where the respondent answered "None of these" for gender identification
        // Universe logic for Sample Adults 18+ who answered that they identify their gender as none of the options is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "ASAB2_A",
        title: "What sex were you assigned at birth, on your original birth certificate?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Male"
            },
            {
                value: 2,
                text: "Female"
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
    },
    
];