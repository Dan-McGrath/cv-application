
import PersonalForm from "../form/PersonalForm.jsx"


export default function Personal({ firstName, lastName, phone, email, handleFirstName, handleLastName, handleEmail, handlePhone}) {
    return (
        <section className="personal">
                <PersonalForm firstName={firstName} lastName={lastName} phone={phone} email={email} handleFirstName={handleFirstName} handleLastName={handleLastName} handleEmail={handleEmail} handlePhone={handlePhone}/>
        </section>
    )
}