module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    }, {
        hooks: {},
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
        }
    });
    return user;
};