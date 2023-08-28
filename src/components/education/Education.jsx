import EducationForm from "../form/EducationForm";

export default function Education({schoolName, degree, graduationDate, handleSchoolName, handleDegree, handleGraduationDate}) {
    return (
        <section className="education">
            <h2>Education</h2>
            <EducationForm schoolName={schoolName} degree={degree} graduationDate={graduationDate} handleSchoolName={handleSchoolName} handleDegree={handleDegree} handleGraduationDate={handleGraduationDate}/>
        </section>
    )
}