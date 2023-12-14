export const dib = [
    {
        type: "radiogroup",
        name: "PREDIB_A",
        title: "Has a doctor or other health professional EVER told you that you had prediabetes or borderline diabetes?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Assuming 'age' is a variable indicating the respondent's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "GESDIB_A",
        title: "Has a doctor or other health professional EVER told you that you had gestational diabetes, a type of diabetes that occurs ONLY during pregnancy?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Assuming 'age' is a variable indicating the respondent's age and 'gender' represents the respondent's gender
        // !!!!!!!!!!!!!!!!!! FOR KAZ: PLEASE INCLUDE GENDER REQUIREMENT ---> FEMALE
    },
    {
        type: "radiogroup",
        name: "DIBEV_A",
        title: "Has a doctor or other health professional EVER told you that you had diabetes?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Assuming 'age' is a variable indicating the respondent's age
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "DIBAGE_A",
        title: "How old were you when a doctor or other health professional FIRST told you that you had diabetes (not including gestational diabetes or prediabetes)?",
        isRequired: true,
        inputType: "number",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 120
            }
        ],
        visibleIf: "{DIBEV_A} == '1'", // Assuming 'DIBEV_A' represents whether the respondent was told they had diabetes
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "DIBPILL_A",
        title: "Are you NOW taking diabetic pills to lower your blood sugar? These are sometimes called oral agents or oral hypoglycemic agents.",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{DIBEV_A} == '1'", // Assuming 'DIBEV_A' represents whether the respondent was told they had diabetes
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "DIBINS_A",
        title: "Insulin can be taken by shot or pump. Are you NOW taking insulin?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{DIBEV_A} == '1'", // Assuming 'DIBEV_A' represents whether the respondent was told they had diabetes
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "DIBINSTIME_A",
        title: "Thinking back to when you were first diagnosed with diabetes, how long was it before you started taking insulin?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Less than 1 month" },
            { value: "2", text: "1 month to less than 6 months" },
            { value: "3", text: "6 months to less than 1 year" },
            { value: "4", text: "1 year or more" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{DIBEV_A} == '1' && {DIBINS_A} == '1'", // Assuming 'DIBEV_A' represents whether the respondent was told they had diabetes and 'DIBINS_A' represents whether they are currently taking insulin
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "DIBINSSTOP_A",
        title: "Since you started taking insulin, have you ever stopped taking it for more than 6 months?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{DIBEV_A} == '1' && {DIBINS_A} == '1'", // Assuming 'DIBEV_A' represents whether the respondent was told they had diabetes and 'DIBINS_A' represents whether they are currently taking insulin
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "DIBINSSTYR_A",
        title: "Was this only during the first year after you were diagnosed with diabetes?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{DIBEV_A} == '1' && {DIBINS_A} == '1' && {DIBINSSTOP_A} == '1'", // Assuming 'DIBEV_A' represents whether the respondent was told they had diabetes, 'DIBINS_A' represents whether they are currently taking insulin, and 'DIBINSSTOP_A' represents whether they stopped taking insulin for more than 6 months
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "DIBTYPE_A",
        title: "According to your doctor or other health professional, what type of diabetes do you have? Is it type 1, type 2, or some other type? If you don't remember or weren't told, that's OK.",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Type 1" },
            { value: "2", text: "Type 2" },
            { value: "3", text: "Other type of diabetes" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{DIBEV_A} == '1'", // Assuming 'DIBEV_A' represents whether the respondent was told they had diabetes
        // Skip logic can be implemented here if needed.
    }
];