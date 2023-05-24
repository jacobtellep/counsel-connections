export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};


// a function that formats a date to something like "January 1, 2021"
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}