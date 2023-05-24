module.exports = async () => {
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ['images.ctfassets.net'], // TODO: implement IMGIX
    },
  };
};
