const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
// const sessionMiddleware = require('./modules/session-middleware');
// const passport = require('./strategies/user.strategy');

// Route includes
// const userRouter = require('./routes/user.router');
// const artRouter = require('./routes/art.router');
// const pieceRouter = require('./routes/piece.router');
// const seenRouter = require('./routes/seen.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





/* Routes */
// app.use('/api/user', userRouter);
// app.use('/api/art', artRouter);
// app.use('/api/piece', pieceRouter);
// app.use('/api/seen', seenRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});