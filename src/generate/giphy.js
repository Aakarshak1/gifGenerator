require('dotenv').config();
const axios = require('axios');
const config = require('config');
const get = require('lodash.get');

const wordNik = require('./wordnik');
const giphyURL = config.get('url.giphy');
const API_KEY = process.env.giphy_API;

const searchGif = async () => {
  try {
    const word = await wordNik.randomWords();
    const { data } = await axios(
      `${giphyURL}search?api_key=${API_KEY}&q=${word}&limit=1&offset=0&rating=G&lang=en`
    );
    const gifURL = await get(data, 'data[0].images.downsized_medium.url');
    const title = await get(data, 'data[0].title');

    return {
      gifURL,
      title,
    };
  } catch (error) {
    console.log(error);
  }
};

const randomGifs = async () => {
  try {
    const { data } = await axios(
      `${giphyURL}random?api_key=${API_KEY}&tag=&rating=G`,
      {
        'content-type': 'application/json',
      }
    );

    const url = await get(data, 'data.images.downsized.url');
    const str = await get(data, 'data.title');

    return {
      url,
      str,
    };
  } catch (error) {
    console.log(error);
  }
};

exports.randomGifs = randomGifs;
exports.searchGif = searchGif;
