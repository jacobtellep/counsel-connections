import Layout from '@/layout';
import ContactUs from '@/screens/Contact';

import fixtures from '@/screens/Contact/fixtures';

const ContactPage = () => {
  return (
    <Layout {...fixtures}>
      <ContactUs {...fixtures.contact} />
    </Layout>
  );
};

export default ContactPage;
