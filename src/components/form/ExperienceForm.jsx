import { useState } from "react";
import { Input, Label } from "./input.jsx";
import Button from "./button.jsx";

export default function ExperienceForm({companyName, positionTitle, responsibilities, startDate, endDate, handleCompanyName, handlePositionTitle, handleResponsibilities, handleStartDate, handleEndDate}) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted)
    };
    
    const editHandler = () => setIsSubmitted(!isSubmitted);

    return (
        isSubmitted ? 
        <>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        <p>{responsibilities}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        <Button onClick={editHandler}/>
        </> :
        <form onSubmit={submitHandler}>
            <Label htmlFor='company-name' text='Company Name'/>
            <Input type='text' name='company-name' idName='company-name' text='Company Name' handler={handleCompanyName} value={companyName} />
            <Label htmlFor='position-title' text='Position Title:' />
            <Input type='text' name='position-title' idName='position-title' text='Position Title' handler={handlePositionTitle} value={positionTitle}  />
            <Label htmlFor='responsibilities' text='Responsibilities: ' />
            <textarea type='textarea' name='responsibilities' id='responsibilities' placeholder='Responsibilities...' onChange={handleResponsibilities} value={responsibilities}  />
            <Label htmlFor='start-date' text='Start Date: ' />
            <Input type='date' name='start-date' idName='start-date' text='00/00' handler={handleStartDate} value={startDate}  />
            <Label htmlFor='end-date' text='End Date: ' />
            <Input type='date' name='end-date' idName='end=date' text='00/00' handler={handleEndDate} value={endDate}  />
            <input type="submit" />
        </form>
    )
}   