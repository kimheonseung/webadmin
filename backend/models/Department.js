module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('department', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            comment: "고유 ID"
        },
        code: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true,
            comment: "부서 코드"
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            comment: "부서명"
        },
        depth: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: "부서 깊이"
        },
        upperDepartmentCode: {
            type: DataTypes.STRING(16),
            allowNull: true,
            defaultValue: null,
            comment: "상위 부서 코드"
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
        tableName: "DEPARTMENT",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return Department;
}