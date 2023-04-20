import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  height: 200px;
  justify-content: center;
  width: 100%;
`;

export default Container;
