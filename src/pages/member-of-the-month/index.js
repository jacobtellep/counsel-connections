import Layout from '@/layout';
import MemberOfTheMonth from '@/screens/MemberOfTheMonth';
import Contentful from '@/lib/contentful';
import { MEMBER_OF_THE_MONTH_ATTRIBUTES, MEMBER_ATTRIBUTES } from '@/lib/fragments';
import { formatDate } from '@/lib/utils';

export async function getStaticProps() {
  try {
    const query = `
    ${MEMBER_ATTRIBUTES}
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

    const {
      memberOfTheMonthListCollection: { items },
      title,
    } = data?.memberOfTheMonthCollection?.items?.[0];

    const formattedProps = {
      contentBlock: {
        headingText: title,
      },
      members: items.map((item) => {
        const { name, company, date } = item;
        return {
          name,
          company,
          date: formatDate(date),
        };
      }),
    };

    return {
      props: {
        pageTitle: 'Member of the Month',
        pageDescription: 'Counsel Connections Member of the Month Page',
        ogImageUrl: '',
        ...formattedProps,
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const MemberOfTheMonthPage = (props) => {
  return (
    <Layout {...props}>
      <MemberOfTheMonth {...props} />
    </Layout>
  );
};

export default MemberOfTheMonthPage;
