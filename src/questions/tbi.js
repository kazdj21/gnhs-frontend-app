export const tbi = [

    {
        type: "radiogroup",
        name: "TBILOSTCON_C",
        title: "As a result of a blow or jolt to the head, has your child ever been knocked out or lost consciousness?",
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
        name: "TBIDAZED_C",
        title: "As a result of a blow or jolt to the head, has your child ever been dazed or had a gap in their memory?",
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
        visibleIf: "({TBILOSTCON_C} != 1 && {TBILOSTCON_C} != 7 && {TBILOSTCON_C} != 9)" 
        // Assuming 'AGEC' represents the age of the child being surveyed,
        // 'TBILOSTCON_C' represents the previous question regarding loss of consciousness
        // Skip logic based on the condition that the child did not report being knocked out due to a blow or jolt to the head or refused or didn't know
    },
    {
        type: "radiogroup",
        name: "TBIHEADSYM_C",
        title: "As a result of a blow or jolt to the head, has your child had headaches, vomiting, blurred vision, or changes in mood or behavior?",
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
        visibleIf: "({TBILOSTCON_C} != 1 && {TBILOSTCON_C} != 7 && {TBILOSTCON_C} != 9)"
        // Assuming 'AGEC' represents the age of the child being surveyed,
        // 'TBILOSTCON_C' represents the previous question regarding loss of consciousness
        // Skip logic based on the condition that the child did not report being knocked out due to a blow or jolt to the head or refused or didn't know
    },
    {
        type: "radiogroup",
        name: "TBICHKCONC_C",
        title: "Has your child ever been checked for a concussion or brain injury by a doctor, nurse, athletic trainer, or other health professional?",
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
        name: "TBIDRCONC_C",
        title: "Did a doctor, nurse, athletic trainer, or other health professional ever say that your child had a concussion or brain injury?",
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
        visibleIf: "({TBICHKCONC_C} == 1 || {TBICHKCONC_C} == 9)" 
        // Assuming 'AGEC' represents the age of the child being surveyed
        // 'TBICHKCONC_C' represents the previous question regarding being checked for a concussion
        // Skip logic based on the condition that the child has ever been checked for a concussion or doesn't know about it
    },
    

];