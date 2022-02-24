const http = require("http");
const url = require("url");
const fs = require("fs");


let page404 = fs.readFileSync("./pages/404.html", (err, data) => {
    if (err) throw err;
    return data;
});

http.createServer((req, res) => {    
    let query = url.parse(req.url, true);
    let filename = `.${query.pathname}`;
    if (filename === "./") {
        filename = "./pages/index.html";
    }
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.write(page404);
            return res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write(data);
        return res.end();
    })
}).listen(5000);
