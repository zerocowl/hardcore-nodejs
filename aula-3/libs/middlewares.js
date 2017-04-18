import bodyParser from 'body-parser'
import fs from 'fs';


module.exports = app => {
    const ENV = process.env.NODE_ENV || 'development';
    const CONFIG = app.config;
    const PORT = process.env.PORT || CONFIG.port;

    app.set('port', PORT);
    app.set('env', ENV);

    app.set('view options', { layout: false })
        .set('views', './views/..')
        .engine('html', function(path, options, cb) {
            fs.readFile(path, 'utf-8', cb);
        })


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use((_req, _res, _next) => {
        const req = _req;
        delete req.body.id;

        next(null, req);
    })

}