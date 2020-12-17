import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
	<section className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</section>
);

export default SignInAndSignUpPage;
