export const scr = [

    {
        type: "radiogroup",
        name: "SCREENTIME_C",
        title: "On most weekdays, does your child spend more than 2 hours a day in front of a TV, computer, cellphone, or other electronic device for watching programs, playing games, accessing the internet, or using social media (excluding school work)?",
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