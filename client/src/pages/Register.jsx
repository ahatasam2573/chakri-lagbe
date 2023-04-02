import { Logo, FormRow } from "../components/index"
import { useState, useEffect } from "react";
import Wrapper from '../assets/wrapper/RegisterPage'


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}


const Register = () => {

    const [values, setValues] = useState(initialState);
    //global state and use navigate

    const handleChange = (e) => {
        console.log(e.target)
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
                    <h3>Login</h3>
                    {/* name input */}
                    <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />

                    {/*  email */}
                    <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />

                    {/*  password */}
                    <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />


                    <button type="submit" className="btn btn-block">Login</button>
                </form>

            </Wrapper>
        </>
    )
}
export default Register