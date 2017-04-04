module.exports = app => {
    app.get("/", (_req, _res) => {
        _res.render("views/index.html")
    });
}