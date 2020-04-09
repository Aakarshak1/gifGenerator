require('dotenv').config();
const express = require('express');
const app = express();

require('./src/startup/app')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is runinng on ${PORT}`));
