const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;
const morgan = require('morgan');
const markersRouter = require('./src/routes/markers.routes');
const roomsRouter = require('./src/routes/rooms.routes');
const websiteEntityRouter = require('./src/routes/website.routes');

app.use(cors());

app.use(morgan('tiny'));
app.use(express.json());
app.use('/markers', markersRouter);
app.use('/room', roomsRouter);
app.use('/website', websiteEntityRouter);

app.get('/', async (req, res) => {
  res.status(200).json({ msg: 'Hello' });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
