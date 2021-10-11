module.exports = (sequelize, DataTypes) => {
    const WebUser = sequelize.define('webUser', {
        id: {
            type: DataTypes.STRING(16),
            primaryKey: true,
            comment: "고유 ID"
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            comment: "사용자 ID"
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            comment: "사용자 이름"
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: "사용자 비밀번호"
        },
        email: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: null,
            comment: "사용자 이메일"
        },
        phone: {
            type: DataTypes.STRING(13),
            allowNull: true,
            defaultValue: null,
            comment: "사용자 전화번호"
        },
        loginAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
            comment: "최근 로그인 날짜"
        },
        loginIp: {
            type: DataTypes.STRING(15),
            allowNull: true,
            defaultValue: null,
            comment: "최근 로그인 IP"
        },
        loginFailCount: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            comment: "로그인 실패 횟수"
        },
        loginFailedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
            comment: "최근 로그인 실패 날짜"
        },
        loginFailIp: {
            type: DataTypes.STRING(15),
            allowNull: true,
            defaultValue: null,
            comment: "최근 로그인 실패 IP"
        },
        passwordChangedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('now()'),
            comment: "최근 비밀번호 변경일"
        },
        accessIp: {
            type: DataTypes.STRING(15),
            allowNull: false,
            defaultValue: "*",
            comment: "접근 가능 IP"
        },
        departmentCode: {
            type: DataTypes.STRING(16),
            allowNull: true,
            defaultValue: null,
            comment: "부서 코드"
        },
        networkMapId: {
            type: DataTypes.STRING(16),
            allowNull: true,
            defaultValue: null,
            comment: "네트워크 맵 ID"
        },
        dashboardId: {
            type: DataTypes.STRING(16),
            allowNull: true,
            defaultValue: null,
            comment: "대시보드 ID"
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
        tableName: "WEB_USER",
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });

    return WebUser;
}