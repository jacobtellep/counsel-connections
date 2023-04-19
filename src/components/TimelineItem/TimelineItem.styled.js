import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Date = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
  bottom: 10%;
  font-size: 2.2rem;
  left: ${({ mirror }) => (mirror ? '26%' : 'auto')};
  position: absolute;
  right: ${({ mirror }) => (mirror ? 'auto' : '26%')};
`;

const DescriptionContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  text-align: right;
  width: 490px;
`;

const EventGuests = styled.h2`
  color: ${(props) => props.theme.colors.primaryLight};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  width: 360px;
`;

const GuestContainer = styled(DescriptionContainer)`
  align-items: ${(props) => (props.mirror ? 'flex-start' : 'flex-end')};
  text-align: ${(props) => (props.mirror ? 'left' : 'right')};
`;

const LineDateContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  position: relative;
  width: 100%;
`;

const ImageDescriptionContainer = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  flex-direction: ${(props) => (props.mirror ? 'row-reverse' : 'row')};
  justify-content: center;
  position: relative;
  width: 100%;
`;

const ImageContainer = styled.div`
  aspect-ratio: ${(props) => props.width / props.height};
  border-radius: 20px;
  max-width: 854px;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export {
  Container,
  Date,
  DescriptionContainer,
  GuestContainer,
  EventGuests,
  LineDateContainer,
  ImageDescriptionContainer,
  ImageContainer,
};
