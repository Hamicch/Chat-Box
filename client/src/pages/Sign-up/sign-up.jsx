import React from 'react';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

import Terms from '../../components/terms/terms';
import './sign-up.scss';

import {Link} from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            displayName: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
        }

        
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, phoneNumber, password, confirmPassword } = this.state;
 
        if(password !== confirmPassword) {
            alert("password don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithPhoneAndPassword(phoneNumber, password);

            await createUserProfileDocument({user, displayName});
            this.setState({
                displayName: '',
                phoneNumber: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.error(error);
        }

    };
    
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }
    render() {
        const { displayName, phoneNumber, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h1 className='title'>D-CHAT</h1>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='phone number'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={this.handleChange}
                        label='Phone number'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword} 
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <Terms/>
                    <br></br>
                    <br></br>
                    <div className='button-text'>
                     <CustomButton type='submit'>SIGN UP</CustomButton><span>or</span><Link className='text' to='/sign-in'>Log in</Link>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignUp;
