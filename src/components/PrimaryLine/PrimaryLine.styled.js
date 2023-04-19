import styled from 'styled-components';

const Line = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    height: ${(props) => props.short ? '230px' : '360px'};
    width: 8px;
`;

export default Line;