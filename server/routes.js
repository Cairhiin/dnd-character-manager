import configMongoose from './configMongoose';
import sessionRoutes from './routesSession';
import jsonGraph from 'falcor-json-graph';
const Character = configMongoose.Character;
let $atom = jsonGraph.atom;

export const CharManagerAppRoutes = [
...sessionRoutes,
{
  route: 'characters.length',
  get: () => Character.count({}, (err, count) => count)
      .then((charactersCountInDB) => {
        return {
          path: ['characters', 'length'],
          value: charactersCountInDB
        };
      })
}, {
  route: 'characters[{integers}]["_id", "name", "level", "className", "attributes", "alignment", "deity"]',
  get: (pathSet) => {
    const charIndex = pathSet[1];
    return Character.find({}, (err, charDocs) => charDocs)
      .then((charArrayFromDB) => {
        let results = [];
        charIndex.forEach((index) => {
          const singleCharObj = charArrayFromDB[index].toObject();
          if (typeof singleCharObj.attributes !== 'undefined') {
            singleCharObj.attributes = $atom(singleCharObj.attributes);
          }
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
