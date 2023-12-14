export const can = [
    {
        type: "radiogroup",
        name: "CANEV_A",
        title: "Have you EVER been told by a doctor or other health professional that you had... Cancer or a malignancy of any kind?",
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
        name: "CANKIND1_A",
        title: "What kind of cancer was it?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "01", text: "Bladder" },
            { value: "02", text: "Blood" },
            { value: "03", text: "Bone" },
            { value: "04", text: "Brain" },
            { value: "05", text: "Breast" },
            { value: "06", text: "Cervix/Cervical" },
            { value: "07", text: "Colon" },
            { value: "08", text: "Esophagus/Esophageal" },
            { value: "09", text: "Gallbladder" },
            { value: "10", text: "Kidney" },
            { value: "11", text: "Larynx-trachea" },
            { value: "12", text: "Leukemia" },
            { value: "13", text: "Liver" },
            { value: "14", text: "Lung" },
            { value: "15", text: "Lymphoma" },
            { value: "16", text: "Melanoma" },
            { value: "17", text: "Mouth/tongue/lip" },
            { value: "18", text: "Ovary/Ovarian" },
            { value: "19", text: "Pancreas/Pancreatic" },
            { value: "20", text: "Prostate" },
            { value: "21", text: "Rectum/Rectal" },
            { value: "22", text: "Skin (melanoma)" },
            { value: "23", text: "Skin (non-melanoma)" },
            { value: "24", text: "Skin (don't know kind)" },
            { value: "25", text: "Stomach" },
            { value: "26", text: "Testis/Testicular" },
            { value: "27", text: "Throat - pharynx" },
            { value: "28", text: "Thyroid" },
            { value: "29", text: "Uterus/Uterine" },
            { value: "30", text: "Other" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "{CANEV_A} = '1'", // Assuming 'CANEV_A' indicates a positive response to the previous cancer question
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "CANAGE1_A",
        title: "How old were you when a doctor or other health professional first told you that you had said cancer?",
        isRequired: true,
        inputType: "number",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 120
            }
        ],
        visibleIf: "{CANKIND1_A} <> '' && {CANEV_A} = '1'", // Assuming 'CANKIND1_A' indicates the type of cancer and 'CANEV_A' indicates a positive response to the previous cancer question
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "CANKIND2_A",
        title: "Have you EVER had any other kinds of cancer?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "01", text: "Bladder" },
            { value: "02", text: "Blood" },
            { value: "03", text: "Bone" },
            { value: "04", text: "Brain" },
            { value: "05", text: "Breast" },
            { value: "06", text: "Cervix/Cervical" },
            { value: "07", text: "Colon" },
            { value: "08", text: "Esophagus/Esophageal" },
            { value: "09", text: "Gallbladder" },
            { value: "10", text: "Kidney" },
            { value: "11", text: "Larynx-trachea" },
            { value: "12", text: "Leukemia" },
            { value: "13", text: "Liver" },
            { value: "14", text: "Lung" },
            { value: "15", text: "Lymphoma" },
            { value: "16", text: "Melanoma" },
            { value: "17", text: "Mouth/tongue/lip" },
            { value: "18", text: "Ovary/Ovarian" },
            { value: "19", text: "Pancreas/Pancreatic" },
            { value: "20", text: "Prostate" },
            { value: "21", text: "Rectum/Rectal" },
            { value: "22", text: "Skin (melanoma)" },
            { value: "23", text: "Skin (non-melanoma)" },
            { value: "24", text: "Skin (don't know kind)" },
            { value: "25", text: "Stomach" },
            { value: "26", text: "Testis/Testicular" },
            { value: "27", text: "Throat - pharynx" },
            { value: "28", text: "Thyroid" },
            { value: "29", text: "Uterus/Uterine" },
            { value: "30", text: "Other" },
            { value: "96", text: "No more" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "({CANEV_A} = '1' && ({CANKIND1_A} <> '' || {CANAGE1_A} <> '')) || {CANEV_A} = '96'", // Assuming 'CANEV_A' indicates a positive response to the first cancer question, 'CANKIND1_A' indicates the first cancer type, and 'CANAGE1_A' indicates the age at the time of the first cancer diagnosis
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "CANAGE2_A",
        title: "How old were you when a doctor or other health professional first told you that you had said cancer?",
        isRequired: true,
        inputType: "number",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 120
            }
        ],
        visibleIf: "({CANKIND2_A} <> '' || {CANKIND2_A} = '97' || {CANKIND2_A} = '99')", // Assuming 'CANKIND2_A' indicates the second type of cancer and conditions for 'Refused' or 'Don't Know'
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "CANKIND3_A",
        title: "Have you EVER had any other kinds of cancer?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "01", text: "Bladder" },
            { value: "02", text: "Blood" },
            { value: "03", text: "Bone" },
            { value: "04", text: "Brain" },
            { value: "05", text: "Breast" },
            { value: "06", text: "Cervix/Cervical" },
            { value: "07", text: "Colon" },
            { value: "08", text: "Esophagus/Esophageal" },
            { value: "09", text: "Gallbladder" },
            { value: "10", text: "Kidney" },
            { value: "11", text: "Larynx-trachea" },
            { value: "12", text: "Leukemia" },
            { value: "13", text: "Liver" },
            { value: "14", text: "Lung" },
            { value: "15", text: "Lymphoma" },
            { value: "16", text: "Melanoma" },
            { value: "17", text: "Mouth/tongue/lip" },
            { value: "18", text: "Ovary/Ovarian" },
            { value: "19", text: "Pancreas/Pancreatic" },
            { value: "20", text: "Prostate" },
            { value: "21", text: "Rectum/Rectal" },
            { value: "22", text: "Skin (melanoma)" },
            { value: "23", text: "Skin (non-melanoma)" },
            { value: "24", text: "Skin (don't know kind)" },
            { value: "25", text: "Stomach" },
            { value: "26", text: "Testis/Testicular" },
            { value: "27", text: "Throat - pharynx" },
            { value: "28", text: "Thyroid" },
            { value: "29", text: "Uterus/Uterine" },
            { value: "30", text: "Other" },
            { value: "96", text: "No more" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "({CANKIND2_A} <> '' || {CANKIND2_A} = '97' || {CANKIND2_A} = '99' || {CANAGE2_A} <> '' || {CANAGE2_A} = '97' || {CANAGE2_A} = '99')", // Assuming 'CANKIND2_A' indicates the second type of cancer and conditions for 'Refused' or 'Don't Know', 'CANAGE2_A' indicates the age at the time of the second cancer diagnosis, and the conditions for 'Refused' or 'Don't Know'
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "CANAGE3_A",
        title: "How old were you when a doctor or other health professional first told you that you had CANKIND3?",
        isRequired: true,
        inputType: "number",
        validators: [
            {
                type: "numeric",
                minValue: 1,
                maxValue: 120
            }
        ],
        visibleIf: "({CANKIND3_A} <> '' || {CANKIND3_A} = '97' || {CANKIND3_A} = '99')", // Assuming 'CANKIND3_A' indicates the third type of cancer and conditions for 'Refused' or 'Don't Know'
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "CANMORE_A",
        title: "Did you have any other kinds of cancer?",
        isRequired: true,
        colCount: 2,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({CANKIND3_A} <> '' || {CANKIND3_A} = '97' || {CANKIND3_A} = '99' || {CANAGE3_A} <> '' || {CANAGE3_A} = '97' || {CANAGE3_A} = '99')", // Assuming 'CANKIND3_A' indicates the third type of cancer, conditions for 'Refused' or 'Don't Know', and 'CANAGE3_A' indicates the age at the time of the third cancer diagnosis and conditions for 'Refused' or 'Don't Know'
        // Skip logic can be implemented here if needed.
    }
]