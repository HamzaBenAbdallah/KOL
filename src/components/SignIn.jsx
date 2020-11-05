import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from './FormInput';
import Button from './Button';

class SignIn extends Component {
    state = { email: '', password: '' };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='password'
                        required
                    />
                    <Button type='submit'>Sing In</Button>
                </form>
            </div>
        );
    }
}

export default SignIn;
