import express from "express";
import consign from "consign";


const PORT = 3000;
const app = express();

consign()
    .include("./config.js")
    .then("./db.js")
    .then("routes")
    .then("./libs/middlewares.js")
    .then("./libs/boot.js")
    .into(app);