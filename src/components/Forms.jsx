import { useState } from 'react';
import 'primeicons/primeicons.css';
import { ResumeInfo } from "./Resume";

export  function Preform({title,remove,visibility,changeVisibility}) {
  
    return (
        <div className="preform" >
            <h3>{title}</h3>
            <div className='preform_buttonContainer'>
            { visibility ? <button  onClick={()=>{changeVisibility()}}><i className='pi pi-eye'></i></button> :<button  onClick={()=>{changeVisibility()}}><i className=' pi pi-eye-slash'></i></button>}
            <button onClick={remove}> <i className='pi pi-delete-left'></i></button> 
            </div>
        </div>
    );
}


export function ExperienceForm({ save, Cancel }) {
    return (
      <>
        <form id="ExperienceForm">
        <label>Company Name<input type="text" id="experienceCompanyName" required /></label>
        <label>Position Details<input type="text" id="experiencePositionTitle" required /></label>
        <label>Start Date<input type="date" id="experienceStartDate" required /></label>
        <label>End Date<input type="date" id="experienceEndDate" required /></label>
        <label>Description<input type="text" id="experienceDescription" required /></label>
      </form>
      <div id="ExperienceForm_buttonContainer">
        <button type="submit" id="saveExperience" onClick={save}>Save</button>
        <button type="button" id="CancelExperience" onClick={Cancel}>Cancel</button>
        </div> 
      </>
    );
  }
  
  export function EducationForm({ save, Cancel }) {
    return (
      <>
      <form id="EducationForm">
        <label>School Name<input type="text" id="EducationSchoolName" required /></label>
        <label>Degree<input type="text" id="EducationDegree" required /></label>
        <label>Start Date<input type="date" id="EducationStartDate" required /></label>
        <label>End Date<input type="date" id="EducationEndDate" required /></label>
        <label>Location<input type="text" id="EducationLocation" required /></label>
      </form>
      <div id="EducationForm_buttonContainer">
        <button type="submit" id="saveEducation" onClick={save}>Save</button>
        <button type="button" id="CancelEducation" onClick={Cancel}>Cancel</button>
        </div>
      </>
    );
  }
  