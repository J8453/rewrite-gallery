import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
`

export const Content = styled.div`
	height: calc(100vh - 60px);
	overflow: scroll;
	background-color: ${ p => p.theme.colors.bg };
	color: ${ p => p.theme.colors.textColor };
	padding: 40px 40px 0 40px;
`
