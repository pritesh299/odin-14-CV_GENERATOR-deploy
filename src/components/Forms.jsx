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
     {/*    <form id="ExperienceForm">
        <label>Company Name<br/><input type="text" id="experienceCompanyName" required /></label>
        <label>Position Details<br/><input type="text" id="experiencePositionTitle" required /></label>
        <label>Start Date<br/><input type="date" id="experienceStartDate" required /></label>
        <label>End Date<br/><input type="date" id="experienceEndDate" required /></label>
        <label>Description<br/><input type="text" id="experienceDescription" required /></label>
      </form> */}
    <>
      <form id="ExperienceForm">
        <div className="input-container">
          <input type="text" id="experienceCompanyName" placeholder=" " className='input' required />
          <div className="cut"></div>
          <label htmlFor="experienceCompanyName" className="placeholder">Company Name</label>
        </div>
        <div className="input-container">
          <input type="text" id="experiencePositionTitle" placeholder=" " className='input' required />
          <div className="cut"></div>
          <label htmlFor="experiencePositionTitle" className="placeholder">Position Details</label>
        </div>
        <div className="input-container">
          <input type="date" id="experienceStartDate" placeholder=" " className='input' required />
          <div className="cut"></div>
          <label htmlFor="experienceStartDate" className="placeholder">Start Date</label>
        </div>
        <div className="input-container">
          <input type="date" id="experienceEndDate" placeholder=" " className='input' required />
          <div className="cut"></div>
          <label htmlFor="experienceEndDate" className="placeholder">End Date</label>
        </div>
        <div className="input-container">
          <input type="text" id="experienceDescription" placeholder=" " className='input' required />
          <div className="cut"></div>
          <label htmlFor="experienceDescription" className="placeholder">Description</label>
        </div>
      </form>
    </>

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
     <form  id="EducationForm">
  <div class="input-container ">
    <input id="EducationSchoolName" class="input" type="text" placeholder=" " required />
    <div class="cut"></div>
    <label for="EducationSchoolName" class="placeholder">School Name</label>
  </div>
  <div class="input-container ">
    <input id="EducationDegree" class="input" type="text" placeholder=" " />
    <div class="cut"></div>
    <label for="EducationDegree" class="placeholder">Degree</label>
  </div>
  <div class="input-container ">
    <input id="EducationStartDate" class="input" type="date" placeholder=" " />
    <div class="cut"></div>
    <label for="EducationStartDate" class="placeholder">Start Date</label>
    </div>
    <div class="input-container ">
    <input id="EducationEndDate" class="input" type="date" placeholder=" " />
    <div class="cut"></div>
    <label for="EducationEndDate" class="placeholder">End Date</label>
  </div>

  <div class="input-container ">
    <input id="EducationLocation" class="input" type="input" placeholder=" " />
    <div class="cut cut-short"></div>
    <label for="EducationLocation" class="placeholder">Location</label>
  </div>
  </form>
      <div id="EducationForm_buttonContainer">
        <button type="submit" id="saveEducation" onClick={save}>Save</button>
        <button type="button" id="CancelEducation" onClick={Cancel}>Cancel</button>
        </div>
      </>
    );
  }
  

