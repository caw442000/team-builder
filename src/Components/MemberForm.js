import React, { useState } from "react"


const MemberForm = props => {
    
    const [member, setMember] = useState({
        name: "",
        email:"",
        role: ""
    });



    const handleChanges = e => {

        setMember({ ...member, [e.target.name]: e.target.value });

    }

    const submitForm = e => {

        e.preventDefault();
        props.addNewMember(member);

        setMember({name: "", email: "", role: ""})

    };


    return(

        <form onSubmit= {submitForm}>

            <label htmlFor="name">Member Name</label>
            <input 
                id="name" 
                name="name" 
                type="text"
                onChange={handleChanges}
                placeholder="Enter Member Name"
                value ={member.name}
            />

            <label htmlFor="email">Member Email</label>
            <input 
                id="email" 
                name="email" 
                type="email"
                onChange={handleChanges}
                placeholder="Enter Member Email"
                value ={member.email}
            />


            <label htmlFor="name">Member Role</label>
            <input 
                id="role" 
                name="role" 
                type="text"
                onChange={handleChanges}
                placeholder="Enter Member Role"
                value ={member.role}
            />

            <button type="submit">Add Member</button>

        </form>

    );

};

export default MemberForm;