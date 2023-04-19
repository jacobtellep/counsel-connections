import { JumbotronWrapper, Overlay, Heading } from './Jumbotron.styled';
import Image from '../Image';

const Jumbotron = ({ imageUrl, imageAlt, headingText }) => {
  console.log('Jumbotron imageUrl', imageUrl);
  return (
    <JumbotronWrapper>
      <Image
        blurDataURL={`${imageUrl}?w=10&h=10`}
        src={imageUrl}
        alt={imageAlt}
        layout='fill'
        objectFit='cover'
        objectPosition='center center'
      />
      <Overlay />
      <Heading>{headingText}</Heading>
    </JumbotronWrapper>
  );
};

export default Jumbotron;
