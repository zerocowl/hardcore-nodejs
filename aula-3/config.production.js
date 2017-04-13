const dbHost = process.env.DB_HOST || '127.0.0.01';

module.exports = {
    db: {
        username: "",
        password: "",
        database: "aula",
        host: null,
        port: null,
        dialect: "sqlite",
        storage: './db_prod.sqlite',
        sync: { force: true, },
        define: { underscored: true, },
        seederStorage: "json",
        seederStoragePath: "sequelizeData.json",
        seederStoragePath: "sequelizeData.json",
        seederStorageTableName: "sequelize_data"
    }
}