import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInButtonContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({ email: '', password: ''});

	const handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = userCredentials;

		emailSignInStart(email, password);
	};

	const { email, password } = userCredentials;
	const handleChange = event => {
		const { value, name } = event.target;

		setCredentials({...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					id='email'
					value={email}
					handleChange={handleChange}
					label='email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					id='password'
					value={password}
					handleChange={handleChange}
					label='password'
					required
				/>
				<SignInButtonContainer>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton
						type='button'
						onClick={googleSignInStart}
						isGoogleSignIn>
						{' '}
						Sign in with Google{' '}
					</CustomButton>
				</SignInButtonContainer>
			</form>
		</SignInContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);