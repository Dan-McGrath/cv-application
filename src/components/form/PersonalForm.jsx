
import { useState } from "react";
import { Input, Label } from "./input.jsx";
import Button from "./button.jsx";

export default function PersonalForm({ firstName, lastName, phone, email, handleFirstName, handleLastName, handleEmail, handlePhone}) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleEdit = () => {
        setIsSubmitted(!isSubmitted)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted)

    }

    return (isSubmitted ? 
            <>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <Button onClick={handleEdit}/>
            </>  :

            <form onSubmit={handleSubmit}>
                <Label htmlFor='first-name' text="First Name: " ></Label>
                <Input type='text' name='first-name' idName='first-name' text='First Name' handler={handleFirstName} value={firstName}/>
                <Label htmlFor='last-name' text="Last Name: "></Label>
                <Input  type='text' name='last-name' idName='last-name' text='Last Name' handler={handleLastName} value={lastName}/>
                <Label htmlFor='email' text="Email: "></Label>
                <Input  type='email' name='email' idName='email' text='Email@email.com' handler={handleEmail} value={email}/>
                <Label htmlFor='phone' text="Phone Number: "></Label>
                <Input  type='tel' name='phone' idName='phone' text='123-456-7890' handler={handlePhone} value={phone}/>
                <input type="submit"/>
            </form>

     );

}



