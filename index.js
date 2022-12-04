const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.pug`);

app.set('view engine', 'pug');
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: false}));

app.post('/', (req, res) => {
	const {text} = req.body
	res.render(createPath('index'), {text})
})

app.get('/', (req, res) => {
	res.render(createPath('index'))
})

app.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`listening port http://localhost:${PORT}`);
});