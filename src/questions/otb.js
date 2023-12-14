export const otb = [
    {
        type: "radiogroup",
        name: "CIGAREV_A",
        title: "Have you ever smoked a regular cigar, cigarillo, or a little filtered cigar EVEN ONE TIME?",
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
        visibleIf: "true", // Adjust this condition based on your survey logic
        // Universe logic: Sample adults 18+
    },
    {
        type: "radiogroup",
        name: "CIGARCUR_A",
        title: "Do you NOW smoke regular cigars, cigarillos, or little filtered cigars every day, some days, or not at all?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Every day"
            },
            {
                value: 2,
                text: "Some days"
            },
            {
                value: 3,
                text: "Not at all"
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
        visibleIf: "{CIGAREV_A} == 1 && {AGE} >= 18", // Adjust this condition based on your survey logic
        // Universe logic: Sample adults 18+ who have ever smoked a regular cigar, cigarillo, or filtered cigar
    },
    {
        type: "text",
        name: "CIGAR30D_A",
        title: "On how many of the past 30 days have you smoked a regular cigar, cigarillo, or little filtered cigar?",
        isRequired: true,
        inputType: "number",
        autoComplete: "number",
        requiredErrorText: "Please enter a number between 0 and 30.",
        validators: [
            {
                type: "numeric",
                minValue: 0,
                maxValue: 30,
                text: "Please enter a valid number between 0 and 30."
            }
        ],
        visibleIf: "{CIGARCUR_A} >= 2", // Adjust this condition based on your survey logic
        // Universe logic: Sample adults 18+ who now smoke a regular cigar, cigarillo, or little filtered cigar some days or not at all
    },
    {
        type: "radiogroup",
        name: "PIPEEV_A",
        title: "Have you EVER smoked a pipe filled with tobacco - either a regular pipe, water pipe, or hookah EVEN ONE TIME?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: 1, text: "Yes" },
            { value: 2, text: "No" },
            { value: 7, text: "Refused" },
            { value: 9, text: "Don't Know" }
        ],
        // Universe logic: Sample adults 18+
    },
    {
        type: "radiogroup",
        name: "PIPECUR_A",
        title: "Do you NOW smoke pipes filled with tobacco - either regular pipes, water pipes, or hookahs, every day, some days, or not at all?",
        isRequired: true,
        colCount: 2,
        visibleIf: "{CIGAREV_A} == 1", // Replace with appropriate logic based on the 'CIGAREV_A' variable
        choices: [
            { value: 1, text: "Every day" },
            { value: 2, text: "Some days" },
            { value: 3, text: "Not at all" },
            { value: 7, text: "Refused" },
            { value: 9, text: "Don't Know" }
        ],
        // Universe logic: Sample adults 18+ who have ever smoked a regular pipe, water pipe, or hookah filled with tobacco
    },
    {
        type: "radiogroup",
        name: "SMOKELSEV_A",
        title: "Smokeless tobacco products are placed in the mouth or nose and can include chewing tobacco, snuff, dip, snus (SNOOSE), or dissolvable tobacco. Have you ever used smokeless tobacco products EVEN ONE TIME?",
        isRequired: true,
        colCount: 2,
        visibleIf: "{CIGAREV_A} == 1", // Replace with appropriate logic based on the 'CIGAREV_A' variable
        choices: [
            { value: 1, text: "Yes" },
            { value: 2, text: "No" },
            { value: 7, text: "Refused" },
            { value: 9, text: "Don't Know" }
        ],
        // Universe logic: Sample adults 18+
    },
    {
        type: "radiogroup",
        name: "SMOKELSCUR_A",
        title: "Do you NOW use smokeless tobacco products every day, some days, or not at all?",
        isRequired: true,
        colCount: 2,
        visibleIf: "{SMOKELSEV_A} == 1", // Replace with appropriate logic based on the 'SMOKELSEV_A' variable
        choices: [
            { value: 1, text: "Every day" },
            { value: 2, text: "Some days" },
            { value: 3, text: "Not at all" },
            { value: 7, text: "Refused" },
            { value: 9, text: "Don't Know" }
        ],
        // Universe logic: Sample adults 18+ who have ever used smokeless tobacco products
    },
];