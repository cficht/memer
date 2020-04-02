const request = require('superagent');

module.exports = () => {
  return request
    .get('https://api.imgflip.com/get_memes')
    .then(res => res.body.data.memes);
};
