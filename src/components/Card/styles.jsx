import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 18px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  border: ${ p => p.dashed ? `1px dashed ${p.theme.colors.shallowGrey}` : null };
  box-shadow: ${ p => p.noShadow ? 'none' : '2px 2px 8px 0 rgba(0, 0, 0, 0.1)' };
  position: relative;
`;
