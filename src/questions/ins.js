export const ins =  [
    {
        type: "radiogroup",
        name: "HICOV_A",
        title: "Are you covered by any kind of health insurance or some other kind of health care plan?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Visible by default; you can specify conditions if needed
        // Skip logic can be implemented here if needed.
    },
    {
        type: "checkbox",
        name: "HIKIND_A",
        title: "What kinds of health insurance or health care coverage do you have? Select all that apply.",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "01", text: "Private health insurance" },
            { value: "02", text: "Medicare" },
            { value: "03", text: "Medigap" },
            { value: "04", text: "Medicaid" },
            { value: "06", text: "Military related health care: TRICARE (CHAMPUS) / VA health care / CHAMP- VA" },
            { value: "07", text: "Medical Indigent Program (MIP)" },
            { value: "08", text: "State-sponsored health plan" },
            { value: "09", text: "Other government program (NOTE: NON-MILITARY FEDERAL EMPLOYEE)" },
            { value: "10", text: "No coverage of any type" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1'", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MCAREPRB_A",
        title: "Are you covered by Medicare?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} != '02'", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan, 'HIKIND_A' contains the previous insurance types selected
        // Skip logic can be implemented here if needed.
        // !!!!!!!!!!!!!!!!!!! NEED TO IMPLEMENT AGE > 65 LOGIC HERE.
    },
    {
        type: "radiogroup",
        name: "MCAIDPRB_A",
        title: "There is a program called Medicaid that pays for health care for persons in need. Are you covered by Medicaid?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '2' || {HIKIND_A} != '04'", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan, 'HIKIND_A' contains the previous insurance types selected
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SINCOVDE_A",
        title: "Are you covered by a separate plan that only pays for dental services?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Visible by default; you can adjust the condition based on your survey's context
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SINCOVVS_A",
        title: "Are you covered by a separate plan that only pays for vision services?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Visible by default; you can adjust the condition based on your survey's context
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "SINCOVRX_A",
        title: "Are you covered by a separate plan that only pays for prescriptions?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "true", // Visible by default; you can adjust the condition based on your survey's context
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MCPART_A",
        title: "What type of Medicare coverage do you have? Is it Part A - hospital insurance, Part B - medical insurance, or both?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Part A- hospital only" },
            { value: "2", text: "Part B- medical only" },
            { value: "3", text: "Both Part A and Part B" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '02'", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan, 'HIKIND_A' contains the previous insurance types selected
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MCCHOICE_A",
        title: "Are you enrolled in a Medicare Advantage plan?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '02' && ({MCPART_A} == '2' || {MCPART_A} == '9' || {MCPART_A} == '7')", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan, 'HIKIND_A' contains the previous insurance types selected, 'MCPART_A' contains the type of Medicare coverage
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MCHMO_A",
        title: "Are you under a Medicare managed care arrangement, such as an HMO, that is, a Health Maintenance Organization?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '02' && ({MCPART_A} == '2' || {MCPART_A} == '9' || {MCPART_A} == '7')", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan, 'HIKIND_A' contains the previous insurance types selected, 'MCPART_A' contains the type of Medicare coverage
        // Skip logic can be implemented here if needed.
    },
    {
        type: "comment",
        name: "MCANAME_A",
        title: "What is the name of your Medicare Advantage or Medicare HMO plan?",
        isRequired: true,
        inputType: "text",
        placeHolder: "Enter the name of your plan",
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '02' && ({MCCHOICE_A} == '1' || {MCCHOICE_A} == '9' || {MCCHOICE_A} == '7' || {MCHMO_A} == '1' || {MCHMO_A} == '9' || {MCHMO_A} == '7')", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan, 'HIKIND_A' contains the previous insurance types selected, 'MCCHOICE_A' contains the respondent's Medicare Advantage plan enrollment, 'MCHMO_A' contains the respondent's Medicare HMO arrangement
        choices: [
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MCDNCOV_A",
        title: "Does [Medicare Advantage or Medicare HMO plan name] pay for any of the costs for dental care?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{MCANAME_A} != null ", // Assuming 'MCANAME_A' is the variable representing the name of the Medicare Advantage or Medicare HMO plan
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MCVSCOV_A",
        title: "Does [Medicare Advantage or Medicare HMO plan name] pay for any of the costs for routine vision care, such as glasses and contact lenses?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{MCANAME_A} != null  ", // Assuming 'MCANAME_A' is the variable representing the name of the Medicare Advantage or Medicare HMO plan
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MCPARTD_A",
        title: "Are you enrolled in Medicare Part D, also known as the Medicare Prescription Drug Plan?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HIKIND_A} contains '02'", // Assuming 'HIKIND_A' contains the previous insurance types selected
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "MORPLAN_A",
        title: "Are you covered by any other private health insurance plans?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HIKIND_A} contains '01'", // Adjust 'HIKIND_A' as per the specific variable representing private health insurance enrollment
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "HIPNAM2_A",
        title: "What is the name of that private health insurance plan?",
        isRequired: true,
        visibleIf: "{MORPLAN_A} == '1'", // Assuming 'MORPLAN_A' represents coverage by other private health insurance plans
        // Skip logic can be implemented here if needed.
        inputType: "text",
        choices: [
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ]
    },
    {
        type: "radiogroup",
        name: "POLHLD_A",
        title: "Are you the policyholder or subscriber for this health insurance plan?",
        isRequired: true,
        visibleIf: "{MORPLAN_A} == '1'", // Assuming 'MORPLAN_A' represents private health insurance coverage
        // Skip logic can be implemented here if needed.
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ]
    },
    {
        type: "radiogroup",
        name: "PRPLCOV_A",
        title: "Does this health insurance plan cover someone other than yourself?",
        isRequired: true,
        visibleIf: "{MORPLAN_A} == '1'",
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ]
    },
    {
        type: "radiogroup",
        name: "PRPOLH_A",
        title: "How are you related to the policyholder or subscriber?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Child" },
            { value: "2", text: "Spouse" },
            { value: "3", text: "Former spouse" },
            { value: "4", text: "Some other relationship" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '01' && {POLHLD_A} != '1'", // Assuming 'HICOV_A' represents whether the respondent is covered by any health insurance or health care plan, 'HIKIND_A' represents private health insurance, 'POLHLD_A' represents the respondent's role as the policyholder
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PLNWRK_A",
        title: "Which one of these categories best describes how this plan was obtained?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Through an employer, union, or professional association" },
            { value: "2", text: "Purchased directly" },
            { value: "3", text: "Through Healthcare.gov or the Affordable Care Act, also known as Obamacare" },
            { value: "4", text: "GUAM MEDICAID OR MIP" },
            { value: "5", text: "Other" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '01'", // Adjust 'HICOV_A' as per the specific variable representing health insurance coverage and 'HIKIND_A' for the type of insurance
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "PLNWKSP_A",
        title: "How was this plan obtained?",
        isRequired: true,
        inputType: "text",
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '01' && ({PLNWRK_A} == '5' || {PLNWRK_A} == '97' || {PLNWRK_A} == '99')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance, 'PLNWRK_A' contains the manner of obtaining the plan
        // Skip logic can be implemented here if needed.
        choices: [
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ]
    },
    {
        type: "radiogroup",
        name: "PLNEXCHG_A",
        title: "Was the plan obtained through Healthcare.gov or the marketplace?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} contains '01' && ({PLNWRK_A} != '3' && {PLNWRK_A} != '97' && {PLNWRK_A} != '99')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance, 'PLNWRK_A' contains the manner of obtaining the plan
        // Skip logic can be implemented here if needed.
    },
    {
        type: "checkbox",
        name: "PLNPAY_A",
        title: "Who pays for this health insurance plan? (Select all that apply)",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Self or family (living in the household)" },
            { value: "2", text: "Employer or union" },
            { value: "3", text: "Someone outside the household" },
            { value: "4", text: "Medicare" },
            { value: "5", text: "Medicaid" },
            { value: "6", text: "Other government program" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {HIKIND_A} != '10'", // Assuming 'HICOV_A' represents health insurance coverage and 'HIKIND_A' indicates the type of insurance (excluding no coverage)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "text",
        name: "HICOSTN_A",
        title: "{Do you/Does your family} currently spend for health insurance premiums for {this plan/this first plan/this second plan}?",
        isRequired: true,
        inputType: "number",
        placeHolder: "Enter the amount",
        rangeMin: 1,
        rangeMax: 99995,
        rangeStep: 1,
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} != '10') && ({PLNPAY_A} == '1' || {PLNPAY_A} == '9')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (excluding no coverage), 'PLNPAY_A' represents who pays for the insurance
        // Skip logic can be implemented here if needed.
        choices: [
            { value: "99997", text: "Refused" },
            { value: "99999", text: "Don't Know" }
        ]
    },
    {
        type: "dropdown",
        name: "HICOSTT_A",
        title: "How often do you pay for health insurance premiums?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "01", text: "Once a week" },
            { value: "02", text: "Once every 2 weeks" },
            { value: "03", text: "Once a month" },
            { value: "04", text: "Twice a month" },
            { value: "05", text: "Every two months" },
            { value: "06", text: "Quarterly (every 3 months)" },
            { value: "07", text: "Once a year" },
            { value: "08", text: "Twice a year" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} != '10') && ({PLNPAY_A} == '1' || {PLNPAY_A} == '9')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (excluding no coverage), 'PLNPAY_A' represents who pays for the insurance, 'HICOSTN_A' contains the amount spent on health insurance premiums
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PRDEDUC_A",
        title: "Does this health plan have an annual deductible?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} != '10') && ({PLNPAY_A} == '1' || {PLNPAY_A} == '9')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (excluding no coverage), 'PLNPAY_A' represents who pays for the insurance
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PRHDHP_A",
        title: "Is the annual deductible for medical care for this plan less than family deductible threshold/deductible threshold, or family deductible threshold/deductible threshold or more? If there is a separate deductible for prescription drugs, hospitalization, or out-of-network care, do not include those deductible amounts here.",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Less than family deductible threshold/deductible threshold" },
            { value: "2", text: "family deductible threshold/deductible threshold or more" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} != '10') && ({PLNPAY_A} == '1' || {PLNPAY_A} == '9') && ({PRDEDUC_A} == '1' || {PRDEDUC_A} == '9')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (excluding no coverage), 'PLNPAY_A' represents who pays for the insurance, 'PRDEDUC_A' denotes if there's an annual deductible
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "HSAHRA_A",
        title: "There are special accounts or funds that can be used to pay for medical expenses, sometimes referred to as Health Savings Accounts or HSAs, Health Reimbursement Accounts or HRAs, Personal Care accounts, Personal Medical funds, or Choice funds. These are DIFFERENT from Flexible Spending Accounts or FSAs. Is there one of these accounts or funds with this plan?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && {PRHDHP_A} == '1'", // Assuming 'HICOV_A' represents health insurance coverage and 'PRHDHP_A' represents a high deductible
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PRRXCOV_A",
        title: "Does this {plan/first plan/second plan} pay for any of the costs for medications prescribed by a doctor?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} contains '01' || {HIKIND_A} contains '09')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (private health insurance)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PRDNCOV_A",
        title: "Does this {Instruction:plan/first plan/second plan} pay for any of the costs for dental care?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} contains '01' || {HIKIND_A} contains '09')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (private health insurance)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PRDNCOV_A",
        title: "Does this {plan/first plan/second plan} pay for any of the costs for dental care?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} contains '01' || {HIKIND_A} contains '09')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (private health insurance)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "PRVSCOV_A",
        title: "Does this {plan/first plan/second plan} pay for any of the costs for routine vision care, such as glasses and contact lenses?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '1' && ({HIKIND_A} contains '01' || {HIKIND_A} contains '09')", // Assuming 'HICOV_A' represents health insurance coverage, 'HIKIND_A' indicates the type of insurance (private health insurance)
        // Skip logic can be implemented here if needed.
    },
    {
        type: "comment",
        name: "OGNAME_A",
        title: "Earlier I recorded that you are covered by another government program. What is the name of the plan?",
        isRequired: true,
        inputType: "text",
        placeHolder: "Enter the name of the plan",
        maxLength: 500,
        requiredErrorText: "Please enter the name of the plan.",
        visibleIf: "{HICOV_A} == '2'", // Assuming 'HICOV_A' represents coverage by another government program
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "OGXCHNG_A",
        title: "Was your other government plan obtained through Healthcare.gov or the ^MARKETPLACE?",
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
        visibleIf: "{HICOV_A} == '2'" // Assuming 'HICOV_A' represents coverage by another government program
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "OGPREM_A",
        title: "A health insurance premium is the amount you or a family member pays each month for health care coverage. Do you or a family member pay a premium for your other government plan?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '2'", // Assuming 'HICOV_A' represents coverage by another government program
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "OGDEDUC_A",
        title: "A deductible is the amount you have to pay for health care before your health insurance or health coverage plan will start paying your medical bills. Does your other government plan have an annual deductible?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '2'", // Assuming 'HICOV_A' represents coverage by another government program
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "OGHDHP_A",
        title: "Is the annual deductible for medical care for this plan less than deductible threshold or deductible threshold or more? If there is a separate deductible for prescription drugs, hospitalization, or out-of-network care, do not include those deductible amounts here.",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Less than deductible threshold" },
            { value: "2", text: "Deductible threshold or more" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '2'", // Assuming 'HICOV_A' represents coverage by another government program
        // Skip logic can be implemented here if needed.
    },
    {
        type: "checkbox",
        name: "MILSPC_A",
        title: "Earlier I recorded that you are covered by military related health care. What types of military related health care are you covered by? (Select all that apply)",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "VA health care" },
            { value: "2", text: "TRICARE (CHAMPUS)" },
            { value: "3", text: "CHAMP-VA (do not include CHAMPUS)" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '3'", // Assuming 'HICOV_A' represents coverage by military related health care
        // Skip logic can be implemented here if needed.
    },
    {
        type: "radiogroup",
        name: "HILAST_A",
        title: "How long has it been since you last had health care coverage that paid for doctor's visits or hospital stays?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "0", text: "Never" },
            { value: "1", text: "Within the past year (anytime less than 12 months ago)" },
            { value: "2", text: "Within the last 2 years (1 year but less than 2 years ago)" },
            { value: "3", text: "Within the last 3 years (2 years but less than 3 years ago)" },
            { value: "4", text: "Within the last 5 years (3 years but less than 5 years ago)" },
            { value: "5", text: "Within the last 10 years (5 years but less than 10 years ago)" },
            { value: "6", text: "10 years ago or more" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} == '7' || {HICOV_A} == '9'", 
        // Adjust the comparison values based on the representation of no known health insurance or specific responses to probes.
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "dropdown",
        name: "HILASTMY_A",
        title: "In the past 12 months, how many months were you without coverage?",
        isRequired: true,
        colCount: 0,
        choices: [
            { value: "01", text: "1 month" },
            { value: "02", text: "2 months" },
            { value: "03", text: "3 months" },
            { value: "04", text: "4 months" },
            { value: "05", text: "5 months" },
            { value: "06", text: "6 months" },
            { value: "07", text: "7 months" },
            { value: "08", text: "8 months" },
            { value: "09", text: "9 months" },
            { value: "10", text: "10 months" },
            { value: "11", text: "11 months" },
            { value: "12", text: "12 months" },
            { value: "97", text: "Refused" },
            { value: "99", text: "Don't Know" }
        ],
        visibleIf: "{HICOV_A} != '1' && {HICOV_A} != '2' && ({HILAST_A} == '1' || {HILAST_A} == '2' || {HILAST_A} == '3' || {HILAST_A} == '4' || {HILAST_A} == '5' || {HILAST_A} == '6')",
        // Adjust the comparison values based on the representation of having no known health insurance or not having had insurance within the last 12 months.
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "HISTOPJOB_A",
        title: "Think about the last time that you did have health care coverage that paid for doctor's visits or hospital stays. Please tell me, yes or no, if this is a reason why you are no longer enrolled in your last health care plan: You or the policyholder (SUBSCRIBER) retired, lost a job, or changed employers?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HILAST_A} == '1' || {HILAST_A} == '2' || {HILAST_A} == '3'", // Adjust the comparison values based on how your survey represents the duration of being uninsured
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "HISTOPMISS_A",
        title: "Are you no longer enrolled in your last health care plan because you missed a deadline for signing up or paying for the coverage?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HILAST_A} == '1' || {HILAST_A} == '2' || {HILAST_A} == '3'", // Adjust the comparison values based on how your survey represents the duration of being uninsured
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "HISTOPAGE_A",
        title: "Are you no longer enrolled in your last health care plan because you became ineligible due to your age or because you left school?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HILAST_A} == '1' || {HILAST_A} == '2' || {HILAST_A} == '3'", // Adjust the comparison values based on how your survey represents the duration of being uninsured
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "HISTOPCOST_A",
        title: "Are you no longer enrolled in your last health care plan because the cost for your coverage increased?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HILAST_A} == '1' || {HILAST_A} == '2' || {HILAST_A} == '3'", // Adjust the comparison values based on how your survey represents the duration of being uninsured
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "HISTOPELIG_A",
        title: "Are you no longer enrolled in your last health care plan because you had Medicaid or other public coverage, but were no longer eligible?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "{HILAST_A} == '1' || {HILAST_A} == '2' || {HILAST_A} == '3'", // Adjust the comparison values based on how your survey represents the duration of being uninsured
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "RSNHICOST_A",
        title: "Are you currently uninsured because coverage is not affordable?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({HILAST_A} == '0' || {HILAST_A} == '1' || {HILAST_A} == '2') && {HISTOP_A} == '2'", // Adjust the comparison values in {HILAST_A} based on your survey's representation of being uninsured and {HISTOP_A} accordingly
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "RSNHIWANT_A",
        title: "In addition to cost, are you currently uninsured because you do not need or want coverage?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({HILAST_A} == '0' || {HILAST_A} == '1' || {HILAST_A} == '2') && {RSNHICOST_A} == '1'", // Adjust the comparison values in {HILAST_A} based on your survey's representation of being uninsured and {RSNHICOST_A} accordingly
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "RSNHIELIG_A",
        title: "In addition to cost, are you currently uninsured because you are not eligible for coverage?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({HILAST_A} == '0' || {HILAST_A} == '1' || {HILAST_A} == '2') && {RSNHICOST_A} == '1'", // Adjust the comparison values in {HILAST_A} based on your survey's representation of being uninsured and {RSNHICOST_A} accordingly
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "RSNHICONF_A",
        title: "In addition to cost, are you currently uninsured because the process of signing up for coverage is too difficult or confusing?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({HILAST_A} == '0' || {HILAST_A} == '1' || {HILAST_A} == '2') && {RSNHICOST_A} == '1'", // Adjust the comparison values in {HILAST_A} based on your survey's representation of being uninsured and {RSNHICOST_A} accordingly
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "RSNHIMEET_A",
        title: "In addition to cost, are you currently uninsured because you cannot find a plan that meets your needs?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({HILAST_A} == '0' || {HILAST_A} == '1' || {HILAST_A} == '2') && {RSNHICOST_A} == '1'", // Adjust the comparison values in {HILAST_A} based on your survey's representation of being uninsured and {RSNHICOST_A} accordingly
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "RSNHIWAIT_A",
        title: "In addition to cost, are you currently uninsured because you applied for coverage but it has not started yet?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({HILAST_A} == '0' || {HILAST_A} == '1' || {HILAST_A} == '2') && {RSNHICOST_A} == '1'", // Adjust the comparison values in {HILAST_A} based on your survey's representation of being uninsured and {RSNHICOST_A} accordingly
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "RSNHIOTH_A",
        title: "Is there another reason that you currently do not have health insurance coverage?",
        isRequired: true,
        colCount: 1,
        choices: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "7", text: "Refused" },
            { value: "9", text: "Don't Know" }
        ],
        visibleIf: "({HILAST_A} == '0' || {HILAST_A} == '1' || {HILAST_A} == '2') && {RSNHIWAIT_A} != '1' && {RSNHICONF_A} != '1' && {RSNHIMEET_A} != '1' && {RSNHIELIG_A} != '1' && {RSNHIWANT_A} != '1' && {RSNHICOST_A} != '1' && {RSNHITREAT_A} != '1' && {RSNHIEM_A} != '1'", // Adjust the comparison values in {HILAST_A} based on your survey's representation of being uninsured and exclude other reasons if not applicable.
        // Skip logic can be implemented here if needed.
        // Other properties...
    },
    {
        type: "comment",
        name: "RSNHIOTHSP_A",
        title: "What is your other reason for not having coverage?",
        isRequired: true,
        inputType: "text",
        maxLength: 500,
        placeHolder: "Type your response here",
        hideIfChoicesEmpty: true,
        visibleIf: "{RSNHIOTH_A} == '1'", // Show this question only if the respondent selected "Yes" for having another reason for not having coverage in the previous question.
        // Other properties...
    },
    {
        type: "radiogroup",
        name: "HINOTYR_A",
        title: "In the past 12 months, was there any time when you did NOT have ANY health insurance or coverage?",
        isRequired: true,
        colCount: 1,
        choices: [
            {
                value: "1",
                text: "Yes"
            },
            {
                value: "2",
                text: "No"
            },
            {
                value: "7",
                text: "Refused"
            },
            {
                value: "9",
                text: "Don't Know"
            }
        ],
        visibleIf: "{HICOV_A} == 2 || {MCAREPRB_A} == 1 || {MCAIDPRB_A} = 1",
        // Other properties...
    },
    {
        type: "text",
        name: "HINOTMYR_A",
        title: "In the past 12 months, about how many months were you without coverage?",
        isRequired: true,
        inputType: "number",
        min: 1,
        max: 12,
        inputFormat: "##",
        validators: [
            {
                type: "numeric",
                min: 1,
                max: 12,
                text: "Please enter a number between 1 and 12."
            }
        ],
        visibleIf: "{HICOV_A} == 2 || {MCAREPRB_A} == 1 || {MCAIDPRB_A} = 1",
    }
];