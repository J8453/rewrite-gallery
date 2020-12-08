import styled from 'styled-components';

export const SideWrapper = styled.div`
	flex: 1 0 320px;

	display: flex;
	flex-wrap: wrap;
	/* flex-direction: column; */
	/* justify-content: center; */
	align-items: center;

	background-color: #00000099;
	color: white;
	
	& > * {
		flex: 0 0 100%;

		display: flex;
		justify-content: center;
	}
`

export const PortraitWrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;

	& > * {
		margin-top: 10px;
		text-align: center;
	}
`

export const CoverContainer = styled.div`
	width: 250px;
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	position: relative;  /*mask的母元素*/
`

export const Cover = styled.img`
	max-height: 100%;
`

export const Introduction = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	margin-bottom: 20px;

	& > * {
		margin-top: 5px;
	}

	& > h1 {
		flex-basis: 100%;
    	font-size: 1.5em;
	}

	& > p {
		flex-basis: 100%;
	}
`

export const EditIcon = styled.span`
	position: absolute;
	right: 0px;
	font-size: 1.2em;
	cursor: pointer;
`