export const ims = [
    {
        type: "radiogroup",
        name: "PREGFLUYR_A",
        title: "Were you pregnant any time (this year/last year)?",
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
        visibleIf: "true"
        // !!!!!!!!!! FEMALES ONLY NEED TO ADD CONDITION TO SHOW
        // Skip logic based on provided conditions for the universe
        // Modify variables such as SEX_A, AGE_A, PREGNANT_A, INTERVIEW_MONTH based on your survey structure
    },
    {
        type: "radiogroup",
        name: "LIVEBIRTH_A",
        title: "During the past 12 months, did you have a pregnancy that RESULTED in a live birth?",
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
        visibleIf: "true"
        // !!!!!!!!!!!!!!!! FEMALES ONLY!!!!!!!!!!!!!!!!!!!!!!!
        // Modify variables such as SEX_A, AGE_A, PREGNANT_A, PREGFLUYR_A based on your survey structure
    },
    {
        type: "radiogroup",
        name: "SHTFLU12M_A",
        title: "During the past 12 months, have you had a flu vaccination?",
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
        visibleIf: "true" // Assuming this question is always visible for Sample Adults 18+
        // Modify the visibleIf condition if specific conditions apply to this question
    },
    {
        type: "radiogroup",
        name: "FLUPREG_A",
        title: "Did you get a flu vaccination before or during your current pregnancy?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Before pregnancy"
            },
            {
                value: 2,
                text: "During pregnancy"
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
        visibleIf: "true"
        // !!!!!!!!!!!!!!!! FEMALES ONLY
        // Modify variables such as SEX_A, AGE_A, PREGNANT_A, FLUPREG12M_A, INTERVIEW_MONTH based on your survey structure
    },
    {
        type: "radiogroup",
        name: "FLUPREG2_A",
        title: "Earlier you said you were pregnant sometime (this year/last year). Did you get a flu vaccination before, during, or after your pregnancy?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Before pregnancy"
            },
            {
                value: 2,
                text: "During pregnancy"
            },
            {
                value: 3,
                text: "After pregnancy"
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
        visibleIf: "{PREGFLUYR_A} == 1"
        // !!!!!!!!!!!!!!! FEMALES ONLY
        // Modify variables such as SEX_A, AGE_A, PREGNANT_A, FLUPREG12M_A, INTERVIEW_MONTH based on your survey structure
    },
    {
        type: "radiogroup",
        name: "SHTCVD191_A",
        title: "The next questions are about coronavirus or COVID-19 vaccination. Have you had at least one dose of a COVID-19 vaccination?",
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
        visibleIf: "true" // Assuming this question is always visible for Sample Adults 18+
        // Modify the visibleIf condition if specific conditions apply to this question
    },
    {
        type: "radiogroup",
        name: "SHTCVD19NM_A",
        title: "How many COVID-19 vaccinations have you received?",
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
        visibleIf: "{SHTCVD191_A} >= 1" // Assuming 'SHTCVD191_A' represents having at least one COVID-19 vaccination
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "text",
        name: "CVDVAC1M_A",
        title: "During what month did you receive your most recent COVID-19 vaccination?",
        inputType: "text",
        isRequired: true,
        requiredErrorText: "Please enter the month of your most recent COVID-19 vaccination.",
        validators: [
            {
                type: "text",
                text: "Please enter a valid month (01-12).",
                min: "01",
                max: "12"
            }
        ],
        autoComplete: "off",
        visibleIf: "{SHTCVD19NM_A} != '7' && {SHTCVD19NM_A} != '9' && {SHTCVD19NM_A} != null" // Assuming 'SHTCVD19NM_A' represents the number of COVID-19 vaccinations received
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "text",
        name: "CVDVAC1Y_A",
        title: "Enter year of most recent COVID-19 vaccination.",
        inputType: "number",
        isRequired: true,
        requiredErrorText: "Please enter the year of your most recent COVID-19 vaccination.",
        validators: [
            {
                type: "numeric",
                minValue: 2000,
                maxValue: 2030,
                text: "Please enter a valid year between 2000 and 2030."
            }
        ],
        autoComplete: "off",
        visibleIf: "{CVDVAC1M_A} != '97' && {CVDVAC1M_A} != '99' && {CVDVAC1M_A} != null" // Assuming 'CVDVAC1M_A' represents the month of the most recent COVID-19 vaccination
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "text",
        name: "CVDVAC2M_A",
        title: "During what month and year did you receive your next most recent COVID-19 vaccination? Enter month of the next most recent COVID-19 vaccination.",
        inputType: "text",
        isRequired: true,
        requiredErrorText: "Please enter the month of your next most recent COVID-19 vaccination.",
        validators: [
            {
                type: "text",
                text: "Please enter a valid month (01-12).",
                min: "01",
                max: "12"
            }
        ],
        autoComplete: "off",
        visibleIf: "{SHTCVD19NM_A} != '7' && {SHTCVD19NM_A} != '9' && {SHTCVD19NM_A} != null" // Assuming 'SHTCVD19NM_A' represents the number of COVID-19 vaccinations received
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "text",
        name: "CVDVAC2Y_A",
        title: "Enter year of next most recent COVID-19 vaccination.",
        inputType: "number",
        isRequired: true,
        requiredErrorText: "Please enter the year of your next most recent COVID-19 vaccination.",
        validators: [
            {
                type: "numeric",
                minValue: 2000,
                maxValue: 2030,
                text: "Please enter a valid year between 2000 and 2030."
            }
        ],
        autoComplete: "off",
        visibleIf: "{CVDVAC2M_A} != '97' && {CVDVAC2M_A} != '99' && {CVDVAC2M_A} != null" // Assuming 'CVDVAC2M_A' represents the month of the next most recent COVID-19 vaccination
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHOTTYPE_A",
        title: "For your first shot, which brand of COVID-19 vaccine did you receive?",
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
        visibleIf: "{SHTCVD19NM_A} != '7' && {SHTCVD19NM_A} != '9'" // Assuming 'SHTCVD19NM_A' represents the number of COVID-19 vaccinations received
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHTPNUEV_A",
        title: "A pneumonia shot is also known as a pneumococcal vaccine. Have you EVER had a pneumonia shot?",
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
        visibleIf: "true" // Assuming this question is always visible for Sample Adults 18+
        // Modify the visibleIf condition if specific conditions apply to this question in your survey
    },
    {
        type: "radiogroup",
        name: "SHTPNEUNB_A",
        title: "How many pneumonia shots have you ever had?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "One pneumonia shot"
            },
            {
                value: 2,
                text: "Two pneumonia shots"
            },
            {
                value: 3,
                text: "More than two pneumonia shots"
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
        visibleIf: "{SHTPNUEV_A} == '1'" // Assuming 'SHTPNUEV_A' represents ever having a pneumonia shot
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHTSHINGL1_A",
        title: "Have you had a vaccine for shingles?",
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
        visibleIf: "true" // age > 50 condition needed
        // Modify the visibleIf condition if specific conditions apply to this question in your survey
    },
    {
        type: "text",
        name: "SHINGYEAR_A",
        title: "What year did you get your most recent shingles vaccine?",
        inputType: "number",
        isRequired: false,
        requiredErrorText: "Please enter the year of your most recent shingles vaccine.",
        validators: [
            {
                type: "numeric",
                minValue: 1900,
                maxValue: 2030,
                text: "Please enter a valid year between 1900 and 2030."
            }
        ],
        autoComplete: "off",
        visibleIf: "{SHTSHINGL1_A} == '1'" // Assuming 'SHTSHINGL1_A' represents ever having a shingles vaccine
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHINGWHEN1_A",
        title: "Was it before 2017?",
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
        visibleIf: "{SHTSHINGL1_A} == '1' && {SHINGYEAR_A} == null" // Assuming 'SHTSHINGL1_A' represents ever having a shingles vaccine and 'SHINGYEAR_A' represents the year of the most recent shingles vaccine
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHINGRIX2_A",
        title: "Have you ever had any Shingrix® shots?",
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
        visibleIf: "{SHTSHINGL1_A} == '1' && {SHINGYEAR_A} >= 2017 && {SHINGYEAR_A} <= 2020 && {SHINGWHEN1_A} != 1" // Assuming 'SHTSHINGL1_A' represents ever having a shingles vaccine and 'SHINGYEAR_A' represents the year of the most recent shingles vaccine
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHINGRIXN2_A",
        title: "How many Shingrix® shots have you ever had?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "One Shingrix shot"
            },
            {
                value: 2,
                text: "Two Shingrix shots"
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
        visibleIf: "{SHTSHINGL1_A} == '1' && {SHINGRIX2_A} == '1'" // Assuming 'SHTSHINGL1_A' represents ever having a shingles vaccine and 'SHINGRIX2_A' represents ever having any Shingrix® shots
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHINGRIXFS_A",
        title: "Was your most recent Shingrix® shot in the year of your most recent Shingrix® shot your first or second Shingrix® shot?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "First shot"
            },
            {
                value: 2,
                text: "Second shot"
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
        visibleIf: "{SHTSHINGL1_A} == '1' && {SHINGYEAR_A} >= 2021" // Assuming 'SHTSHINGL1_A' represents ever having a shingles vaccine and 'SHINGYEAR_A' represents the year of the most recent shingles vaccine
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "TDAPPREG_A",
        title: "Did you receive a Tdap vaccine during this pregnancy?",
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
        visibleIf: "true" // !!!!!!!!!!!!!!!!!! FEMALE ONLY AND PREGNANCY REQUIRED
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHTTETANUS_A",
        title: "Have you received a tetanus shot in the past 10 years?",
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
        visibleIf: "{TDAPPREG_A} != '1'" // Assuming 'TDAPPREG_A' represents not having a Tdap vaccine during a recent pregnancy
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHTTDAP_A",
        title: "Did your health care provider tell you or did the vaccine information sheet say the vaccine included the pertussis or whooping cough vaccine?",
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
        visibleIf: "{SHTTETANUS_A} == '1'" // Assuming 'SHTTETANUS_A' represents having had a tetanus shot in the past 10 years
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHTTDAP_A",
        title: "Did your health care provider tell you or did the vaccine information sheet say the vaccine included the pertussis or whooping cough vaccine?",
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
        visibleIf: "{SHTTETANUS_A} == '1'" // Assuming 'SHTTETANUS_A' represents having had a tetanus shot in the past 10 years
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "SHTHPV_A",
        title: "Have you ever received an HPV shot or vaccine?",
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
        visibleIf: "true" // Assuming 'AGE' represents the respondent's age between 18 and 64 years
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "text",
        inputType: "number",
        name: "SHTHPVAGE_A",
        title: "How old were you when you received your first HPV shot?",
        isRequired: true,
        placeHolder: "Enter age",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 64,
                text: "Please enter a valid age between 1 and 64."
            }
        ],
        requiredErrorText: "Please enter your age when you received the first HPV shot.",
        visibleIf: "{SHTHPV_A} == '1'" // Assuming 'SHTHPV_A' represents having had an HPV shot and 'AGE' represents the respondent's age between 18 and 64 years
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "WORKHEALTH_A",
        title: "In your work or volunteer activities, do you provide direct medical care to patients?",
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
        visibleIf: "true" // Assuming this question is asked to adults aged 18 and above
        // Modify the visibleIf condition based on the logic of your survey
    },
    {
        type: "radiogroup",
        name: "WRKHLTHFC_A",
        title: "Even if you do not provide direct medical care to patients, do you work or volunteer in a health care facility?",
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
        visibleIf: "({WORKHEALTH_A} == 2 || {WORKHEALTH_A} == 7 || {WORKHEALTH_A} == 9)"
        // Assuming 'WORKHEALTH_A' represents providing direct medical care to patients
        // Modify the visibleIf condition based on the logic of your survey
    },

];