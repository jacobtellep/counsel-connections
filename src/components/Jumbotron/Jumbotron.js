import { JumbotronWrapper, Overlay, Heading } from './Jumbotron.styled';
import Image from '@/components/Image';
import useWindowWidth from '@/lib/hooks/useWindowWidth';
import theme from '@/lib/theme';

const Jumbotron = ({ imageUrl, imageAlt, headingText, mobileImageUrl }) => {
  let width;

  if (typeof window !== 'undefined') {
    width = useWindowWidth();
  }

  const isMobile = width <= parseInt(theme.breakpoints.medium);

  return (
    <JumbotronWrapper>
      <Image
        blurDataURL={isMobile ? `${mobileImageUrl}?w=10&h=10` : `${imageUrl}?w=10&h=10`}
        src={isMobile ? mobileImageUrl : imageUrl}
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
