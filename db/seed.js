const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();
const getMemes = require('../lib/services/random-memes');

module.exports = async({ memesToCreate = 100 } = {}) => {
  let memes;
  try {
    memes = await getMemes();
  } catch(e) {
    memes = [...Array(memesToCreate)].map(() => ({ name: chance.animal(), url: chance.url() }));
  }

  await Meme.create([...Array(memesToCreate)].map((tag, index) => ({
    top: memes[index].name,
    image: memes[index].url,
    bottom: chance.sentence()
  })));
};
