import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`

export const Button = styled.div`
	height: 26px;
	width: 26px;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.3);
	color: white;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	margin-right: 10px;
`

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	border-radius: 8px;
	background: linear-gradient(to bottom, rgba(51, 51, 51, 0.15) -45%, rgba(51, 51, 51, 0.9) 89%);
	opacity: 0;
	transition: opacity 0.2s;

	&:hover {
		opacity: 1;
	}

	&:hover ${Button} {
		cursor: pointer;
	}

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Picture = styled.div`
	background-image: url(${p => p.url});
	background-size: contain;
	background-repeat: no-repeat;
	background-position-x: center;
	padding-bottom: calc(1/ 1.41451612903 * 100%);
`

export const InfoWrapper = styled.div`
	padding: 20px;
	
	& div {
		color: white;
	}
`