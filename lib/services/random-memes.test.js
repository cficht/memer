const getMemes = require('./random-memes');

jest.mock('superagent', () => {
  return {
    get() {
      return Promise.resolve ({
        body: {
          data: {
            memes: [
              {
                id: '61579',
                name: 'One Does Not Simply',
                url: 'https://i.imgflip.com/1bij.jpg',
                width: 568,
                height: 335,
                box_count: 2
              },
              {
                id: '91545132',
                name: 'Trump Bill Signing',
                url: 'https://i.imgflip.com/1ii4oc.jpg',
                width: 1866,
                height: 1529,
                box_count: 2
              },
              {
                id: '135256802',
                name: 'Epic Handshake',
                url: 'https://i.imgflip.com/28j0te.jpg',
                width: 900,
                height: 645,
                box_count: 3
              }
            ]
          }
        }
      });
    }
  };
});

describe('get memes function', () => {
  it('gets an array of memes', () => {
    return getMemes()
      .then(memes => {
        expect (memes).toContainEqual({
          id: '61579',
          name: 'One Does Not Simply',
          url: 'https://i.imgflip.com/1bij.jpg',
          width: 568,
          height: 335,
          box_count: 2
        });
      });
  });
});
