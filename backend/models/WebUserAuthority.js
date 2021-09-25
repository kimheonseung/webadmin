module.exports = (sequelize, DataTypes) => {
    const WebUserAuthority = sequelize.define('webUserAuthority', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            comment: "고유 ID"
        },
        webUserId: {
            type: DataTypes.STRING(16),
            allowNull: false,
            comment: "사용자 ID"
        },
        authorityCode: {
            type: DataTypes.STRING(4),
            allowNull: false,
            comment: "권한 코드"
        }
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "WEB_USER_AUTHORITY",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return WebUserAuthority;
}