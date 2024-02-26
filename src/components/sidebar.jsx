// components/Education.jsx
import { Preform, ExperienceForm, EducationForm } from "./Forms.jsx"; // Fix the typo in the import statement
import 'primeicons/primeicons.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ProfessionalDetails({ ExperienceList, setEducationList, setExperienceList, EducationList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const Onsave = (e) => {
    e.preventDefault();
    if (e.target.id === "saveEducation") {
      setEducationList((prevEducationList) => [...prevEducationList, {
        schoolName: document.getElementById("EducationSchoolName").value,
        degree: document.getElementById("EducationDegree").value,
        endDate: document.getElementById("EducationEndDate").value,
        startDate: document.getElementById("EducationStartDate").value,
        location: document.getElementById("EducationLocation").value,
        id: uuid(),
        visibility: true,
      }]);
    } else if (e.target.id === "saveExperience") {
      setExperienceList((prevExperienceList) => [...prevExperienceList, {
        companyName: document.getElementById("ExperienceCompanyName").value,
        positionTitle: document.getElementById("ExperiencePositionTitle").value,
        endDate: document.getElementById("ExperienceEndDate").value,
        startDate: document.getElementById("ExperienceStartDate").value,
        description: document.getElementById("ExperienceDescription").value,
        id: uuid(),
        visibility: true,
      }]);
    }
    toggleForm();
  };

  const OnCancel = (e) => {
    e.preventDefault();
    toggleForm();
  };

  const OnDelete = (id) => {
    if (activeIndex === 1) {
      setEducationList(prevEducationList => prevEducationList.filter(item => item.id !== id));
    } else if (activeIndex === 2) {
      setExperienceList(prevExperienceList => prevExperienceList.filter(item => item.id !== id));
    }
  };

  const changeVisibility = (id, activeIndex) => {
    if (activeIndex === 1) {
      setEducationList(prevEducationList => prevEducationList.map(item => {
        if (item.id === id) {
          return { ...item, visibility: !item.visibility };
        }
        return item;
      }));
    } else if (activeIndex === 2) {
      setExperienceList(prevExperienceList => prevExperienceList.map(item => {
        if (item.id === id) {
          return { ...item, visibility: !item.visibility };
        }
        return item;
      }));
    }
  };

  function RenderList(index) {
    return (
      <>
        {(index === 1) ? (
          EducationList.map(item => (
            <Preform remove={() => { OnDelete(item.id) }} title={item.schoolName} visibility={item.visibility} changeVisibility={() => { changeVisibility(item.id, activeIndex) }} />
          ))
        ) : (<></>)}

        {(index === 2) ?
          ExperienceList.map(item => (
            <Preform remove={() => { OnDelete(item.id) }} title={item.companyName} visibility={item.visibility} changeVisibility={() => { changeVisibility(item.id, activeIndex) }} />
          )) : (<></>)}
      </>
    );
  }
  return (
    <>
      <div id="Education">
        <div id="Education_head">
          <h2>Education</h2>
          <button
            className="head_button"
            style={{ backgroundColor: 'white' }}
            onClick={() => toggleIndex(1)}
          >
            <i className={activeIndex === 1 ?  "pi pi-angle-up" : " pi pi-angle-down"}></i>
          </button>
        </div>

        {activeIndex === 1 && (
          <>
            {showForm ? (
              <EducationForm save={Onsave} Cancel={OnCancel} />
            ) : (
              <>
                {RenderList(1)}

                <div id="Education_button"><button
                  style={{ backgroundColor: 'white' }}
                  onClick={() => toggleForm()}
                >
                  Add Education
                </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <div id="Experience">
        <div id="Experience_head">
          <h2>Experiences</h2>
          <button
            className="head_button"
            style={{ backgroundColor: 'white' }}
            onClick={() => toggleIndex(2)}
          >
              <i className={activeIndex === 2?  "pi pi-angle-up" : " pi pi-angle-down"}></i>

          </button>
        </div>

        {activeIndex === 2 && (
          <>
            {showForm ? (
              <ExperienceForm remove={OnDelete} save={Onsave} Cancel={OnCancel} />
            ) : (
              <>
                {RenderList(2)}

                <div id="Experience_button">
                <button
                  style={{ backgroundColor: 'white' }}
                  onClick={() => toggleForm()}
                >
                  Add Experience
                </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}


// components/PersonalDetails.jsx
function PersonalDetails({ personalInfo, setPersonalInfo }) {

  const changeDetails = (e) => {
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      name: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      address: document.getElementById("address").value,
    }));
  }

  return (
    <div id="PersonalDetailsCard">
      <h2>Personal Details</h2>

      <form id="PersonalDetailsForm">
<div class="input-container ">
  <input onChange={changeDetails} id="fullName" type="text" class="input" value={personalInfo.name} placeholder=" " />
  <div class="cut"></div>
  <label for="fullName" class="placeholder">Full Name</label>
</div>
<div class="input-container ">
  <input onChange={changeDetails} id="email" type="text" class="input" value={personalInfo.email} placeholder=" " />
  <div class="cut"></div>
  <label for="email" class="placeholder">Email</label>
</div>
<div class="input-container ">
  <input onChange={changeDetails} id="phoneNumber" type="text" class="input" value={personalInfo.phoneNumber} placeholder=" " />
  <div class="cut cut-short"></div>
  <label for="phoneNumber" class="placeholder">Phone number</label>
</div>
<div class="input-container ">
  <input onChange={changeDetails} id="address" type="text" class="input" value={personalInfo.address} placeholder=" " />
  <div class="cut cut-short"></div>
  <label for="address" class="placeholder">Address </label>
</div>
</form>
    </div>
  );
}

export default PersonalDetails;


export {
  PersonalDetails,
  ProfessionalDetails
};

