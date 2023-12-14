export const sle = [

    {
        type: "radiogroup",
        name: "VIOLENEV_C",
        title: "Has your child ever been the victim of violence or witnessed violence in ^hisher_C neighborhood?",
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
        visibleIf: "true" // Assuming 'AGEC' represents age of the child being surveyed
        // Skip logic can be implemented here if needed based on the age of the child or other conditions
    },
    {
        type: "radiogroup",
        name: "JAILEV1_C",
        title: "Has your child ever been separated from a parent or guardian because the parent or guardian went to jail, prison, or a detention center?",
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
        visibleIf: "true" // Assuming no specific condition other than the general universe logic of Sample Children 0-17
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "MENTDEPEV_C",
        title: "Did your child ever live with anyone who was mentally ill or severely depressed?",
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
        visibleIf: "true" // Assuming no specific condition other than the general universe logic of Sample Children 0-17
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "ALCDRUGEV_C",
        title: "Did your child ever live with anyone who was dependent on alcohol or drugs?",
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
        visibleIf: "true" // Assuming no specific condition other than the general universe logic of Sample Children 0-17
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "PUTDOWN_C",
        title: "Has your child ever lived with a parent or adult who frequently swore at them, insulted them, or put them down?",
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
        visibleIf: "true" // Assuming no specific condition other than the general universe logic of Sample Children 0-17
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "BNEEDS_C",
        title: "Has there ever been a time when your child's basic needs were NOT met, such as having enough to eat, being able to go to a doctor when they were sick, or having a safe place to stay?",
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
        visibleIf: "true" // Assuming no specific condition other than the general universe logic of Sample Children 0-17
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "UNFAIRRE_C",
        title: "Has anyone ever treated or judged your child unfairly because of their race or ethnic group?",
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
        visibleIf: "true" // Assuming no specific condition other than the general universe logic of Sample Children 0-17
        // Skip logic can be implemented here if needed based on specific criteria
    },
    {
        type: "radiogroup",
        name: "UNFAIRSO_C",
        title: "Has anyone ever treated or judged your child unfairly because of their sexual orientation or gender identity?",
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