module.exports = (sequelize, DataTypes) => {
    const NetworkMap = sequelize.define('NetworkMap', {
        id: {
            type: DataTypes.STRING(16),
            primaryKey: true,
            comment: "고유 ID"
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            comment: "맵 이름"
        },
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "NETWORK_MAP",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return NetworkMap;
}