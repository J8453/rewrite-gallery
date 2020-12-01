

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	position: relative;
`

export const CardContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 50px;
	padding: 30px 0;
	overflow-x: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	
	& > div {
		margin: 10px 20px;
		flex: 0 0 400px;
	}
`

export const Image = styled.div`
	width: 400px;
	height: 300px;
	background-image: url(${p => p.src});
	background-position: center;
	background-size: cover;
`