export const chl = [
    {
        "type": "radiogroup",
        "name": "CHLEV_A",
        "title": "Have you EVER been told by a doctor or other health professional that you had high cholesterol?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "CHL12M_A",
        "title": "During the past 12 months, have you had high cholesterol?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{CHLEV_A} == 1", // Condition based on previous question (CHLEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "CLCKNO",
        "title": "About how long has it been since you had your blood cholesterol checked by a doctor, nurse, or other health professional?",
        "isRequired": true,
        "choices": [
          { "value": 0, "text": "Never" },
          { "value": 95, "text": "95 or more" },
          { "value": 97, "text": "Refused" },
          { "value": 99, "text": "Don't know" }
        ],
        "visibleIf": "{CHLEV_A} == 1", // Condition based on previous question (CHLEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "CLCKTP",
        "title": "Enter time period for time since last blood cholesterol check.",
        "isRequired": true,
        "choices": [
          { "value": 0, "text": "Never" },
          { "value": 1, "text": "Day(s)" },
          { "value": 2, "text": "Week(s)" },
          { "value": 3, "text": "Month(s)" },
          { "value": 4, "text": "Year(s)" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{CLCKNO} > 1", // Original: {CLCKNO} > {AGE} and {CLCKTP} == 4
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "CHLMDEV2",
        "title": "Was any medication EVER prescribed by a doctor to help lower your cholesterol?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{CHLEV_A} == 1", // Condition based on previous question (CHLEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "CHLMED_A",
        "title": "Are you NOW taking any medication prescribed by a doctor to help lower your cholesterol?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{CHLEV_A} == 1", // Condition based on previous question (CHLEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    }
            
]