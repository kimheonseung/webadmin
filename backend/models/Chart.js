module.exports = (sequelize, DataTypes) => {
    const Chart = sequelize.define('chart', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            comment: "고유 ID"
        },
        test: {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue: null,
            comment: "테스트 컬럼"
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            comment: "차트명"
        },
        type: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "차트 타입"
        },
        dataCount: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            comment: "데이터 갯수"
        },
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "CHART",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return Chart;
}