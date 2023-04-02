import { Logo, FormRow, Alert } from "../components/index"
import { useState, useEffect } from "react";
import Wrapper from '../assets/wrapper/RegisterPage'


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}


const Register = () => {

    const [values, setValues] = useState(initialState);
    //global state and use navigate

    const handleChange = (e) => {
        console.log(e.target)
    }

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
        // here it means when toogle member executes it saves the old data using ...values and make isMember from true to false or false to true
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <>
            <Logo />
            <Wrapper>
                <form className="form" onSubmit={onSubmit}>
                    <h3>{values.isMember ? "Login" : "Register"}</h3>
                    {values.showAlert && <Alert />}

                    {!values.isMember && (
                        <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
                    )}
                    {/* here if isMember false it shows the name input otherwise it just shows the email and password */}

                    {/*  email */}
                    <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />

                    {/*  password */}
                    <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />


                    <button type="submit" className="btn btn-block">Login</button>
                    <p>
                        {values.isMember ? 'Not a member? Please' : 'Already a member?'}
                        <button type="button" onClick={toggleMember} className="member-btn" >
                            {values.isMember ? "Register" : "Login"}
                        </button>
                    </p>
                </form>

            </Wrapper>
        </>
    )
}
export default Register