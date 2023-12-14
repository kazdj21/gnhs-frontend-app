export const dld = [

    {
        type: "radiogroup",
        name: "ADHDEV_C",
        title: "Has a doctor or other health professional ever told you that your child had Attention-Deficit/Hyperactivity Disorder (ADHD) or Attention-Deficit Disorder (ADD)?",
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
        name: "ADHDNW_C",
        title: "Does your child currently have Attention-Deficit/Hyperactivity Disorder (ADHD) or Attention-Deficit Disorder (ADD)?",
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
        visibleIf: "{ADHDEV_C} == 1" // Assuming ADHDEV_C represents the previous ADHD diagnosis
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "IDEV1_C",
        title: "Has a doctor or other health professional ever told you that your child had an intellectual disability?",
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
        name: "IDNW1_C",
        title: "Does your child currently have an intellectual disability?",
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
        visibleIf: "{IDEV1_C} == 1" // Assuming IDEV1_C represents the previous intellectual disability diagnosis
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "ASDEV_C",
        title: "Has a doctor or other health professional ever told you that your child had Autism, Asperger's disorder, pervasive developmental disorder, or autism spectrum disorder?",
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
        name: "ASDNW_C",
        title: "Does [CHILD'S NAME] currently have Autism, Asperger's disorder, pervasive developmental disorder, or autism spectrum disorder?",
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
        visibleIf: "{ASDEV_C} == 1" // Assuming ASDEV_C represents the previous autism spectrum disorder diagnosis
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "DDEV_C",
        title: "Has a doctor or other health professional ever told you that [CHILD'S NAME] had any other developmental delay?",
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
        name: "DDNW_C",
        title: "Does your child still have this other developmental delay?",
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
        visibleIf: "{DDEV_C} == 1" // Assuming DDEV_C represents the previous developmental delay diagnosis
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "LDEV_C",
        title: "Has a representative from a school or a health professional ever told you that [CHILD'S NAME] had a learning disability?",
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
        name: "LDNW_C",
        title: "Does [CHILD'S NAME] currently have a learning disability?",
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
        visibleIf: "{DDEV_C} == 1 || {DDNW_C} == 1 || {LDEV_C} == 1" // Assuming DDEV_C, DDNW_C, LDEV_C represent previous diagnoses
        // Skip logic can be implemented here if needed.
    }

];