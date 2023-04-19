import styled from 'styled-components';

const JumbotronWrapper = styled.div`
  height: 100vh;
  max-height: 500px;
  position: relative;
  width: 100%;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 3.6rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export { JumbotronWrapper, Overlay, Heading };
