// nodejs server used to host formio application on ipad native app to support offline capability
// web server was choosen since talentfirst formio controllers are using url to pick required information like RepId, Reportname etc
//***************************  OLD Implementation (Issue: Was not handling IPad switch off connection break (socket close) scenario ****************************
//var express = require('express');
//var path = require('path');
//var app = express();

//// Define the port to run on
//app.set('port', 3000);

//app.use(express.static(path.join(__dirname, 'TalentFirst/TalentFirstV3')));

//app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname + 'index.html'));
//});
//// Listen for requests
//var server = app.listen(app.get('port'), function () {
//    var port = server.address().port;
//    console.log('Magic happens on port ' + port);
//});

////handle unhandled exception
//process.on('uncaughtException', (err) => {
//    console.log(err);
//});

//***************************  OLD Implementation (Issue: Was not handling IPad switch off connection break (socket close) scenario >****************************

//***************************  < New Implementation (Fixed Issue: Was not handling IPad switch off connection break (socket close) scenario ****************************

var express = require('express');
var http = require('http');
var WebSocket = require('ws')
var path = require('path');
var app = express();


var app = express();
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'TalentFirst/TalentFirstV3')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});
//initialize a simple http server
var server = http.createServer(app);
//initialize the WebSocket server instance
var wss = new WebSocket.Server({ server: server });
wss.on('connection', function (ws) {
    //connection is up, let's add a simple simple event
    ws.on('message', function (message) {
        //log the received message and send it back to the client
        console.log('received: %s', message);
        //ws.send("Hello, you sent -> " + message);
    });
    //send immediatly a feedback to the incoming connection    
    //ws.send('Hi there, I am a WebSocket server');
});
//start our server
server.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port " + server.address().port + " :)");
});


/************************/

wss.on('connection', function (ws) {
    ws.isAlive = true;
    ws.on('pong', function () {
        ws.isAlive = true;
    });
    ////connection is up, let's add a simple simple event
    //ws.on('message', function (message) {
    //    //[...]
    //});
});
setInterval(function () {
    wss.clients.forEach(function (ws) {
        if (!ws.isAlive) {
            server.listen(process.env.PORT || 3000, function () {
                console.log("Server started on port " + server.address().port + " :)");
            });
            //return ws.terminate();
        }
        console.log("Server stop on port ");

        ws.isAlive = false;
        ws.ping(null, false, true);
    });
}, 1000);
//start our server
server.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port " + server.address().port + " :)");
});


const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

//app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);
io.use(function (socket, next) {
    console.log('waiting for ' + socket.id);
    setTimeout(next, 1000);
});

// io.on('disconnect', function() {
//     console.log('Got disconnect!');

//     //var i = allClients.indexOf(socket);
//   //  allClients.splice(i, 1);
//  });

function onConnect(socket) {
    console.log('connect ' + socket.id);

    socket.on('disconnect', () => {
        console.log('disconnect ' + socket.id);
        //start our server

        server.close(function () {

            server.listen(process.env.PORT || 3000, function () {
                console.log("Server started on port " + server.address().port + " :)");
            });


        });
    });

}

//***************************  New Implementation (Fixed Issue: Was not handling IPad switch off connection break (socket close) scenario> ****************************