const http = require('http');
const url = require('url');

const port = 8080;
const server = http.createServer((req, res) => {
	const urlParsed = url.parse(req.url, true);
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

	if (urlParsed.pathname === '/') {
		res.write(`<h1>Введите что-нибудь в адресную строку!</h1>`);
		res.end();
	} else {

		res.write(`<h1>${urlParsed.pathname.slice(1)}</h1>`, "utf-8");
		res.end();
	}
})

server.listen(port, () => {
	console.log(`Server listening on: http://localhost:${port}`);
})