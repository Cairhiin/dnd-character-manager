import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');

const characterSchema = {
  name: String,
  level: Number,
  className: String,
  race: String,
  weight: Number,
  height: Number,
  alignment: String,
  attributes: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intellect: Number,
    wisdom: Number,
    charisma: Number
  },
  deity: String,
  feats: [{ 'id': String }],
  skills: [{ 'skill': String, 'score': Number }]
}
const Character = mongoose.model('Character', characterSchema, 'characters');

export const CharManagerAppRoutes = [{
  route: 'characters.length',
  get: () => Character.count({}, (err, count) => count)
      .then((charactersCountInDB) => {
        return {
          path: ['characters', 'length'],
          value: charactersCountInDB
        };
      })
}, {
  route: 'characters[{integers}]["_id", "name", "level", "className"]',
  get: (pathSet) => {
    const charIndex = pathSet[1];
    return Character.find({}, (err, charDocs) => charDocs)
      .then((charArrayFromDB) => {
        let results = [];
        charIndex.forEach((index) => {
          const singleCharObj = charArrayFromDB[index].toObject();
          const falcorSingleCharResult = {
            path: ['characters', index],
            value: singleCharObj
          };
          results.push(falcorSingleCharResult);
        });
        return results;
      })
  }
}];