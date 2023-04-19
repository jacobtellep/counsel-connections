import styled from 'styled-components';

const JumbotronWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

export { JumbotronWrapper, Overlay, Heading };
