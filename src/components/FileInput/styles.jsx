import styled from 'styled-components';
import { buttonStyle } from '../Button/styles';

export const Wrapper = styled.div`
	& input {
		display: none;
	}
`

export const Label = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;

	${buttonStyle}
`