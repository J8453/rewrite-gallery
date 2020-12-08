

import styled from 'styled-components';

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	width: 100%;
	position: relative;
	padding: 0 40px;
`

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: flex-start;

	width: 100%;
	height: 100%;
	padding: 30px 0;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	
	& > div {
		margin-top: 2%;
		margin-right: 2%;
		flex: 0 0 31%;
	}
`

// export const Image = styled.div`
// 	width: 400px;
// 	height: 300px;
// 	background-image: url(${p => p.src});
// 	background-position: center;
// 	background-size: cover;
// `