export const aqs = [

    {
        type: "radiogroup",
        name: "HPTOB3_A",
        title: "In the past 12 months, has a medical doctor, dentist, or other health professional ADVISED you to quit smoking or to quit using other kinds of tobacco?",
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
        visibleIf: "true" // Assuming 'AGE' represents the age of the respondent
        // Universe logic for NHIS 'Sample Adults 18+' is applied through the 'visibleIf' condition based on age.
        // Skip logic can be added if needed.
        // ORIGINAL UNIVERSE LOGIC: Sample Adults 18+ who are current cigarette smokers OR 
        // former cigarette smokers who have quit in the past 12 months OR currently 
        // smokes ecigarettes, cigars, pipes, or uses smokeless tobacco every day or some days
    },
    {
        type: "radiogroup",
        name: "DRKLIFE_A",
        title: "In your ENTIRE LIFE, have you had at least 1 drink of any kind of alcohol, not counting small tastes or sips?",
        description: "Alcohol includes beer, wine, wine coolers, liquors such as vodka, whiskey or rum, mixed drinks or cocktails with alcohol, and any other type of alcoholic drink.",
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
        visibleIf: "true" // Assuming 'AGE' represents the age of the respondent
        // Universe logic for NHIS 'Sample Adults 18+' is applied through the 'visibleIf' condition based on age.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "DRK12MN_A",
        title: "During the past 12 months, how many days per week, per month, or per year did you drink any type of alcoholic beverage?",
        description: "Alcohol includes beer, wine, wine coolers, liquors such as vodka, whiskey or rum, mixed drinks or cocktails with alcohol, and any other type of alcoholic drink.",
        isRequired: true,
        placeHolder: "Enter the number of days (0-365)",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 365,
                text: "Please enter a number between 0 and 365."
            }
        ],
        requiredErrorText: "Please enter the number of days you consumed alcoholic beverages.",
        visibleIf: "{DRKLIFE_A} == '1'" // Assuming 'DRKLIFE_A' represents whether the respondent has ever had a drink of alcohol
        // Universe logic for NHIS 'Sample Adults 18+ who have had at least 1 drink in their entire life' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "radiogroup",
        name: "DRK12MTP_A",
        title: "Enter the time period for how often alcoholic beverages were consumed in the past year.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Per week"
            },
            {
                value: 2,
                text: "Per month"
            },
            {
                value: 3,
                text: "Per year"
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
        requiredErrorText: "Please select a time period.",
        visibleIf: "{DRK12MN_A} > 0" // Assuming 'DRK12MN_A' represents the number of days alcohol was consumed in the past 12 months
        // Universe logic for NHIS 'Sample Adults 18+ who gave a number for number of days drank per week/month/year' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "DRKAVG12M_A",
        title: "During the past 12 months, on those days that you drank alcoholic beverages, on average, how many DRINKS did you have?",
        description: "When counting number of drinks, one drink is equal to a 12-ounce beer, a 5-ounce glass of wine, or one shot or 1.5 ounces of liquor. A larger 40-ounce beer would count as 3 drinks, or a cocktail drink with 2 shots would count as 2 drinks.",
        isRequired: true,
        placeHolder: "Enter the number of drinks (01-95)",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 95,
                text: "Please enter a number between 01 and 95."
            }
        ],
        requiredErrorText: "Please enter the average number of drinks on drinking days.",
        visibleIf: "{DRKLIFE_A} == '1' || {DRK12MN_A} > 0" // Assuming 'DRKLIFE_A' represents whether the respondent has ever had a drink of alcohol and 'DRK12MN_A' represents the number of days alcohol was consumed in the past 12 months
        // Universe logic for NHIS 'Sample Adults 18+ who drank at least once in the past year or don't know' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "radiogroup",
        name: "DRK12ANYR_A",
        title: "In ANY ONE YEAR, have you had at least 12 drinks of any type of alcoholic beverage?",
        description: "One drink is equivalent to a 12-ounce beer, a 5-ounce glass of wine, or a drink with one shot (1.5 ounces) of liquor. A 40-ounce beer would count as 3 drinks or a cocktail drink with 2 shots would count as 2 drinks.",
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
        visibleIf: "{DRKLIFE_A} == '2'" // Assuming 'DRKLIFE_A' represents whether the respondent has ever had a drink of alcohol
        // Universe logic for NHIS 'Sample Adults 18+ who have not had a drink in the past 12 months' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "radiogroup",
        name: "DRKBNG12M_A",
        title: "During the past 12 months, did you ever have binge drinks in a day?",
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
        visibleIf: "(({DRKLIFE_A} == '1' && {DRKAVG12M_A} < 4) || ({DRKLIFE_A} == '2' && {DRKAVG12M_A} < 5) || {DRKLIFE_A} == '7' || {DRKLIFE_A} == '9')" 
        // Universe logic for NHIS 'Sample Adults 18+ who drank less than 4(female)/5(male, refused, don't know sex) drinks a day on average' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "radiogroup",
        name: "DRKANY30D_A",
        title: "During the past 30 days, did you have at least one drink of any type of alcoholic beverage?",
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
        visibleIf: "(({DRKLIFE_A} == '1' && {DRKAVG12M_A} >= 4) || ({DRKLIFE_A} == '2' && {DRKAVG12M_A} >= 5) || {DRKLIFE_A} == '7' || {DRKLIFE_A} == '9')"
        // Universe logic for NHIS 'Sample Adults 18+ who drank 4+(female)/5+(male, refused, don't know sex) drinks in a day in the last year or refused or don't know' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "DRKBNG30D_A",
        title: "During the past 30 days, how many times did you have ^BINGE drinks on an occasion?",
        description: "A drinking occasion is considered to be approximately two hours.",
        isRequired: true,
        placeHolder: "Enter the number of times (00-60)",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 60,
                text: "Please enter a number between 00 and 60."
            }
        ],
        requiredErrorText: "Please enter the number of times you had binge drinks in the past 30 days.",
        visibleIf: "(({DRKLIFE_A} == '1' || {DRKANY30D_A} == '1') || {DRKLIFE_A} == '7' || {DRKLIFE_A} == '9')" 
        // Universe logic for NHIS 'Sample Adults 18+ who drank in the past 30 days or refused or don't know' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    },
    {
        type: "radiogroup",
        name: "DRKADVISE1_A",
        title: "During the past 12 months, has a doctor, dentist, or other health professional ADVISED you to stop or cut down on your drinking?",
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
        visibleIf: "{DRKANY30D_A} == '1'" // Assuming 'DRKANY30D_A' represents whether the respondent had at least one drink of alcohol in the past 12 months
        // Universe logic for NHIS 'Sample Adults 18+ who have had 1 or more drinks in the past 12 months' is applied through the 'visibleIf' condition.
        // Skip logic can be added if needed.
    }
];