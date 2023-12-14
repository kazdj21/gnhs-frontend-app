export const sdq = [

    {
        type: "radiogroup",
        name: "SDQ1_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is considerate of other people's feelings?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true" // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SDQ2_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is restless, overactive, cannot stay still for long?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
    },
    {
        type: "radiogroup",
        name: "SDQ3_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child often complains of headaches, stomach-aches, or sickness?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here as required for your survey flow
    },
    {
        type: "radiogroup",
        name: "SDQ4_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child shares readily with other toys/games?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here as needed for your survey flow
    },
    {
        type: "radiogroup",
        name: "SDQ5_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child often loses their temper?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ6_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is rather solitary, prefers to play alone/would rather be alone than with other youth?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ7_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is generally well behaved, usually does what adults request?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ8_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child has many worries or often seems worried?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ9_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is helpful if someone is hurt, upset, or feeling ill?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ10_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is constantly fidgeting or squirming?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ11_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child has at least one good friend?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ12_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child often fights with other children or bullies them?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ13_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is often unhappy, depressed, or tearful?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ14_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is generally liked by other children?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ15_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is easily distracted, Their concentration wanders?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ16_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is nervous clingy in new situations, They easily lose confidence?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ17_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is kind to younger children?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ18_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child often lies or cheats?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ19_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child is picked on or bullied by other children?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ20_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child often offers to help others, such as parents, teachers, and other children?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ21_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child thinks things out before acting?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ22_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child steals from home, school, or elsewhere?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ23_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child gets along better with adults than with other ^childyouth?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQ25_C",
        title: "During the past six months, has it been NOT TRUE, SOMEWHAT TRUE, or CERTAINLY TRUE that your child has a good attention span, sees work through to the end?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not true"
            },
            {
                value: 2,
                text: "Somewhat true"
            },
            {
                value: 3,
                text: "Certainly true"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP1_C",
        title: "Overall, do you think that ^SCNAME has difficulties in one or more of the following areas: emotions, concentration, behavior, or being able to get along with other people? Would you say no difficulties, minor difficulties, definite difficulties, or severe difficulties?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "No - no difficulties"
            },
            {
                value: 2,
                text: "Yes - minor difficulties"
            },
            {
                value: 3,
                text: "Yes - definite difficulties"
            },
            {
                value: 4,
                text: "Yes - severe difficulties"
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
        // Universe logic for Sample Children 4-17
        visibleIf: "true", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP2_C",
        title: "How long have these difficulties been present? Would you say less than a month, 1-5 months, 6-12 months, or over a year?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Less than a month"
            },
            {
                value: 2,
                text: "1-5 months"
            },
            {
                value: 3,
                text: "6-12 months"
            },
            {
                value: 4,
                text: "Over a year"
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
        // Universe logic for Sample Children 4-17 who have had minor, definite, or severe difficulties with emotions, concentration, behavior, or getting along with other people
        visibleIf: "(({SDQIMP1_C} == 2) || ({SDQIMP1_C} == 3) || ({SDQIMP1_C} == 4)) && ({AGE} >= 4 && {AGE} <= 17)", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP3_C",
        title: "Do the difficulties upset or distress with your child? Would you say not at all, only a little, a medium amount, or a great deal?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not at all"
            },
            {
                value: 2,
                text: "Only a little"
            },
            {
                value: 3,
                text: "A medium amount"
            },
            {
                value: 4,
                text: "A great deal"
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
        // Universe logic for Sample Children 4-17 who have had minor, definite, or severe difficulties with emotions, concentration, behavior, or getting along with other people
        visibleIf: "(({SDQIMP1_C} == 2) || ({SDQIMP1_C} == 3) || ({SDQIMP1_C} == 4)))", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP4_C",
        title: "Do the difficulties interfere with your child's home life? Would you say not at all, only a little, a medium amount, or a great deal?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not at all"
            },
            {
                value: 2,
                text: "Only a little"
            },
            {
                value: 3,
                text: "A medium amount"
            },
            {
                value: 4,
                text: "A great deal"
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
        // Universe logic for Sample Children 4-17 who have had minor, definite, or severe difficulties with emotions, concentration, behavior, or getting along with other people
        visibleIf: "(({SDQIMP1_C} == 2) || ({SDQIMP1_C} == 3) || ({SDQIMP1_C} == 4))", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP5_C",
        title: "Do the difficulties interfere with ^SCNAME's friendships? Would you say not at all, only a little, a medium amount, or a great deal?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not at all"
            },
            {
                value: 2,
                text: "Only a little"
            },
            {
                value: 3,
                text: "A medium amount"
            },
            {
                value: 4,
                text: "A great deal"
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
        // Universe logic for Sample Children 4-17 who have had minor, definite, or severe difficulties with emotions, concentration, behavior, or getting along with other people
        visibleIf: "(({SDQIMP1_C} == 2) || ({SDQIMP1_C} == 3) || ({SDQIMP1_C} == 4))", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP6_C",
        title: "Do the difficulties interfere with your child's classroom learning? Would you say not at all, only a little, a medium amount, or a great deal?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not at all"
            },
            {
                value: 2,
                text: "Only a little"
            },
            {
                value: 3,
                text: "A medium amount"
            },
            {
                value: 4,
                text: "A great deal"
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
        // Universe logic for Sample Children 4-17 who have had minor, definite, or severe difficulties with emotions, concentration, behavior, or getting along with other people
        visibleIf: "(({SDQIMP1_C} == 2) || ({SDQIMP1_C} == 3) || ({SDQIMP1_C} == 4))", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP7_C",
        title: "Do the difficulties interfere with your child's leisure activities? Would you say not at all, only a little, a medium amount, or a great deal?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not at all"
            },
            {
                value: 2,
                text: "Only a little"
            },
            {
                value: 3,
                text: "A medium amount"
            },
            {
                value: 4,
                text: "A great deal"
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
        // Universe logic for Sample Children 4-17 who have had minor, definite, or severe difficulties with emotions, concentration, behavior, or getting along with other people
        visibleIf: "(({SDQIMP1_C} == 2) || ({SDQIMP1_C} == 3) || ({SDQIMP1_C} == 4))", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    {
        type: "radiogroup",
        name: "SDQIMP8_C",
        title: "Do the difficulties put a burden on you or the family as a whole? Would you say not at all, only a little, a medium amount, or a great deal?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Not at all"
            },
            {
                value: 2,
                text: "Only a little"
            },
            {
                value: 3,
                text: "A medium amount"
            },
            {
                value: 4,
                text: "A great deal"
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
        // Universe logic for Sample Children 4-17 who have had minor, definite, or severe difficulties with emotions, concentration, behavior, or getting along with other people
        visibleIf: "(({SDQIMP1_C} == 2) || ({SDQIMP1_C} == 3) || ({SDQIMP1_C} == 4)) && ({AGE} >= 4 && {AGE} <= 17)", // Replace {AGE} with the Survey.js variable representing age
        // Skip logic can be added here based on your survey flow requirements
    },
    

];