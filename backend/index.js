/* load modules */
const express       = require('express');
const morganLogger  = require('morgan');
const cookieParser  = require('cookie-parser');
const cors          = require('cors');
const util          = require('util');
const dotenv        = require('dotenv');
const { sequelize } = require('./models');

/* load dotenv */
dotenv.config();

/* setting up environment, port, database variables */
const nodeEnv = process.env.NODE_ENV || 'development';
const PORT    = process.env.PORT || 8080;

console.log(util.format('### DOT ENV\n\tmode: %s, port: %s', nodeEnv, PORT));

/* load express module */
const app = express();

/* setting up morgan logger */
app.use(morganLogger('dev'));

/* setting up cookie parser */
app.use(cookieParser());

/* setting up a body parser for sending request / response */
app.use(express.urlencoded({
    limit: "20mb",
    extended: true
}));
app.use(express.json({
    limit: "20mb",
    extended: true
}));

/* setting up cross origin */
app.use(cors());

/* add router */
app.use('/api/gridtest', require('./routes/grid-test-route'));

sequelize.sync({force: false})
    .then(() => {
        console.log("DB connected !");
        app.listen(PORT, () => console.log(`Connection established and running on port : ${PORT}`))
    })
    .catch((err) => {
        console.error(err);
    })
