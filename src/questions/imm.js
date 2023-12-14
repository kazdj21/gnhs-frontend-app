export const imm = [

    {
        type: "radiogroup",
        name: "SHTFLU12M_C",
        title: "During the past 12 months, has your child had a flu vaccination?",
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
        visibleIf: "true" // Assuming 'AGE' is a variable representing the age of the child
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SHTFLUNUM_C",
        title: "During the past 12 months, how many flu vaccinations has your child received?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "1 vaccination"
            },
            {
                value: 2,
                text: "2 or more vaccinations"
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
        visibleIf: "{SHTFLU12M_C} == 1" // Assuming 'SHTFLU12M_C' represents having had a flu shot and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "dropdown",
        name: "FLUVAC1M_C",
        title: "During what month and year did ^SCNAME receive ^hisher_C most recent flu vaccine? (Enter month)",
        isRequired: true,
        choices: [
            {
                value: "01",
                text: "January"
            },
            {
                value: "02",
                text: "February"
            },
            {
                value: "03",
                text: "March"
            },
            {
                value: "04",
                text: "April"
            },
            {
                value: "05",
                text: "May"
            },
            {
                value: "06",
                text: "June"
            },
            {
                value: "07",
                text: "July"
            },
            {
                value: "08",
                text: "August"
            },
            {
                value: "09",
                text: "September"
            },
            {
                value: "10",
                text: "October"
            },
            {
                value: "11",
                text: "November"
            },
            {
                value: "12",
                text: "December"
            },
            {
                value: "97",
                text: "Refused"
            },
            {
                value: "99",
                text: "Don't Know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select a month.",
        visibleIf: "{SHTFLU12M_C} >= 1" // Assuming 'SHTFLU12M_C' represents having had a flu shot and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "FLUVAC1Y_C",
        title: "Enter the year of your child's most recent flu vaccine",
        inputType: "number",
        isRequired: false,
        validators: [
            {
                type: "numeric",
                minValue: 2000,
                maxValue: 2030,
                allowDigits: true,
                text: "Please enter a valid year between 2000 and 2030."
            }
        ],
        requiredErrorText: "Please enter the year of the flu vaccine.",
        visibleIf: "{SHTFLU12M_C} >= 1 && {FLUVAC1M_C} != '99' && {FLUVAC1M_C} != '97'" // Assuming 'SHTFLU12M_C' represents having had a flu shot, 'FLUVAC1M_C' represents the month of the flu shot, and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "dropdown",
        name: "FLUVAC2M_C",
        title: "During what month and year did ^SCNAME receive the flu vaccine before that one? (Enter month)",
        isRequired: true,
        choices: [
            {
                value: "01",
                text: "January"
            },
            {
                value: "02",
                text: "February"
            },
            {
                value: "03",
                text: "March"
            },
            {
                value: "04",
                text: "April"
            },
            {
                value: "05",
                text: "May"
            },
            {
                value: "06",
                text: "June"
            },
            {
                value: "07",
                text: "July"
            },
            {
                value: "08",
                text: "August"
            },
            {
                value: "09",
                text: "September"
            },
            {
                value: "10",
                text: "October"
            },
            {
                value: "11",
                text: "November"
            },
            {
                value: "12",
                text: "December"
            },
            {
                value: "97",
                text: "Refused"
            },
            {
                value: "99",
                text: "Don't Know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select a month.",
        visibleIf: "{SHTFLUNUM_C} >= 2" // Assuming 'SHTFLUNUM_C' represents having had two or more flu shots and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "FLUVAC2Y_C",
        title: "Enter the year of your child's next most recent flu vaccine",
        inputType: "number",
        isRequired: true,
        validators: [
            {
                type: "numeric",
                minValue: 2000,
                maxValue: 2030,
                allowDigits: true,
                text: "Please enter a valid year between 2000 and 2030."
            }
        ],
        requiredErrorText: "Please enter the year of the flu vaccine.",
        visibleIf: "{SHTFLUNUM_C} >= 2 && {FLUVAC2M_C} != '99' && {FLUVAC2M_C} != '97'" // Assuming 'SHTFLUNUM_C' represents having had two or more flu shots, 'FLUVAC2M_C' represents the month of the second flu shot, and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    

];