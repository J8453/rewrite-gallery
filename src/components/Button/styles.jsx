import styled, { css } from 'styled-components';

export const buttonStyle = css`
	width: ${ p => p.wd ? `${p.wd}px` : '100px' };
	height: ${ p => p.hg ? `${p.hg}px` : '40px' };
	font-size: ${ p => p.fs ? p.fs : '1em' };
	font-weight: 500;
	color: ${ p => p.theme.colors.main };
	background-color: transparent;
	border: none;
	border-bottom: 5px solid transparent;

	&:hover {
		opacity: 0.6;
		border-bottom: 5px solid ${ p => p.theme.colors.main };
		cursor: pointer;
	}
`

export const Wrapper = styled.button`
	${buttonStyle}

	${ p => p.reverse
		? `
			color: white;
			&:hover {
				border-bottom: 5px solid white;
			}
		`
		: null
	}
`
