module.exports = (sequelize, DataTypes) => {
    const Dashboard = sequelize.define('Dashboard', {
        id: {
            type: DataTypes.STRING(16),
            primaryKey: true,
            comment: "고유 ID"
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            comment: "대시보드명"
        },
        row: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 6,
            comment: "행 갯수"
        },
        column: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 6,
            comment: "열 갯수"
        },
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "DASHBOARD",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return Dashboard;
}