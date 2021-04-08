import React from 'react';

import './form-input.styles.scss';
import {
	FormGroupContainer,
	FormInputContainer,
	FormInputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<FormGroupContainer>
		<FormInputContainer onChange={handleChange} {...otherProps} />
		{label ? (
			<FormInputLabel
				className={`${
					otherProps.value.length ? 'shrink' : ''
				} form-input-label`}>
				{label}
			</FormInputLabel>
		) : null}
	</FormGroupContainer>
);

export default FormInput;
