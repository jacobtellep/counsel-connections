import styled from 'styled-components';

const Container = styled.div`
  margin: 2px;
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PaginationBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.disabled
      : props.theme.colors.primaryLight};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1rem;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;

  &:hover {
    color: ${(props) =>
      props.disabled
        ? props.theme.colors.disabledLight
        : props.theme.colors.primaryHover};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { ButtonContainer, Container, PaginationBtn, Wrapper };
