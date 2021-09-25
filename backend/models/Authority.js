module.exports = (sequelize, DataTypes) => {
    const Authority = sequelize.define('authority', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            comment: "고유 ID"
        },
        code: {
            type: DataTypes.STRING(4),
            allowNull: false,
            unique: true,
            comment: "권한 코드"
        },
        auth: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            comment: "권한"
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            comment: "권한명"
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: null,
            comment: "설명"
        }
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "AUTHORITY",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return Authority;
}