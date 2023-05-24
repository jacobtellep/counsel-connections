import Layout from '@/layout';
import MemberOfTheMonth from '@/screens/MemberOfTheMonth';
import Contentful from '@/lib/contentful';
import { MEMBER_OF_THE_MONTH_ATTRIBUTES } from '@/lib/fragments';
import fixtures from '@/screens/MemberOfTheMonth/fixtures';

export async function getStaticProps() {
  try {
    const query = `
  ${MEMBER_OF_THE_MONTH_ATTRIBUTES}
    query {
      memberOfTheMonthCollection(limit: 1) {
        items {
          ...MemberOfTheMonth
        }
      }
    }
    `;

    const { data } = await Contentful.fetch(query, {});

    return {
      props: {
        ...data?.memberOfTheMonthCollection?.items?.[0],
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const MemberOfTheMonthPage = (props) => {
  console.log('props', props);
  return (
    <Layout {...fixtures}>
      <MemberOfTheMonth {...fixtures.memberOfTheMonth} />
    </Layout>
  );
};

export default MemberOfTheMonthPage;
