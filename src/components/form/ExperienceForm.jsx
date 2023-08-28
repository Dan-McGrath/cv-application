import { useState } from "react";
import { Input, Label } from "./input.jsx";
import Button from "./button.jsx";

export default function ExperienceForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [companyName, setCompanyname] = useState('');
    const [positionTitle, setPositionTitle] = useState('')
    const [responsibilities, setResponsibilities ] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted)
    };
    
    const editHandler = () => setIsSubmitted(!isSubmitted);

    const companyNameHandler = (e) => setCompanyname(e.target.value)
    const positionTitleHandler = (e) => setPositionTitle(e.target.value);
    const responsibilitiesHandler = (e) => setResponsibilities(e.target.value);
    const startDateHnadler = (e) => setStartDate(e.target.value);
    const endDateHnadler = (e) => setEndDate(e.target.value);

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
            <Input type='text' name='company-name' idName='company-name' text='Company Name' handler={companyNameHandler} value={companyName} />
            <Label htmlFor='position-title' text='Position Title:' />
            <Input type='text' name='position-title' idName='position-title' text='Position Title' handler={positionTitleHandler} value={positionTitle}  />
            <Label htmlFor='responsibilities' text='Responsibilities: ' />
            <textarea type='textarea' name='responsibilities' id='responsibilities' placeholder='Responsibilities...' onChange={responsibilitiesHandler} value={responsibilities}  />
            <Label htmlFor='start-date' text='Start Date: ' />
            <Input type='date' name='start-date' idName='start-date' text='00/00' handler={startDateHnadler} value={startDate}  />
            <Label htmlFor='end-date' text='End Date: ' />
            <Input type='date' name='end-date' idName='end=date' text='00/00' handler={endDateHnadler} value={endDate}  />
            <input type="submit" />
        </form>
    )
}   