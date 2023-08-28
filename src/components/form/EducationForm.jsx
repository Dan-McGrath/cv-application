import { useState } from "react";
import { Input, Label } from "./input.jsx";
import Button from "./button.jsx";

export default function EducationForm({schoolName, degree, graduationDate, handleSchoolName, handleDegree, handleGraduationDate}) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted)
    }

    const editHandler = (e) => {
        e.preventDefault(e);
        setIsSubmitted(!isSubmitted);
    }

    return (
        isSubmitted ? 
        <>
            <p>{schoolName}</p>
            <p>{degree}</p>
            <p>{graduationDate}</p>
            <Button onClick={editHandler} />
        </> :
        <form onSubmit={submitHandler}>
            <Label htmlFor='school-name' text='School Name: ' />
            <Input type='text' name='school-name' idName='school-name' text='School Name' value={schoolName} handler={handleSchoolName}/>
            <Label htmlFor='degree' text='Degree: ' />
            <Input type='text' name='degree' idName='degree' text='Degree Name' value={degree} handler={handleDegree}/>
            <Label htmlFor='graduation-date' text='Graduation Date: ' />
            <Input type='date' name='graduation-date' idName='graduation-date' value={graduationDate} handler={handleGraduationDate}/>
            <input type='submit' />
        </form>        
    )
}