import {
  Container,
  Date,
  DescriptionContainer,
  EventGuests,
  GuestContainer,
  LineDateContainer,
  ImageDescriptionContainer,
  ImageContainer,
} from './TimelineItem.styled';
import HorizontalLine from '@/components/HorizontalLine';
import Image from '@/components/Image';
import PrimaryLine from '@/components/PrimaryLine';

const TimelineItem = ({ date, eventGuests, id, image }) => {
  const mirror = id % 2 === 0;

  return (
    <Container>
      <LineDateContainer>
        <PrimaryLine isShort={mirror} />
        <Date mirror={mirror}>{date}</Date>
      </LineDateContainer>
      <ImageDescriptionContainer mirror={mirror}>
        <DescriptionContainer>
          {eventGuests.map((guest, index) => (
            <GuestContainer key={index} mirror={mirror}>
              <EventGuests>{guest.name}</EventGuests>
              {index !== eventGuests.length - 1 && (
                <HorizontalLine height='4px' width='200px' />
              )}
            </GuestContainer>
          ))}
        </DescriptionContainer>
        <ImageContainer height={image.height} width={image.width}>
          <Image
            blurDataURL='/assets/feb-23-event.jpeg?w=10&h=10'
            src='/assets/feb-23-event.jpeg'
            height={(image.height / image.width) * 854}
            width={854}
          />
        </ImageContainer>
      </ImageDescriptionContainer>
    </Container>
  );
};

export default TimelineItem;
