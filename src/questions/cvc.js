export const cvc = [
    {
        "type": "radiogroup",
        "name": "CHDEV_A",
        "title": "Have you EVER been told by a doctor or other health professional that you had Coronary heart disease?",
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
        "name": "ASPMEDEV",
        "title": "Has a doctor or other health professional EVER told you to take a low-dose aspirin each day to prevent or control heart disease?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{CHDEV_A} == 1", // Original: {AGE} >= 40
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ASPMEDAD",
        "title": "Are you NOW following this advice?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{ASPMEDEV} == 1", // Condition based on the previous question (ASPMEDEV)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ASPMDMED",
        "title": "Did a doctor or other health professional advise you to stop taking a low-dose aspirin every day?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{ASPMEDEV} == 1 and {ASPMEDAD} == 2", // Condition based on the previous questions (ASPMEDEV and ASPMEDAD)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ASPONOWN",
        "title": "On your own, are you now taking a low-dose aspirin each day to prevent or control heart disease?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "{ASPMEDEV} == 2 or {ASPMDMED} == 2", // Condition based on the previous questions (ASPMEDEV and ASPMDMED)
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ANGEV_A",
        "title": "Have you EVER been told by a doctor or other health professional that you had Angina, also called angina pectoris?",
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
        "name": "MIEV_A",
        "title": "Have you EVER been told by a doctor or other health professional that you had a heart attack, also called myocardial infarction?",
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
        "name": "HRTEV",
        "title": "Have you EVER been told by a doctor or other health professional that you had any kind of heart condition or heart disease (other than the ones I just asked about)?",
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
        "name": "JAWP",
        "title": "Do you consider pain or discomfort in the jaw, neck, or back as symptoms that someone may be having a heart attack?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "WEA",
        "title": "Do you consider feeling weak, lightheaded, or faint as symptoms that someone may be having a heart attack?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "CHE",
        "title": "Do you consider chest pain or discomfort as symptoms that someone may be having a heart attack?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ARM",
        "title": "Do you consider pain or discomfort in the arms or shoulder as symptoms that someone may be having a heart attack?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "BRTH",
        "title": "Do you consider shortness of breath as symptoms that someone may be having a heart attack?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "AHADO",
        "title": "If you thought someone was having a heart attack, what is the BEST thing to do right away?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Advise them to drive to the hospital" },
          { "value": 2, "text": "Advise them to call their physician" },
          { "value": 3, "text": "Call 9-1-1 (or another emergency number)" },
          { "value": 4, "text": "Call spouse or family member" },
          { "value": 5, "text": "Other" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": true // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "STREV_A",
        "title": "Have you EVER been told by a doctor or other health professional that you had a stroke?",
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
        "name": "FACE",
        "title": "Which of the following would you say are the symptoms that someone may be having a stroke? Sudden numbness or weakness of face, arm, or leg, especially on one side?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "SPEAKING",
        "title": "Which of the following would you say are the symptoms that someone may be having a stroke? Sudden confusion or trouble speaking?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "EYE",
        "title": "Which of the following would you say are the symptoms that someone may be having a stroke? Sudden trouble seeing in one or both eyes?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, you might adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "WALKING",
        "title": "Which of the following would you say are the symptoms that someone may be having a stroke? Sudden trouble walking, dizziness, or loss of balance?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "HEADACHE",
        "title": "Which of the following would you say are the symptoms that someone may be having a stroke? Sudden severe headache with no known cause?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Yes" },
          { "value": 2, "text": "No" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, adjust this visibility condition
        "hasOther": false // Depending on your requirement, this can be added to allow an "Other" option
    },
    {
        "type": "radiogroup",
        "name": "ASTDO",
        "title": "If you thought someone was having a stroke, what is the BEST thing to do right away?",
        "isRequired": true,
        "choices": [
          { "value": 1, "text": "Advise them to drive to the hospital" },
          { "value": 2, "text": "Advise them to call their physician" },
          { "value": 3, "text": "Call 9-1-1 (or another emergency number)" },
          { "value": 4, "text": "Call spouse or family member" },
          { "value": 5, "text": "Other" },
          { "value": 7, "text": "Refused" },
          { "value": 9, "text": "Don't know" }
        ],
        "visibleIf": "true", // Depending on your survey logic, adjust this visibility condition
        "hasOther": true // Depending on your requirement, this can be added to allow an "Other" option
    }                 
]