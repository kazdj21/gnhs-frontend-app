export const cih = [

    {
        type: "radiogroup",
        name: "CHIRO_A",
        title: "During the past 12 months, have you seen or talked to a chiropractor about your own health?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ can be applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "CHIROPAIN_A",
        title: "During the past 12 months, did you see a chiropractor to treat or manage physical pain?",
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
        visibleIf: "{CHIRO_A} == 1", // Assuming 'CHIRO_A' represents the response to seeing a chiropractor in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a chiropractor in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "CHIROHLTH_A",
        title: "During the past 12 months, did you see a chiropractor to restore your overall health?",
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
        visibleIf: "{CHIRO_A} == 1", // Assuming 'CHIRO_A' represents the response to seeing a chiropractor in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a chiropractor in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "ACU_A",
        title: "During the past 12 months, did you see a practitioner of acupuncture?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "ACUPAIN_A",
        title: "During the past 12 months, did you see a practitioner of acupuncture to treat or manage physical pain?",
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
        visibleIf: "{ACU_A} == 1", // Assuming 'ACU_A' represents the response to seeing a practitioner of acupuncture in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a practitioner of acupuncture in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "ACUHLTH_A",
        title: "During the past 12 months, did you see a practitioner of acupuncture to restore your overall health?",
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
        visibleIf: "{ACU_A} == 1", // Assuming 'ACU_A' represents the response to seeing a practitioner of acupuncture in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a practitioner of acupuncture in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "MASS_A",
        title: "During the past 12 months, did you see a practitioner of massage or traditional healer?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "MASSPAIN_A",
        title: "During the past 12 months, did you see a practitioner of massage or traditional healer to treat or manage physical pain?",
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
        visibleIf: "{MASS_A} == 1", // Assuming 'MASS_A' represents the response to seeing a practitioner of massage or traditional healer in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a practitioner of massage or traditional healer in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "MASSHLTH_A",
        title: "During the past 12 months, did you see a practitioner of massage or traditional healer to restore your overall health?",
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
        visibleIf: "{MASS_A} == 1", // Assuming 'MASS_A' represents the response to seeing a practitioner of massage or traditional healer in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a practitioner of massage or traditional healer in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "NATUR_A",
        title: "During the past 12 months, did you see a practitioner of naturopathy?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "NATURPAIN_A",
        title: "During the past 12 months, did you see a naturopath to treat or manage physical pain?",
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
        visibleIf: "{NATUR_A} == 1", // Assuming 'NATUR_A' represents the response to seeing a naturopath in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a naturopath in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "NATURHLTH_A",
        title: "During the past 12 months, did you see a naturopath to restore your overall health?",
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
        visibleIf: "{NATUR_A} == 1", // Assuming 'NATUR_A' represents the response to seeing a naturopath in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who saw a naturopath in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "ARTTHPY_A",
        title: "During the past 12 months, did you see an art therapist?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "MUSICTHPY_A",
        title: "During the past 12 months, did you see a music therapist?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "MEDITATE_A",
        title: "During the past 12 months, did you use any of these types of meditation (Mindfulness, Mantra, Spiritual meditation)?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "MEDIPAIN_A",
        title: "During the past 12 months, did you use meditation to treat or manage physical pain?",
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
        visibleIf: "{MEDITATE_A} == 1", // Assuming 'MEDITATE_A' represents the response to using meditation in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who used meditation in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "MEDIHLTH_A",
        title: "During the past 12 months, did you use meditation to restore your overall health?",
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
        visibleIf: "{MEDITATE_A} == 1", // Assuming 'MEDITATE_A' represents the response to using meditation in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who used meditation in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "GIPR_A",
        title: "During the past 12 months, did you use guided imagery or progressive relaxation?",
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
        visibleIf: "true", // Assuming 'AGE_A' represents the age of the respondent
        // Universe logic for Sample Adults 18+ is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "GIPRPAIN_A",
        title: "During the past 12 months, did you use guided imagery or progressive relaxation to treat or manage physical pain?",
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
        visibleIf: "{GIPR_A} == 1", // Assuming 'GIPR_A' represents the response to using guided imagery or progressive relaxation in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who used guided imagery or progressive relaxation in the past 12 months is applied using the visibleIf condition.
    },
    {
        type: "radiogroup",
        name: "GIPRHLTH_A",
        title: "During the past 12 months, did you use guided imagery or progressive relaxation to restore your overall health?",
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
        visibleIf: "{GIPR_A} == 1", // Assuming 'GIPR_A' represents the response to using guided imagery or progressive relaxation in the past 12 months, and 'AGE_A' represents the age of the respondent
        // Additional skip logic or filtering can be implemented here if needed.
        // Universe logic for Sample Adults 18+ who used guided imagery or progressive relaxation in the past 12 months is applied using the visibleIf condition.
    },
    

];