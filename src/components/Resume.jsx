import React from 'react';

function RenderExperience({ExperienceList}) {
  return (
    <>
    {ExperienceList.map(item=>(
    (item.visibility)?
    (<div className="experience-info">
    <div className="experience-info-group">
      <p className="dates">{item.startDate} - {item.endDate}</p>
      <p>{item.location}</p>
    </div>
    <div className="experience-info-group">
      <p className="experience-info-companyName">{item.companyName}</p>
      <p className="experience-info-positionTitle">{item.positionTitle}</p>
      <p className="experience-info-description">{item.description}</p>
    </div>
    </div>):(<></>)
    ))}
    </>
  );
}

function RenderEducation({ EducationList }) {
   
  return (
     <>

      {EducationList.map(item=>(
       (item.visibility)?(
       <div className="education-info">
       <div  className="education-info-group">
       <p className="dates">{item.startDate} - {item.endDate}</p>
       <p>{item.location}</p>
       <p className="education-info-schoolName">{item.schoolName}</p>
       <p className="education-info-degree">{item.degree}</p>
       </div>
       </div>):(<></>)
      ))}

     </>
  );
}

function ResumeInfo({ ExperienceList, EducationList }) {

 function isListEmpty(list){
  let count=0;
    list.map(item=>{
      if(item.visibility===true){count++}
 })
   
 return(count===0)

 }

  return (
    <div id="ResumeInfo">
      <div className="education-info-section resume-section">
        {(isListEmpty(EducationList))?(<></>):(<h3 className="header-text">Education</h3>)}
        <RenderEducation EducationList={EducationList} />
      </div>
      <div className="experience-info-section resume-section">
      {(isListEmpty(ExperienceList))?(<></>):(<h3 className="header-text">Professional Experience</h3>)}
    
        <RenderExperience ExperienceList={ExperienceList}/>
      </div>
    </div>
  );
}

function ResumeTop({ personalInfo }) {
  return (
    <div className="resume top">
      <div className="personal-info">
        <h1 className="resume-name">{personalInfo.name}</h1>
        <div className="contact-info">
          <div><i className="fa-solid fa-envelope"></i><span>{personalInfo.email}</span></div>
          <div><i className="fa-solid fa-phone"></i><span>{personalInfo.phoneNumber}</span></div>
          <div><i className="fa-solid fa-location-dot"></i><span>{personalInfo.address}</span></div>
        </div>
      </div>
    </div>
  );
}

export {
  ResumeInfo,
  ResumeTop
};
