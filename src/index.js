const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const middleware = require('./middleware')


const app = express();
app.use(morgan('common'));
app.use(helmet())
app.use(cors({
    origin: `http://localhost:3000`
}))

app.get('/', (req, res) => {
    res.json({
    message : 'Hello World'
    });
});

app.use(middleware.NOT_FOUND);
app.use(middleware.errorHandler)

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})