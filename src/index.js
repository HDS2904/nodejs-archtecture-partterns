const express = require('express');
const app = express();
const PORT_PROJECT = 4000;

require('./db/mongo');
const { originControl } = require('./middleware/middleware');

app.use(express.json());
app.use(originControl);


// controllers
const routes = require('./routes/route');

app.use('/student', routes);

app.listen(PORT_PROJECT, () => console.log("Aplication running."));




// const http = require("node:http");

// const PORT_DEFAULT = 9000;

// const contentServer = (req, res) => {
//     const { url, method, headers } = req;
//     console.log("🚀 ~ contentServer ~ headers:", headers)
//     console.log("🚀 ~ contentServer ~ req:", headers.origin)
//     if (url === "/") {
//         res.statusCode = 200;
//         res.end("home");
//     } else if (url === "/characters") {
//         res.statusCode = 210;
//         res.end("Characters");
//     } else if (url === "/client" && method === "POST") {
//         res.statusCode = 210;
//         let dataSend = "";
//         req.on("data", (data) => {
//             dataSend += data.toString();
//             console.log("BODY PS: ");
//         });
//         req.on("end", () => {
//             res.end(dataSend);
//         });
//     } else {
//         res.statusCode = 401;
//         res.end("ERROR");
//     }
// };

// const server = http.createServer(contentServer);

// server.listen(PORT_DEFAULT, () => {
//     console.log("ESCUCHANDO puerto: ", server.address().port);
// });
