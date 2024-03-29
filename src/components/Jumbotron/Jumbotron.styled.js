import styled from 'styled-components';

const JumbotronWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  max-height: 600px;
  padding: 0 8px;
  position: relative;
  text-align: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    text-align: left;
  }
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
  font-size: 4rem;
  max-width: 500px;
  padding-left: 16px;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 2.8rem;
  }
`;

export { JumbotronWrapper, Overlay, Heading };
