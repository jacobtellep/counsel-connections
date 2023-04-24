import {
  Container,
  ContactsContainer,
  Contact,
  ContactLink,
} from './contact.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const ContactUs = ({ contentBlock }) => {
  return (
    <Container>
      <ContentBlock {...contentBlock} />
      <ContactsContainer>
        <Contact>
          Email us at{' '}
          <ContactLink href='mailto:julianpecora1@gmail.com'>
            julianpecora1@gmail.com
          </ContactLink>
        </Contact>
        <HorizontalLine height='1px' list />
        <Contact>
          Connect with us on{' '}
          <ContactLink href='https://www.facebook.com/groups/751234515996355/'>
            Facebook
          </ContactLink>
        </Contact>
      </ContactsContainer>
    </Container>
  );
};

export default ContactUs;
