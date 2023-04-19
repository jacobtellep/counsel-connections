import styled from 'styled-components';

const JumbotronWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  max-height: 600px;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Heading = styled.h1`
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  font-size: 3.6rem;
  max-width: 500px;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 2.2rem;
  }
`;

export { JumbotronWrapper, Overlay, Heading };
