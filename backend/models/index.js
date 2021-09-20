const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* TABLES */
db.Dashboard        = require('./Dashboard')(sequelize, Sequelize);
db.Chart            = require('./Chart')(sequelize, Sequelize);
db.DashboardLayout  = require('./DashboardLayout')(sequelize, Sequelize);
db.NetworkMap       = require('./NetworkMap')(sequelize, Sequelize);
db.Authority        = require('./Authority')(sequelize, Sequelize);
db.WebUser          = require('./webUser')(sequelize, Sequelize);
db.WebUserAuthority = require('./WebUserAuthority')(sequelize, Sequelize);
db.GridTest         = require('./GridTest')(sequelize, Sequelize);

/* CONSTRAINTS */
/* DASHBOARD_LAYOUT (N) : DASHBOARD (1) */
db.Dashboard.hasMany(db.DashboardLayout, {foreignKey: 'dashboardId', sourceKey: 'id'});
db.DashboardLayout.belongsTo(db.Dashboard, {foreignKey: 'dashboardId', targetKey: 'id'});
/* DASHBOARD_LAYOUT (1) : CHART (1) */
db.Chart.hasOne(db.DashboardLayout, {foreignKey: 'chartId', sourceKey: 'id'});
db.DashboardLayout.belongsTo(db.Chart, {foreignKey: 'chartId', targetKey: 'id'});
/* WEB_USER (1) : DASHBOARD (1) */
db.Dashboard.hasOne(db.WebUser, {foreignKey: 'dashboardId', sourceKey: 'id'});
db.WebUser.belongsTo(db.Dashboard, {foreignKey: 'dashboardId', targetKey: 'id'});
/* WEB_USER (1) : NETWORK_MAP (1) */
db.NetworkMap.hasOne(db.WebUser, {foreignKey: 'networkMapId', sourceKey: 'id'});
db.WebUser.belongsTo(db.NetworkMap, {foreignKey: 'networkMapId', targetKey: 'id'});
/* WEB_USER_AUTHORITY (N) : WEB_USER (1) */
db.WebUser.hasMany(db.WebUserAuthority, {foreignKey: 'webUserId', sourceKey: 'id'});
db.WebUserAuthority.belongsTo(db.WebUser, {foreignKey: 'webUserId', targetKey: 'id'});
/* WEB_USER_AUTHORITY (N) : AUTHORITY (1) */
db.Authority.hasMany(db.WebUserAuthority, {foreignKey: 'authorityCode', sourceKey: 'code'});
db.WebUserAuthority.belongsTo(db.Authority, {foreignKey: 'authorityCode', targetKey: 'code'});

module.exports = db;
