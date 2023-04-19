import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Timeline = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.breakpoints.xLarge};
  width: 100%;
`;

export { Container, Timeline };
