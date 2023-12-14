import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import SurveySelector from "../components/SurveySelector";

// Adult
import { chl } from '../questions/chl';
import { cvc } from '../questions/cvc';
import { his } from '../questions/his';
import { hyp } from '../questions/hyp';
import { lsf } from '../questions/lsf';
import { ast } from '../questions/ast';
import { can } from '../questions/can';
import { dib } from '../questions/dib';
import { con } from '../questions/_con';
import { epi } from '../questions/epi';
import { bmi } from '../questions/bmi';
import { vis } from '../questions/vis';
import { hea } from '../questions/hea';
import { mob } from '../questions/mob';
import { cog } from '../questions/cog';
import { upp } from '../questions/upp';
import { ins } from '../questions/ins';
import { pay } from '../questions/pay';
import { cvl } from '../questions/cvl';
import { dnc } from '../questions/dnc';
import { utz } from '../questions/utz';
import { abh } from '../questions/abh';
import { tlh } from '../questions/tlh';
import { pmd } from '../questions/pmd';
import { ims } from '../questions/ims';
import { ptc } from '../questions/ptc';
import { anx } from '../questions/anx';
import { dep } from '../questions/dep';
import { mhc } from '../questions/mhc';
import { phq } from '../questions/phq';
import { gad } from '../questions/gad';
import { cig } from '../questions/cig';
import { otb } from '../questions/otb';
import { aqs } from '../questions/aqs';
import { phy } from '../questions/phy';
import { wlk } from '../questions/wlk';
import { cpa } from '../questions/cpa';
import { slp } from '../questions/slp';
import { dnu } from '../questions/dnu';
import { cih } from '../questions/cih';
import { gni } from '../questions/gni';
import { mar } from '../questions/mar';
import { vet } from '../questions/vet';
import { nat } from '../questions/nat';
import { sch } from '../questions/sch';
import { emp } from '../questions/emp';
import { inc } from '../questions/inc'; // needs universe logic
import { foo } from '../questions/foo'; // needs universe logic
import { fds } from '../questions/fds';
import { hou } from '../questions/hou';
import { tbh } from '../questions/tbh';
import { tel } from '../questions/tel';

// Child

import { dld } from '../questions/dld';
import { imm } from '../questions/imm';
import { cvv } from '../questions/cvv';
import { hpv } from '../questions/hpv';
import { sdq } from '../questions/sdq';
import { sle } from '../questions/sle';
import { bly } from '../questions/bly';
import { tbi } from '../questions/tbi';
import { nhc } from '../questions/nhc';
import { scr } from '../questions/scr';
import { fem } from '../questions/fem';


