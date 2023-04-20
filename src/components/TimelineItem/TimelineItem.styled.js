import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
`;

const Date = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 1201px) {
    bottom: 10%;
    left: ${({ mirror }) => (mirror ? '26%' : 'auto')};
    position: absolute;
    right: ${({ mirror }) => (mirror ? 'auto' : '26%')};
  }
`;

const DescriptionContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 490px;
  row-gap: 1rem;
  text-align: right;
  width: 100%;
`;

const EventGuests = styled.h2`
  color: ${(props) => props.theme.colors.primaryLight};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  max-width: 360px;
  width: 100%;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

const GuestContainer = styled(DescriptionContainer)`
  align-items: ${(props) => (props.mirror ? 'flex-start' : 'flex-end')};
  text-align: ${(props) => (props.mirror ? 'left' : 'right')};

  @media (max-width: 1200px) {
    align-items: center;
    text-align: center;
  }
`;

const LineDateContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  position: relative;
  row-gap: 20px;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1201px) {
    flex-direction: row;
  }
`;

const ImageDescriptionContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1201px) {
    column-gap: 1rem;
    flex-direction: ${(props) => (props.mirror ? 'row-reverse' : 'row')};
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: ${(props) => props.width / props.height};
  border-radius: 20px;
  max-width: 854px;
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1200px) {
    margin-top: 20px;
  }

  @media (max-width: 430px) {
    border-radius: 8px;
  }
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
