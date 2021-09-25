module.exports = (sequelize, DataTypes) => {
    const GridTest = sequelize.define('gridTest', {
        col1: {
            type: DataTypes.STRING(500),
        },
        col2: {
            type: DataTypes.STRING(500),
        },
        col3: {
            type: DataTypes.STRING(500),
        },
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "GRID_TEST",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return GridTest;
}