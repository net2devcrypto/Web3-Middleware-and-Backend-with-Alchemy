const express = require('express');
const app = express();
const cors = require("cors");
const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200,
 }

 const { callAlchemy } = require('./interfaces');

 const net2dev = `
 ███╗   ██╗███████╗████████╗██████╗ ██████╗ ███████╗██╗   ██╗
 ████╗  ██║██╔════╝╚══██╔══╝╚════██╗██╔══██╗██╔════╝██║   ██║
 ██╔██╗ ██║█████╗     ██║    █████╔╝██║  ██║█████╗  ██║   ██║
 ██║╚██╗██║██╔══╝     ██║   ██╔═══╝ ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ██║ ╚████║███████╗   ██║   ███████╗██████╔╝███████╗ ╚████╔╝ 
 ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚═════╝ ╚══════╝  ╚═══╝  
 `;

 const middleware = `
░█▀▄▀█░░▀░░█▀▄░█▀▄░█░░█▀▀░█░░░█░█▀▀▄░█▀▀▄░█▀▀
░█░▀░█░░█▀░█░█░█░█░█░░█▀▀░▀▄█▄▀░█▄▄█░█▄▄▀░█▀▀
░▀░░▒▀░▀▀▀░▀▀░░▀▀░░▀▀░▀▀▀░░▀░▀░░▀░░▀░▀░▀▀░▀▀▀

 `

 app.use(cors(corsOptions))
 app.use(require('body-parser').json());

 app.post('/callalchemy', function(req, res) {
    const wallet = req.body.wallet;
    console.log('Request Received from FrontEnd');
    return new Promise((resolve, reject) => {
        callAlchemy(wallet).then(output => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
            res.end(JSON.stringify(output));
            resolve();
        }).catch(error => {
            res.json(error);
            res.status(405).end();
            console.log(error);
            reject();
        })
    })
 });

const server = app.listen(8081, function (){
    const port = server.address().port;
    console.log(net2dev);
    console.log(middleware);
    console.log("Middleware Active and Listening on port: " + port);
})

