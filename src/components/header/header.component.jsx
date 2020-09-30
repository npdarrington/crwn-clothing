import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
	<section className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<section className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{currentUser ? (
				<section className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</section>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
		</section>
	</section>
);

export default Header;
