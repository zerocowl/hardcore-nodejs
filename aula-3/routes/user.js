module.exports = app => {
    app.route('/user')
        .get((_req, _res) => {
            const req = _req;
            const res = _res;
            req.query
            res.json({
                'user': 1
            })
        })
        .post((_req, _res) => {
            const req = _req;
            const res = _res;
            const id = req.body.id;
            res.json({
                'user': id
            })
        })

    app.route("/user/:id")
        .get((_req, _res) => {
            const req = _req;
            const res = _res;
            req.params.id
            res.json({
                    'user': 1
                })
                .put()
                .delete()
        });
}