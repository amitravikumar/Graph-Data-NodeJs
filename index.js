const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
app.enable("trust proxy");

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
});
app.use(require('morgan')('dev', {
	skip: function (req, res) { return res.statusCode < 400; }
}));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));