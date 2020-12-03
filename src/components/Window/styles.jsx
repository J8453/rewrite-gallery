import styled from 'styled-components';

import { Wrapper } from '../Card/styles';

export const WindowWrapper = styled.div`
	background-color: #00000099;
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: 999;

	display: flex;
	justify-content: center;
	align-items: center;

	& ${Wrapper} {
		background-color: white;
        opacity: 0.9;
        flex: 0 1 500px;
        min-height: 50vh;
        border-radius: 5px; 
        box-shadow: 3px 3px 10px #00000099;

        display: flex;
        flex-wrap: wrap;
	}
`
