export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatDate = (date, options) => {
  return new Date(date).toLocaleDateString('en-US', { ...options, timeZone: 'UTC' });
};

export const replaceImageURL = (url) => {
  return url.replace(`images.ctfassets.net/ax05lqfmglty`, 'counselconnectionswv.imgix.net');
};
