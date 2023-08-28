import { useState } from "react";
import Personal from "./personal/Personal.jsx";
import Experience from "./experience/Experience.jsx";
import Education from './education/Education.jsx';
import Button from "./form/button.jsx";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [companyName, setCompanyname] = useState('');
  const [positionTitle, setPositionTitle] = useState('')
  const [responsibilities, setResponsibilities ] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const companyNameHandler = (e) => setCompanyname(e.target.value)
  const positionTitleHandler = (e) => setPositionTitle(e.target.value);
  const responsibilitiesHandler = (e) => setResponsibilities(e.target.value);
  const startDateHandler = (e) => setStartDate(e.target.value);
  const endDateHandler = (e) => setEndDate(e.target.value);
  const schoolNameHandler = (e) => setSchoolName(e.target.value);
  const degreeHandler = (e) => setDegree(e.target.value);
  const graduationDateHandler = (e) => setGraduationDate(e.target.value)


  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted)
  }

  const editHandler = () => {
    setIsSubmitted(!isSubmitted)
  }
  
  return (
    isSubmitted ? 
    <>
      <p>{firstName} {lastName}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{schoolName}</p>
      <p>{degree}</p>
      <p>{graduationDate}</p>
      <p>{companyName}</p>
      <p>{positionTitle}</p>
      <p>{responsibilities}</p>
      <p>{startDate}-{endDate}</p>
      <Button onClick={editHandler}/>
    </> :
    <>
    <Personal firstName={firstName} lastName={lastName} phone={phone} email={email} handleFirstName={handleFirstName} handleLastName={handleLastName} handleEmail={handleEmail} handlePhone={handlePhone}/>
    <Education schoolName={schoolName} degree={degree} graduationDate={graduationDate} handleSchoolName={schoolNameHandler} handleDegree={degreeHandler} handleGraduationDate={graduationDateHandler}/>
    <Experience companyName={companyName} positionTitle={positionTitle} responsibilities={responsibilities} startDate={startDate} endDate={endDate} handleCompanyName={companyNameHandler} handlePositionTitle={positionTitleHandler} handleResponsibilities={responsibilitiesHandler} handleStartDate={startDateHandler} handleEndDate={endDateHandler}/>
    <Button className='btn-submit' onClick={submitHandler} text='Submit' />
  </>
  );
}

export default App;
