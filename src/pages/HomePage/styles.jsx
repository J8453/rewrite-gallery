

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: relative;
`

export const BackgroundPic = styled.div`
	background-image: url('./bg.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: 10%;
	left: 0;
	width: 60%;
	height: 50%;
`

export const Title = styled.h1`
	background-color: ${ p => p.theme.colors.main };
	color: white;
	font-size: 80px;
	z-index: 99;
	letter-spacing: 8px;
`
