import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (_req, _res) => _res.json({
    'status': 'online'
}));

app.listen(PORT);