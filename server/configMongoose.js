import mongoose from 'mongoose';

const conf = {
  hostname: process.env.MONGO_HOSTNAME || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  env: process.env.MONGO_ENV || 'local'
};

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`);

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

const userSchema = {
  'username': String,
  'password': String,
  'firstName': String,
  'lastName': String,
  'email': String,
  'role': String,
  'verified': Boolean,
  'imageUrl': String
};
const User = mongoose.model('User', userSchema, 'pubUsers');

export default {
  Character,
  User
};
