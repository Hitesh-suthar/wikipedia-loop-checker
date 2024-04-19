const express = require('express');
const bodyParser = require('body-parser');
const wikiRouter = require('./routes/route');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/route', wikiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));