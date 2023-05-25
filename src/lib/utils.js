export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

export const replaceImageURL = (url) => {
  return url.replace(`images.ctfassets.net/${process.env.CONTENTFUL_SPACE_ID}`, 'counselconnectionswv.imgix.net');
}