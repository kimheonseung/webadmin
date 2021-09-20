module.exports = (sequelize, DataTypes) => {
    const DashboardLayout = sequelize.define('DashboardLayout', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            comment: "고유 ID"
        },
        x: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            comment: "x축 위치"
        },
        y: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            comment: "y축 위치"
        },
        w: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            comment: "x축 길이"
        },
        h: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            comment: "y축 길이"
        },
        dashboardId: {
            type: DataTypes.STRING(16),
            allowNull: false,
            comment: "대시보드 고유 ID"
        },
        chartId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            comment: "차트 고유 ID"
        }
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "DASHBOARD_LAYOUT",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return DashboardLayout;
}