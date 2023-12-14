export const bmi = [
    {
        type: "radiogroup",
        name: "PREGNOW_A",
        title: "Are you currently pregnant?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Assuming respondents are female adults aged 18 to 49
        // !!!!!!!!!!!!!!!! KAZ IMPLEMENT FEMALE ONLY CONDITION HERE
    },
    {
        type: "dropdown",
        name: "HEIGHTFT_A",
        title: "How tall are you without shoes?",
        isRequired: true,
        colCount: 0,
        choices: [
            { value: "02", text: "2 feet" },
            { value: "03", text: "3 feet" },
            { value: "04", text: "4 feet" },
            { value: "05", text: "5 feet" },
            { value: "06", text: "6 feet" },
            { value: "07", text: "7 feet" },
            { value: "M", text: "Answered in Metric" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "true", // Assuming respondents are adults (18+)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "dropdown",
        name: "HEIGHTIN_A",
        title: "Enter inches. (based from previous height question)",
        isRequired: true,
        colCount: 0,
        choices: [
            { value: "00", text: "0 inches" },
            { value: "01", text: "1 inch" },
            { value: "02", text: "2 inches" },
            { value: "03", text: "3 inches" },
            { value: "04", text: "4 inches" },
            { value: "05", text: "5 inches" },
            { value: "06", text: "6 inches" },
            { value: "07", text: "7 inches" },
            { value: "08", text: "8 inches" },
            { value: "09", text: "9 inches" },
            { value: "10", text: "10 inches" },
            { value: "11", text: "11 inches" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "{HEIGHTFT_A} != 'M' && {HEIGHTFT_A} != '97' && {HEIGHTFT_A} != '99' && {age} >= 18", // Assuming respondents are adults (18+) and height in feet is provided
        // Skip logic can be implemented here if needed.
    },
    {
        type: "dropdown",
        name: "HEIGHTM_A",
        title: "Enter height in metric.",
        isRequired: true,
        colCount: 0,
        choices: [
            { value: "0", text: "0 meters" },
            { value: "1", text: "1 meter" },
            { value: "2", text: "2 meters" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HEIGHTFT_A} == 'M'", // Assuming respondents are adults (18+) and have chosen metric units for height
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        inputType: "number",
        name: "HEIGHTCM_A",
        title: "Enter centimeters.",
        isRequired: true,
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 241,
                text: "Please enter a valid height between 0 and 241 centimeters."
            }
        ],
        visibleIf: "{HEIGHTFT_A} == 'M'", // Assuming respondents are adults (18+) and have chosen metric units for height
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "WEIGHTLB_A",
        title: "Enter weight in pounds or 'M' for metric.",
        isRequired: true,
        validators: [
            {
                type: "expression",
                expression: "({value} === 'M') || (parseFloat({value}) >= 50 && parseFloat({value}) <= 500)",
                text: "Please enter a valid weight between 50 and 500 pounds or 'M' for metric."
            }
        ],
        visibleIf: "{PREGNOW_A} != '1'", // Assuming respondents are adults (18+) and not pregnant
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "WEIGHTKG_A",
        title: "Enter weight in kilograms.",
        isRequired: true,
        validators: [
            {
                type: "expression",
                expression: "parseFloat({value}) >= 23 && parseFloat({value}) <= 226",
                text: "Please enter a valid weight between 23 and 226 kilograms."
            }
        ],
        visibleIf: "{WEIGHTLB_A} == 'M' && {PREGNOW_A} != '1'", // Assuming respondents are adults (18+) and not pregnant and provided weight in metric
        // Skip logic can be implemented here if needed.
    }
];