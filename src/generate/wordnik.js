require('dotenv').config();
const axios = require('axios');
const config = require('config');

const wordnikURL = config.get('url.wordnik');
const API_key = process.env.Wordnik_API;

const randomWords = async () => {
  try {
    const { data } = await axios(
      `${wordnikURL}/words.json/randomWord?api_key=${API_key}`,
      {
        'content-type': 'application/json',
      }
    );
    return data.word;
  } catch (error) {
    console.log(error.message);
  }
};

randomWords();

exports.randomWords = randomWords;