function Surveys() {

    const [ surveyQuestions, setSurveyQuestions ] = useState(null);
    const [ title, setTitle ] = useState(null);
    const [ model, setModel ] = useState(new Model());

    useEffect(() => {

        setModel(() => ({ elements: surveyQuestions }));

    }, [surveyQuestions])

    const survey = new Model(model);

    return (
        <>
            <Grid container >

                <Grid xs={12} md={12} xl={12} paddingTop={"2%"} paddingBottom={"2%"} justifyContent={"center"} alignItems={"center"}>
                    <h1 style={{textAlign: "center"}}>{title ? title : "No survey category selected."}</h1>
                </Grid>

                <Grid xs={12} md={12} xl={6}>

                        <SurveySelector title="Adult Questions" data={[
                            { name: "chl", items: [...chl] },
                            { name: "cvc", items: [...cvc] },
                            { name: "his", items: [...his] },
                            { name: "hyp", items: [...hyp] },
                            { name: "lsf", items: [...lsf] },
                            { name: "ast", items: [...ast] },
                            { name: "can", items: [...can] },
                            { name: "dib", items: [...dib] },
                            { name: "con", items: [...con] },
                            { name: "epi", items: [...epi] },
                            { name: "bmi", items: [...bmi] },
                            { name: "vis", items: [...vis] },
                            { name: "hea", items: [...hea] },
                            { name: "mob", items: [...mob] },
                            { name: "cog", items: [...cog] },
                            { name: "upp", items: [...upp] },
                            { name: "ins", items: [...ins] },
                            { name: "pay", items: [...pay] },
                            { name: "cvl", items: [...cvl] },
                            { name: "dnc", items: [...dnc] },
                            { name: "utz", items: [...utz] },
                            { name: "abh", items: [...abh] },
                            { name: "tlh", items: [...tlh] },
                            { name: "pmd", items: [...pmd] },
                            { name: "ims", items: [...ims] },
                            { name: "ptc", items: [...ptc] },
                            { name: "anx", items: [...anx] },
                            { name: "dep", items: [...dep] },
                            { name: "mhc", items: [...mhc] },
                            { name: "phq", items: [...phq] },
                            { name: "gad", items: [...gad] },
                            { name: "cig", items: [...cig] },
                            { name: "otb", items: [...otb] },
                            { name: "aqs", items: [...aqs] },
                            { name: "phy", items: [...phy] },
                            { name: "wlk", items: [...wlk] },
                            { name: "cpa", items: [...cpa] },
                            { name: "slp", items: [...slp] },
                            { name: "dnu", items: [...dnu] },
                            { name: "cih", items: [...cih] },
                            { name: "gni", items: [...gni] },
                            { name: "mar", items: [...mar] },
                            { name: "vet", items: [...vet] },
                            { name: "nat", items: [...nat] },
                            { name: "sch", items: [...sch] },
                            { name: "emp", items: [...emp] },
                            { name: "inc", items: [...inc] },
                            { name: "foo", items: [...foo] },
                            { name: "fds", items: [...fds] },
                            { name: "hou", items: [...hou] },
                            { name: "tbh", items: [...tbh] },
                            { name: "tel", items: [...tel] }
                    ]} onChange={(e) => {setSurveyQuestions(e.items); setTitle(`Adult - ${e.name}`);}}/>

                </Grid>

                <Grid xs={12} md={12} xl={6}>

                        <SurveySelector title="Child Questions" data={[
                            { name: "his", items: [...his] },
                            { name: "ast", items: [...ast] },
                            { name: "dib", items: [...dib] },
                            { name: "bmi", items: [...bmi] },
                            { name: "vis", items: [...vis] },
                            { name: "hea", items: [...hea] },
                            { name: "mob", items: [...mob] },
                            { name: "upp", items: [...upp] },
                            { name: "cog", items: [...cog] },
                            { name: "anx", items: [...anx] },
                            { name: "dep", items: [...dep] },
                            { name: "sch", items: [...sch] },
                            { name: "ins", items: [...ins] },
                            { name: "pay", items: [...pay] },
                            { name: "cvl", items: [...cvl] },
                            { name: "dnc", items: [...dnc] },
                            { name: "utz", items: [...utz] },
                            { name: "tlh", items: [...tlh] },
                            { name: "pmd", items: [...pmd] },
                            { name: "ptc", items: [...ptc] },
                            { name: "phy", items: [...phy] },
                            { name: "slp", items: [...slp] },
                            { name: "cih", items: [...cih] },
                            { name: "nat", items: [...nat] },
                            { name: "inc", items: [...inc] },
                            { name: "foo", items: [...foo] },
                            { name: "fds", items: [...fds] },
                            { name: "hou", items: [...hou] },
                            { name: "tel", items: [...tel] },
                            { name: "dld", items: [...dld] },
                            { name: "imm", items: [...imm] },
                            { name: "cvv", items: [...cvv] },
                            { name: "hpv", items: [...hpv] },
                            { name: "mhc", items: [...mhc] },
                            { name: "sdq", items: [...sdq] },
                            { name: "sle", items: [...sle] },
                            { name: "bly", items: [...bly] },
                            { name: "tbi", items: [...tbi] },
                            { name: "nhc", items: [...nhc] },
                            { name: "scr", items: [...scr] },
                            { name: "fem", items: [...fem] }
                    ]} onChange={(e) => {setSurveyQuestions(e.items); setTitle(`Child - ${e.name}`);}} />

                </Grid>

                <Grid xs={12} md={12} xl={12}>
                    
                    <Survey model={survey} />

                </Grid>

            </Grid>
        </>
    );

}

export default Surveys;