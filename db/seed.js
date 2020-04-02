const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();

module.exports = async({ memesToCreate = 100 } = {}) => {

  const images = [
    'https://images7.memedroid.com/images/UPLOADED113/5618cd9195cf5.jpeg',
    'https://images7.memedroid.com/images/UPLOADED143/5618cd6b07685.jpeg',
    'https://images7.memedroid.com/images/UPLOADED136/5618c4b461dc4.jpeg',
    'https://images7.memedroid.com/images/UPLOADED123/559e176e7a719.jpeg',
    'https://images7.memedroid.com/images/UPLOADED172/559dc3f61577b.jpeg'
  ];

  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.animal(),
    image: chance.pickone(images),
    bottom: chance.profession()
  })));
};

