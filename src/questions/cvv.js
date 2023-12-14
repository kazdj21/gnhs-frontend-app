export const cvv = [

    {
        type: "radiogroup",
        name: "SHTCVD191_C",
        title: "Has your child had at least one dose of a COVID-19 vaccination?",
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
        visibleIf: "true" // Assuming 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SHTCVD19NM_C",
        title: "How many COVID-19 vaccinations has your child received?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "1 vaccination"
            },
            {
                value: 2,
                text: "2 vaccinations"
            },
            {
                value: 3,
                text: "3 vaccinations"
            },
            {
                value: 4,
                text: "4 or more vaccinations"
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
        visibleIf: "{SHTCVD191_C} == 1" // Assuming 'SHTCVD191_C' represents having received at least one COVID-19 vaccination and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "dropdown",
        name: "CVDVAC1M_C",
        title: "During what month and year did your child receive the most recent COVID-19 vaccination? (Enter month)",
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
        visibleIf: "{SHTCVD191_C} >= 1" // Assuming 'SHTCVD191_C' represents having had one or more COVID-19 vaccinations and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "CVDVAC1Y_C",
        title: "Enter the year of your child's most recent COVID-19 vaccination",
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
        requiredErrorText: "Please enter the year of the COVID-19 vaccination.",
        visibleIf: "{SHTCVD191_C} >= 1 && {CVDVAC1M_C} != '99' && {CVDVAC1M_C} != '97'" // Assuming 'SHTCVD191_C' represents having had at least one COVID-19 vaccination, 'CVDVAC1M_C' represents the month of the COVID-19 vaccination, and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "dropdown",
        name: "CVDVAC2M_C",
        title: "During what month and year did your child receive ^hisher_C next most recent COVID-19 vaccination? (Enter month)",
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
        visibleIf: "{SHTCVD19NM_C} >= 2" // Assuming 'SHTCVD19NM_C' represents having had two or more COVID-19 vaccinations and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "CVDVAC2Y_C",
        title: "Enter the year of your child's next most recent COVID-19 vaccination",
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
        requiredErrorText: "Please enter the year of the COVID-19 vaccination.",
        visibleIf: "{SHTCVD19NM_C} >= 2 && {CVDVAC2M_C} != '99' && {CVDVAC2M_C} != '97'" // Assuming 'SHTCVD19NM_C' represents having had two or more COVID-19 vaccinations, 'CVDVAC2M_C' represents the month of the second COVID-19 vaccination, and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SHOTTYPE_C",
        title: "Which first shot brand of COVID-19 vaccine did your child receive?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Pfizer-Biontech Comirnaty shot"
            },
            {
                value: 2,
                text: "Moderna shot"
            },
            {
                value: 3,
                text: "Johnson and Johnson (Janssen) shot"
            },
            {
                value: 4,
                text: "One of the brands that requires two initial shots, but not sure which brand"
            },
            {
                value: 5,
                text: "None of these brands"
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
        visibleIf: "{SHTCVD191_C} >= 1" // Assuming 'SHTCVD191_C' represents having had at least one COVID-19 vaccination and 'AGE' represents the child's age
        // Skip logic can be implemented here if needed.
    }

];