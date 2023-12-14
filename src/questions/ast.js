export const ast = [
    {
        "type": "radiogroup",
        "name": "ASEV_A",
        "title": "Have you EVER been told by a doctor or other health professional that you had asthma?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "true", // Modify this based on your survey logic
        "hasOther": false // Change this if you need an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "EPHEV",
        "title": "Have you EVER been told by a doctor or other health professional that you had emphysema?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "true", // Modify this based on your survey logic
        "hasOther": false // Change this if you need an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ASTILL_A",
        "title": "Do you still have asthma?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{ASEV_A} == 1", // Modify this condition based on your survey logic
        "hasOther": false // Change this if you need an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ASAT12M_A",
        "title": "During the past 12 months, have you had an episode of asthma or an asthma attack?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{ASEV_A} == 1", // Modify this condition based on your survey logic
        "hasOther": false // Change this if you need an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ASER12M_A",
        "title": "During the past 12 months, have you had to visit an emergency room or urgent care center because of asthma?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{ASEV_A} == 1", // Modify this condition based on your survey logic
        "hasOther": false // Change this if you need an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ULCEV",
        "title": "Have you EVER been told by a doctor or other health professional that you had an ulcer (stomach, duodenal, or peptic ulcer)?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "true", // Modify this condition based on your survey logic
        "hasOther": false // Change this if you need an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ULCYR",
        "title": "DURING THE PAST 12 MONTHS, have you had an ulcer?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{ULCEV} == 1", // Change 'ULCEV' to the correct variable that signifies the presence of an ulcer
        "hasOther": false // Set to true if you want an "Other" option
    }       
]