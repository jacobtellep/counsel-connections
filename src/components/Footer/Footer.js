import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Heading,
  Link,
  SocialMediaContainer,
  Copyright,
} from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <SocialMediaContainer>
        <Link href='https://www.facebook.com/groups/751234515996355/'>
          <FontAwesomeIcon icon={faFacebookSquare} color='white' size='2x' />
        </Link>
        <Link href='mailto:julianpecora1@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} color='white' size='2x' />
        </Link>
      </SocialMediaContainer>
      <Copyright>&#169; 2023 Counsel Connections</Copyright>
    </Container>
  );
};

export default Footer;
