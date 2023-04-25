import Layout from '@/layout';
import MemberOfTheMonth from '@/screens/MemberOfTheMonth';

import fixtures from '@/screens/MemberOfTheMonth/fixtures';

const MemberOfTheMonthPage = () => {
  return (
    <Layout {...fixtures}>
      <MemberOfTheMonth {...fixtures.memberOfTheMonth} />
    </Layout>
  );
};

export default MemberOfTheMonthPage;
