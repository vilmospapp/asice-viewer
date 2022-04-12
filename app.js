'use strict';

const express = require('express');

// App
const app = express();
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('.'));

app.listen(process.env.PORT || 5000)
console.log(`Running on http://${HOST}:${PORT}`);