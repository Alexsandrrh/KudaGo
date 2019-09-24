module.exports = (url, method = 'get') => {
  return `https://cocoserver.herokuapp.com/${method}?url=${url}`;
};
