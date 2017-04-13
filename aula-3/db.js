import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;

module.exports = (app) => {
    if (db != null) return db;

    const config = app.config;
    const sequelize = new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password, {
            host: config.db.host,
            dialect: config.db.dialect,
            storage: config.db.storage,
            define: config.db.define,
        }
    )

    db = {
        sequelize,
        Sequelize,
        models: {}
    };

    const dir = path.join(__dirname, 'models');
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file);
        const model = sequelize.import(modelDir);

        if (model) {
            db.models[model.name] = model;
        }
    });

    Object.keys(db.models).forEach(key => {
        db.models[key].associate(db.models);
    });
}