import React from "react";

import CustomButton from "../custom-button/custom-button.componenet";

import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';

class SingIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handlesubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handlesubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} lable='email' required />
                    {/* <label>Email</label> */}
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} lable='password' required />
                    {/* <label>Password</label> */}
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SingIn;