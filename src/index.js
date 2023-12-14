import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'survey-core/defaultV2.min.css';

// import { Model } from "survey-core";
// import { Survey } from "survey-react-ui";

// Adult
// import { chl } from './questions/chl';
// import { cvc } from './questions/cvc';
// import { his } from './questions/his';
// import { hyp } from './questions/hyp';
// import { lsf } from './questions/lsf';
// import { ast } from './questions/ast';
// import { can } from './questions/can';
// import { dib } from './questions/dib';
// import { con } from './questions/_con';
// import { epi } from './questions/epi';
// import { bmi } from './questions/bmi';
// import { vis } from './questions/vis';
// import { hea } from './questions/hea';
// import { mob } from './questions/mob';
// import { cog } from './questions/cog';
// import { upp } from './questions/upp';
// import { ins } from './questions/ins';
// import { pay } from './questions/pay';
// import { cvl } from './questions/cvl';
// import { dnc } from './questions/dnc';
// import { utz } from './questions/utz';
// import { abh } from './questions/abh';
// import { tlh } from './questions/tlh';
// import { pmd } from './questions/pmd';
// import { ims } from './questions/ims';
// import { ptc } from './questions/ptc';
// import { anx } from './questions/anx';
// import { dep } from './questions/dep';
// import { mhc } from './questions/mhc';
// import { phq } from './questions/phq';
// import { gad } from './questions/gad';
// import { cig } from './questions/cig';
// import { otb } from './questions/otb';
// import { aqs } from './questions/aqs';
// import { phy } from './questions/phy';
// import { wlk } from './questions/wlk';
// import { cpa } from './questions/cpa';
// import { slp } from './questions/slp';
// import { dnu } from './questions/dnu';
// import { cih } from './questions/cih';
// import { gni } from './questions/gni';
// import { mar } from './questions/mar';
// import { vet } from './questions/vet';
// import { nat } from './questions/nat';
// import { sch } from './questions/sch';
// import { emp } from './questions/emp';
// import { inc } from './questions/inc'; // needs universe logic
// import { foo } from './questions/foo'; // needs universe logic
// import { fds } from './questions/fds';
// import { hou } from './questions/hou';
// import { tbh } from './questions/tbh';
// import { tel } from './questions/tel';

// Child

// import { dld } from './questions/dld';
// import { imm } from './questions/imm';
// import { cvv } from './questions/cvv';
// import { hpv } from './questions/hpv';
// import { sdq } from './questions/sdq';
// import { sle } from './questions/sle';
// import { bly } from './questions/bly';
// import { tbi } from './questions/tbi';
// import { nhc } from './questions/nhc';
// import { scr } from './questions/scr';
// import { fem } from './questions/fem';

// import Home from "./pages/Home";
// import Dashboard from './pages/Dashboard';
// import CreatePatient from './pages/CreatePatient';
import Surveys from './pages/Surveys';

// const surveyJson = {
//   elements:  [
//   ...scr ]
// };

// const survey = new Model(surveyJson);

// const router = createBrowserRouter([
//   {errorElement: <h1>Error</h1>, children: [
//     {path: "/", index: true, element: <Home />},
//     {path: "/dashboard", element: <Dashboard />},
//     {path: "/patient/create", element: <CreatePatient />},
//     {path: "/patient/survey", element: <Surveys />}
//   ]}
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <h1>{[...chl, ...cvc, ...his, ...hyp, ...lsf, 
  //     ...ast, ...can, ...dib, ...con, ...epi, ...bmi, ...vis,
  //     ...hea, ...mob, ...cog, ...upp, ...ins, ...pay, ...cvl, ...dnc
  //     , ...utz, ...abh, ...tlh, ...pmd, ...ims, ...ptc, ...anx, ...dep, 
  //     ...mhc, ...phq, ...gad, ...cig, ...otb, ...aqs, ...phy, ...wlk,
  //     ...cpa, ...slp, ...dnu, ...cih, ...gni, ...mar, ...vet, ...nat,
  //     ...sch, ...emp, ...inc, ...foo, ...fds, ...hou, ...tbh, ...tel].length} questions created (adult)</h1>
  //   <h1>{[...his, ...ast, ...dib, ...bmi, ...vis, ...hea, ...mob, ...upp, ...cog, ...anx, ...dep,
  //   ...sch, ...ins, ...pay, ...cvl, ...dnc, ...utz, ...tlh, ...pmd, ...ptc, ...phy, ...slp, ...cih,
  //   ...nat, ...inc, ...foo, ...fds, ...hou, ...tel, ...dld, ...imm, ...cvv, 
  //   ...hpv, ...mhc, ...sdq, ...sle, ...bly, ...tbi, ...nhc, ...scr, ...fem].length} questions created (child)</h1>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <React.StrictMode>
    <div style={{minHeight: "100vh", minWidth: "100vw"}}>
      <Surveys />
    </div>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
