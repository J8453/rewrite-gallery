import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  /* height: 300px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${ p => p.theme.colors.middleGrey };
  border-radius: 50%;
  border-top-color: ${ p => p.theme.colors.main };
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;