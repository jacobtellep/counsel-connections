export const ASSET_QUERY = `
  query {
    assetCollection {
      items {
        title
        url
        width
        height
      }
    }
  }
`;

export const FEATURED_GUEST_ATTRIBUTES = `
  fragment FeaturedGuest on FeaturedGuest {
    name
    title
  }
`;

export const MEMBER_ATTRIBUTES = `
  fragment Member on Member {
    sys {
      id
    }
    name
    date
    company
    __typename
  }
  `;

export const LINK_ATTRIBUTES = `
  fragment Link on Link {
    sys {
      id
    }
    title
    url
    __typename
  }
  `;

export const HOMEPAGE_ATTRIBUTES = `
  fragment Homepage on Homepage {
      sys {
        id
      }
      title
      subtitle
      timelineCollection {
        items {
          sys {
            id
          }
          title
          eventDate
          featuredGuest
          image {
            title
            url
            height
            width
          }
          __typename
        }
      }
    }
`;

export const WHO_WE_ARE_ATTRIBUTES = `
  fragment WhoWeAre on WhoWeAre {
    sys {
      id
    }
    title
    description
    leadershipTeamCollection {
      items {
        name
        company
      }
    }
    __typename
  }
`;

export const SPONSORS_ATTRIBUTES = `
  fragment Sponsors on Sponsors {
    sys {
      id
    }
    title
    sponsorList
    __typename
  }
`;

export const FEATURED_GUESTS_ATTRIBUTES = `
  fragment FeaturedGuests on FeaturedGuests {
    sys {
      id
    }
    title
    pastFeaturedGuestsCollection {
      items {
        ...FeaturedGuest
      }
    }
    pastPartners
    __typename
  }
`;

export const MEMBER_OF_THE_MONTH_ATTRIBUTES = `
  fragment MemberOfTheMonth on MemberOfTheMonth {
    sys {
      id
    }
    title
    memberOfTheMonthListCollection {
      items {
        ...Member
      }
    }
    __typename
  }
`;

export const PUBLICATIONS_ATTRIBUTES = `
  fragment Publications on Publications {
    sys {
      id
    }
    title
    linksCollection {
      items {
        ...Link
      }
    }
  }
`;
