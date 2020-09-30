import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

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
			<article className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						id='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						id='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle}>{' '}Sign in with Google{' '}</CustomButton>
				</form>
			</article>
		);
	}
}
