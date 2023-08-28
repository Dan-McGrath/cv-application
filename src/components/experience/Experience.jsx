import ExperienceForm from "../form/ExperienceForm.jsx"

export default function Experience({companyName, positionTitle, responsibilities, startDate, endDate, handleCompanyName, handlePositionTitle, handleResponsibilities, handleStartDate, handleEndDate}) {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <ExperienceForm companyName={companyName} positionTitle={positionTitle} responsibilities={responsibilities} startDate={startDate} endDate={endDate} handleCompanyName={handleCompanyName} handlePositionTitle={handlePositionTitle} handleResponsibilities={handleResponsibilities} handleStartDate={handleStartDate} handleEndDate={handleEndDate}/>
        </section>
    )
}