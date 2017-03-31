var http = require('http');
var fs = require('fs');

function readPage(local, callback) {
    fs.readFile(__dirname + local, function(err, data) {
        if (err) throw err;
        callback(data);
    });
}

var server = http.createServer(function(_req, _res) {
    var req = _req;
    var res = _res;

    res.writeHeader(200, {
        'Content-type': 'text/html'
    });

    switch (req.url) {
        default:
            case '/':
            readPage('/paginas/index.html', function(data) {
            res.write(data);
            res.end();
        })
        break;
        case '/teste':
                readPage('/paginas/sobre.html', function(data) {
                res.write(data);
                res.end();
            });
            break;
    }

});

server.listen(3000, function(st) {
    console.log(st)
});