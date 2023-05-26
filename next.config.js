module.exports = async () => {
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ['images.ctfassets.net', 'counselconnectionswv.imgix.net'],
    },
  };
};
