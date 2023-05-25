import { sleep } from '@/lib/utils';
import fetch from 'cross-fetch';

export default class GQL {
  static env() {
    return process.env.CONTENTFUL_ENV || 'master';
  }

  static sleepInt() {
    return process.env.CONTENTFUL_SLEEP_INTERVAL_MS || undefined;
  }

  static spaceId() {
    if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
      throw new Error("NEXT_PUBLIC_CONTENTFUL_SPACE_ID not defined");
    }
    return process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  }

  static endpoint() {
    return `https://graphql.contentful.com/content/v1/spaces/${GQL.spaceId()}/environments/${GQL.env()}`;
  }

  static headers(preview) {
    let accessToken;
    if (preview) {
      accessToken = process.env.CONTENTFUL_PREVIEW_TOKEN;
    } else {
      accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    }

    if (!accessToken) {
      throw new Error(`Access token not defined for ${preview ? 'preview' : 'normal'} mode`);
    }

    return {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
  }

  static async fetch(query, variables, preview = false) {
    await sleep(GQL.sleepInt());
    try {
      const response = await fetch(GQL.endpoint(), {
        body: JSON.stringify({ query, variables }),
        headers: GQL.headers(preview),
        method: 'POST'
      });
      return response.json();
    } catch (error) {
      console.error('error fetching data', error);
      throw error;
    }
  }
}