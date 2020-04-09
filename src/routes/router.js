const express = require('express');
const router = express.Router();
const giphy = require('../generate/giphy');

router.get('/', async (req, res, next) => {
  try {
    let { gifURL, title } = await giphy.searchGif(next);
    if (gifURL === undefined) {
      let { url, str } = await giphy.randomGifs();
      res.render('index', {
        src: url,
        title: str,
      });
    } else
      res.render('index', {
        src: gifURL,
        title: title,
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
