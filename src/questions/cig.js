export const cig = [
    {
        type: "radiogroup",
        name: "SMKEV_A",
        title: "Have you smoked at least 100 cigarettes in your ENTIRE LIFE?",
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
        visibleIf: "true", // This question is always visible based on the provided information
        // Universe logic: Sample Adults 18+
        // Skip logic instructions provided below:
        // If Yes (<1>), go to SMKAGE_A
        // If No (2), Refused (7), or Don't Know (9), go to ECIGEV_A
    },
    {
        type: "text",
        name: "SMKAGE_A",
        title: "How old were you when you FIRST started to smoke fairly regularly?",
        isRequired: true,
        inputType: "number",
        min: 6,
        max: 95,
        requiredErrorText: "Please enter your age when you started smoking fairly regularly.",
        visibleIf: "{SMKEV_A} == '1'", // Assuming 'SMKEV_A' represents the answer to the previous question about smoking 100 cigarettes
        // Universe logic: Sample Adults 18+ who ever smoked 100 cigarettes
        // Range of values allowed: 6 to 95, with specific instructions for entering '96' for never smoked regularly
    },
    {
        type: "radiogroup",
        name: "SMKNOW_A",
        title: "Do you NOW smoke cigarettes every day, some days or not at all?",
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
        visibleIf: "{SMKEV_A} == '1'", // Assuming 'SMKEV_A' represents the answer to the question about smoking 100 cigarettes
        // Universe logic: Sample Adults 18+ who ever smoked 100 cigarettes
    },
    {
        type: "text",
        name: "CIGNOW_A",
        title: "On average, about how many cigarettes do you NOW smoke a day?",
        isRequired: true,
        inputType: "number",
        min: 1,
        max: 95,
        requiredErrorText: "Please enter the average number of cigarettes smoked per day.",
        visibleIf: "{SMKNOW_A} == '1' && {SMKEV_A} == '1'", // Assuming 'SMKNOW_A' represents current daily smoking status and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who are current every day smokers
        // Range of values allowed: 1 to 95, with specific instructions for entering '1' if less than 1 cigarette and '95' for 95 or more cigarettes
    },
    {
        type: "text",
        name: "SMK30D_A",
        title: "On how many of the past 30 days did you smoke a cigarette?",
        isRequired: true,
        inputType: "number",
        min: 0,
        max: 30,
        requiredErrorText: "Please enter the number of days you smoked a cigarette in the past 30 days.",
        visibleIf: "{SMKNOW_A} == '2' && {SMKEV_A} == '1'", // Assuming 'SMKNOW_A' represents current some day smoking status and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who are current some day smokers
        // Range of values allowed: 0 to 30, with specific instruction for entering '0' for None
    },
    {
        type: "text",
        name: "CIG30D_A",
        title: "On average, when you smoked during the past 30 days, about how many cigarettes did you smoke a day?",
        isRequired: true,
        inputType: "number",
        min: 1,
        max: 95,
        requiredErrorText: "Please enter the average number of cigarettes smoked per day during the past 30 days.",
        visibleIf: "({SMK30D_A} > '0' && {SMKEV_A} == '1') || {SMK30D_A} == '97' || {SMK30D_A} == '99'", // Assuming 'SMK30D_A' represents the response to the previous question about the number of days smoked in the past 30 days and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who have smoked any time in the past 30 days or refused or don't know
        // Range of values allowed: 1 to 95, with specific instructions for entering '1' if less than 1 cigarette and '95' for 95 or more cigarettes
    },
    {
        type: "radiogroup",
        name: "MENTHOLC_A",
        title: "Do you usually smoke menthol or non-menthol cigarettes?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Menthol"
            },
            {
                value: 2,
                text: "Non-menthol"
            },
            {
                value: 3,
                text: "No usual type"
            },
            {
                value: 7,
                text: "Refused"
            },
            {
                value: 9,
                text: "Don't know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select an option.",
        visibleIf: "({SMKNOW_A} == '1' || {SMKNOW_A} == '2') && {SMKEV_A} == '1'", // Assuming 'SMKNOW_A' represents current smoking status and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who currently smoke cigarettes every day or some days
    },
    {
        type: "radiogroup",
        name: "SMKQT12M_A",
        title: "During the past 12 months, have you stopped smoking for more than one day BECAUSE YOU WERE TRYING TO QUIT SMOKING?",
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
        visibleIf: "({SMKNOW_A} == '1' || {SMKNOW_A} == '2') && {SMKEV_A} == '1'", // Assuming 'SMKNOW_A' represents current smoking status and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who are every day or someday smokers
    },
    {
        type: "text",
        name: "SMKQTN_A",
        title: "How long has it been since you quit smoking cigarettes?",
        isRequired: true,
        inputType: "number",
        min: 1,
        max: 365,
        requiredErrorText: "Please enter the duration since you quit smoking.",
        visibleIf: "{SMKNOW_A} == '3' && {SMKEV_A} == '1'", // Assuming 'SMKNOW_A' represents former smoking status and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who quit smoking
        // Range of values allowed: 1 to 365, with specific instructions for entering the number for time since quit smoking
    },
    {
        type: "radiogroup",
        name: "SMKQTTP_A",
        title: "Enter time period for time since quit smoking.",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Day(s)"
            },
            {
                value: 2,
                text: "Week(s)"
            },
            {
                value: 3,
                text: "Month(s)"
            },
            {
                value: 4,
                text: "Year(s)"
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
        visibleIf: "{SMKQTN_A} > '0' && {SMKEV_A} == '1'", // Assuming 'SMKQTN_A' represents the response to the previous question about time since quit smoking and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who gave a number for how long ago they quit smoking
    },
    {
        type: "radiogroup",
        name: "MENTHOLF_A",
        title: "Thinking back to the 12 MONTHS BEFORE YOU QUIT SMOKING CIGARETTES, during that time, did you usually smoke menthol or non-menthol cigarettes?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: 1,
                text: "Menthol"
            },
            {
                value: 2,
                text: "Non-menthol"
            },
            {
                value: 3,
                text: "No usual type"
            },
            {
                value: 7,
                text: "Refused"
            },
            {
                value: 9,
                text: "Don't know"
            }
        ],
        hasOther: false,
        otherText: "Other (Please specify)",
        requiredErrorText: "Please select an option.",
        visibleIf: "{SMKNOW_A} == '3' && {SMKEV_A} == '1'", // Assuming 'SMKNOW_A' represents former smoking status and 'SMKEV_A' represents ever smoked 100 cigarettes
        // Universe logic: Sample Adults 18+ who are former smokers
    },
    {
        type: "radiogroup",
        name: "SMKTLK1_A",
        title: "In the past 12 months, has a doctor, dentist, or other health professional ADVISED you about ways to stop smoking or prescribed medication to help you quit?",
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
        visibleIf: "({SMKNOW_A} == '1' || {SMKNOW_A} == '3') && {SMKEV_A} == '1'", // Assuming 'SMKNOW_A' represents current smoking status, 'SMKEV_A' represents ever smoked 100 cigarettes, and '1' represents former smoking status
        // Universe logic: Sample Adults 18+ who are current cigarette smokers or former cigarette smokers who have quit in the past 12 months
    },
    {
        type: "radiogroup",
        name: "ECIGEV_A",
        title: "Have you ever used an e-cigarette or other electronic vaping product, even just one time, in your entire life?",
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
        // Universe logic: Sample Adults 18+
    },
    {
        type: "radiogroup",
        name: "ECIGNOW_A",
        title: "Do you NOW use e-cigarettes or other electronic vaping products every day, some days, or not at all?",
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
        visibleIf: "{ECIGEV_A} == '1'", // Assuming 'ECIGEV_A' represents ever used e-cigarettes
        // Universe logic: Sample Adults 18+ who have ever used e-cigarettes
    },
    {
        type: "radiogroup",
        name: "FQUITA1_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following products...A nicotine patch?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITA2_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following products...A nicotine gum or lozenge?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITA3_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following products...A nasal spray or inhaler containing nicotine?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITA4_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following products...A prescription pill called Chantix (CHAN-tix) or Varenicline (vuh-REN-ih-klin)?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITA5_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following products...A prescription pill called Zyban (ZI-ban), Bupropion (byoo-PRO-pee-on), or Wellbutrin (wellBYOO-trin)?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITB1_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following...A telephone help line or quit line?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITB2_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following...One-on-one counseling?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITB3_A",
        title: "Thinking back to when you stopped smoking completely, did you use ANY of the following...A stop smoking clinic, class, or support group?",
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
        visibleIf: "{SMKQTTP_A} == '3'", // Assuming 'SMKQTTP_A' represents the response to the time period since quit smoking, where '3' indicates within the past 2 years
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years
    },
    {
        type: "radiogroup",
        name: "FQUITE_A",
        title: "Thinking back to when you stopped smoking completely, did you try to quit by switching to electronic or e-cigarettes?",
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
        visibleIf: "{SMKQTTP_A} == '3' && {ECIGNOW_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who quit smoking in the past 2 years and who have ever used e-cigarettes
    },
    {
        type: "radiogroup",
        name: "CQUITA1_A",
        title: "Thinking back to when you tried to QUIT smoking in the PAST 12 MONTHS, did you use ANY of the following products ...A nicotine patch?",
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
        visibleIf: "{FQUITA5_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITA2_A",
        title: "Thinking back to when you tried to QUIT smoking IN THE PAST 12 MONTHS, did you use ANY of the following products ...A nicotine gum or lozenge (LA-zenj)?",
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
        visibleIf: "{FQUITA5_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITA3_A",
        title: "Thinking back to when you tried to QUIT smoking IN THE PAST 12 MONTHS, did you use ANY of the following products ...A nasal spray or inhaler containing nicotine?",
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
        visibleIf: "{FQUITA5_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITA4_A",
        title: "Thinking back to when you tried to QUIT smoking IN THE PAST 12 MONTHS, did you use ANY of the following products ...A prescription pill called Chantix (CHAN-tix) or Varenicline (vuh-REN-ih-klin)?",
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
        visibleIf: "{FQUITA5_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITA5_A",
        title: "Thinking back to when you tried to QUIT smoking IN THE PAST 12 MONTHS, did you use ANY of the following products... A prescription pill called Zyban (ZI-ban), Bupropion (byoo-PRO-pee-on), or Wellbutrin (wellBYOO-trin)?",
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
        visibleIf: "{CQUITA4_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITB1_A",
        title: "Thinking back to when you tried to QUIT smoking in the PAST 12 MONTHS, did you use ANY of the following... A telephone help line or quit line?",
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
        visibleIf: "{CQUITA5_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITB2_A",
        title: "Thinking back to when you tried to QUIT smoking in the PAST 12 MONTHS, did you use ANY of the following ...One-on-one counseling?",
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
        visibleIf: "{CQUITB1_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITB3_A",
        title: "Thinking back to when you tried to QUIT smoking in the PAST 12 MONTHS, did you use ANY of the following ...A stop smoking clinic, class, or support group?",
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
        visibleIf: "{CQUITB1_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months
    },
    {
        type: "radiogroup",
        name: "CQUITE_A",
        title: "Thinking back to when you tried to QUIT smoking IN THE PAST 12 MONTHS, did you try to quit by switching to electronic or e-cigarettes?",
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
        visibleIf: "{CQUITB1_A} == '1'", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who tried to quit smoking in the past 12 months and have ever used e-cigarettes
    },
    {
        type: "radiogroup",
        name: "QWANT_A",
        title: "Would you like to completely quit smoking cigarettes?",
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
        visibleIf: "{SMKQTN_A} == '1' or {SMKAGE_A} >= 18", // Adjust this condition based on your survey logic
        // Universe logic: Sample Adults 18+ who are everyday or someday smokers
    }
];