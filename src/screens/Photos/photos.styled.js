import styled from 'styled-components';

const Container = styled.div`
  margin: 2px;
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

export { Container };
