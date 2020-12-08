import styled from 'styled-components';

const Mask = styled.div`
	position: absolute;
	background-color: rgba(256, 256, 256, 0.6);
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	opacity: 0;
	transition: all 0.1s;

	color: white;
	text-decoration: none;

	&:hover {
		cursor: pointer;
    opacity: 1;
    text-shadow: 1px 1px 3px #00000099;
	}
`

export default Mask;