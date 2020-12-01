import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: ${ p => p.theme.colors.main };
	color: white;
	position: relative;
`

export const Logo = styled.span`
	position: absolute;
	left: 20px;
	font-weight: 250;
	font-size: 1.5em;
	letter-spacing: 2px;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.1);
		text-shadow: 0px 0px 1px ${ p => p.theme.colors.shallowGrey };
	}
`

export const Enlarge = styled.span`
	font-weight: 800;
	font-size: 1.1em;
`

export const GreetingLine = styled.span`
	cursor: pointer;
`
