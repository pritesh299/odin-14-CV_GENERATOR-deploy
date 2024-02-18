// components/Education.jsx
import { Preform, ExperienceForm, EducationForm } from "./Forms.jsx"; // Fix the typo in the import statement
import CIcon from '@coreui/icons-react';
import { cilArrowBottom, cilArrowTop } from '@coreui/icons';
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
        companyName: document.getElementById("experienceCompanyName").value,
        positionTitle: document.getElementById("experiencePositionTitle").value,
        endDate: document.getElementById("experienceEndDate").value,
        startDate: document.getElementById("experienceStartDate").value,
        description: document.getElementById("experienceDescription").value,
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
        <div id="education_head">
          <h2>Education</h2>
          <button
            className="head_button"
            style={{ backgroundColor: 'white' }}
            onClick={() => toggleIndex(1)}
          >
            <CIcon
              className="text-primary"
              icon={activeIndex === 1 ? cilArrowTop : cilArrowBottom}
              size="sm"
            />
          </button>
        </div>

        {activeIndex === 1 && (
          <>
            {showForm ? (
              <EducationForm save={Onsave} Cancel={OnCancel} />
            ) : (
              <>
                {RenderList(1)}
                <button
                  style={{ backgroundColor: 'white' }}
                  onClick={() => toggleForm()}
                >
                  Add Education
                </button>
              </>
            )}
          </>
        )}
      </div>

      <div id="experience">
        <div id="experience_head">
          <h2>Experiences</h2>
          <button
            className="head_button"
            style={{ backgroundColor: 'white' }}
            onClick={() => toggleIndex(2)}
          >
            <CIcon
              className="text-primary"
              icon={activeIndex === 2 ? cilArrowTop : cilArrowBottom}
              size="sm"
            />
          </button>
        </div>

        {activeIndex === 2 && (
          <>
            {showForm ? (
              <ExperienceForm remove={OnDelete} save={Onsave} Cancel={OnCancel} />
            ) : (
              <>
                {RenderList(2)}
                <button
                  style={{ backgroundColor: 'white' }}
                  onClick={() => toggleForm()}
                >
                  Add Experience
                </button>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

function Options() {
  return (
    <>
      <div id="optionCard">
        <button style={{ backgroundColor: 'red' }}>Clear</button>
        <button style={{ backgroundColor: 'white' }}>Load Example</button>
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
      <form>
        <label htmlFor="fullName">Full Name: <input onChange={changeDetails} id="fullName" type="text" value={personalInfo.name} /></label>
        <label htmlFor="email">Email: <input onChange={changeDetails} id="email" type="text" value={personalInfo.email} /></label>
        <label htmlFor="phoneNumber">Phone number: <input onChange={changeDetails} id="phoneNumber" type="text" value={personalInfo.phoneNumber} /></label>
        <label htmlFor="address">Address: <input onChange={changeDetails} id="address" type="text" value={personalInfo.address} /></label>
      </form>
    </div>
  );
}

export default PersonalDetails;


export {
  PersonalDetails,
  Options,
  ProfessionalDetails
};
