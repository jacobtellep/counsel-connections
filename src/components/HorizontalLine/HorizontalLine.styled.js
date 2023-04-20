import styled from 'styled-components';

const Line = styled.div`
  background-color: ${(props) => props.theme.colors.primaryLight};
  height: ${(props) => (props.height ? props.height : '2px')};
  width: ${(props) => (props.width ? props.width : '100%')};

  @media (max-width: 768px) {
    height: ${(props) => (props.list ? props.height : '2px')};
    width: ${(props) => (props.list ? props.width : '100px')};
  }
`;

export default Line;
