const { getMemes, getMeme } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('memes routes', () => {

  it('creates a meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'Okay',
        image: 'https://i.kym-cdn.com/photos/images/newsfeed/001/488/512/a52.jpg',
        bottom: 'Alright'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'Okay',
          image: 'https://i.kym-cdn.com/photos/images/newsfeed/001/488/512/a52.jpg',
          bottom: 'Alright',
          __v: 0
        });
      });
  });

  it('gets all memes', async() => {
    const memes = await getMemes();
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('gets a meme by id', async() => {
    const meme = await getMeme();
    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });

});
