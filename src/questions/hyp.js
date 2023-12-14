export const hyp = [
    {
        "type": "radiogroup",
        "name": "HYPEV_A",
        "title": "Have you EVER been told by a doctor or other health professional that you had hypertension, also called high blood pressure?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
      },
      {
        "type": "radiogroup",
        "name": "HYPDIF_A",
        "title": "Were you told on two or more DIFFERENT visits that you had hypertension or high blood pressure?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{HYPEV_A} == 1", // Condition based on the answer to the previous question (HYPEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
      },
      {
        "type": "radiogroup",
        "name": "HYP12M_A",
        "title": "During the past 12 months, have you had hypertension or high blood pressure?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{HYPEV_A} == 1 and {HYPDIF_A} == 1", // Conditions based on the previous questions (HYPEV_A and HYPDIF_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
      },
      {
        "type": "radiogroup",
        "name": "HYBPCKNO",
        "title": "About how long has it been since you had your blood pressure checked by a doctor, nurse, or other health professional?",
        "isRequired": true,
        "choices": [
          { "value": 0, "text": "Never" },
          { "value": 95, "text": "95 or more" },
          { "value": 97, "text": "Refused" },
          { "value": 99, "text": "Don't know" }
        ],
        "hasOther": false, // Depending on your requirement, this can be added to allow an "Other" option
        "visibleIf": "{HYPEV_A} == 1", // Condition based on the answer to the previous question (HYPEV_A)
        "colCount": 4 // Adjust column count for better layout
      },
      {
        "type": "radiogroup",
        "name": "HYBPCKTP",
        "title": "Enter time period for time since last blood pressure check.",
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
        "visibleIf": "{HYBPCKNO} > 1", // Condition based on previous questions (HYBPCKNO and AGE)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
      },
      {
        "type": "radiogroup",
        "name": "HYBPLEV",
        "title": "At that time, were you told that your blood pressure was high, normal, or low?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Not told" },
          { "value": 2, "text": "High" },
          { "value": 3, "text": "Normal" },
          { "value": 4, "text": "Low" },
          { "value": 5, "text": "Borderline" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{HYBPCKTP} >= 1 and {HYPEV_A} == 1", // Condition based on previous questions (HYBPCKTP and HYPEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
      },
      {
        "type": "radiogroup",
        "name": "HYPMDEV2",
        "title": "Was any medicine EVER prescribed by a doctor for your high blood pressure?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{HYPEV_A} == 1", // Condition based on previous question (HYPEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
      },
      {
        "type": "radiogroup",
        "name": "HYPMED_A",
        "title": "Are you NOW taking any medication prescribed by a doctor for your high blood pressure?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't Know" }
        ],
        "visibleIf": "{HYPEV_A} == 1", // Condition based on previous question (HYPEV_A)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
      }
]