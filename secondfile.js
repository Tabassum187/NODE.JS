let server = require("http");
require("dotenv").config();
let { exec } = require("child_process");

let port = process.env.PORT;

server.createServer(function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1>Home Page</h1>
        <ul>
            <li><a href="/a">Go to Home</a></li>
            <li><a href="/b">Go to About</a></li>
            <li><a href="/c">Go to Contact</a></li>
            <li><a href="/d">Go to help</a></li>
        </ul>`);
        res.end();
    }
    else if (req.url === "/a") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1>Home Page</h1>`);
        res.end();
    }
    else if (req.url === "/b") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1>About Page</h1>`);
        res.end();
    }
    else if (req.url === "/c") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1>Contact page</h1>`);
        res.end();
    }
    else if (req.url === "/d") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1>help page</h1>`);
        res.end();
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(`<h1 style="color:blue">Page Not Found</h1>`);
        res.end();
    }
}).listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    let u = `http://localhost:${port}`;
    if (process.platform === "win32") {
        exec(`start ${u}`);
    }
});
