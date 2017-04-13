import express from "express";
import consign from "consign";


const PORT = 3000;
const app = express();

consign()
    .include("./config.js")
    .then("./db.js")
    .then("routes")
    .into(app);

app.set('view options', { layout: false })
    .set('views', './views/..')
    .engine('html', function(path, options, cb) {
        fs.readFile(path, 'utf-8', cb);
    })
app.listen(PORT);