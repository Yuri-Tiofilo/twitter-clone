import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${({ outlined }) =>
    outlined ? 'transparent' : 'var(--twitter)'};
  color: ${({ outlined }) => (outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${({ outlined }) => (outlined ? '1px solid var(--twitter)' : 'none')};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: ${({ outlined }) =>
      outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
  }
`;
