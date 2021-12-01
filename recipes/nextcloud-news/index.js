module.exports = Ferdi => class NextcloudNews extends Ferdi {};
  buildUrl(url) {
    return `${url}/apps/news/`;
  }
};
