create database webadmin;

grant all privileges on webadmin.* to 'webadmin'@'%' identified by 'webadmin';

use webadmin;

/* CREATE */
CREATE TABLE `DASHBOARD` (
    `ID` VARCHAR(16) PRIMARY KEY,
    `NAME` VARCHAR(50),
    `ROW` TINYINT UNSIGNED NOT NULL DEFAULT 6,
    `COLUMN` TINYINT UNSIGNED NOT NULL DEFAULT 6
);
/* TEST TABLE */
CREATE TABLE `CHART` (
    `ID` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `TEST` VARCHAR(10) DEFAULT NULL,
    `NAME` VARCHAR(20) NOT NULL,
    `TYPE` VARCHAR(20) NOT NULL,
    `DATA_COUNT` TINYINT UNSIGNED NOT NULL
);
CREATE TABLE `DASHBOARD_LAYOUT` (
    `ID` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `X` SMALLINT UNSIGNED NOT NULL,
    `Y` SMALLINT UNSIGNED NOT NULL,
    `W` SMALLINT UNSIGNED NOT NULL,
    `H` SMALLINT UNSIGNED NOT NULL,
    `DASHBOARD_ID` VARCHAR(16) NOT NULL,
    `CHART_ID` INTEGER UNSIGNED NOT NULL,
    CONSTRAINT `FK_DASHBOARD_LAYOUT_DASHBARD_DASHBOARD_ID` FOREIGN KEY (`DASHBOARD_ID`) REFERENCES `DASHBOARD` (`ID`),
    CONSTRAINT `FK_DASHBOARD_LAYOUT_CHART_CHART_ID` FOREIGN KEY (`CHART_ID`) REFERENCES `CHART` (`ID`)
);
CREATE TABLE `NETWORK_MAP` (
    `ID` VARCHAR(16) PRIMARY KEY,
    `NAME` VARCHAR(50)
);

CREATE TABLE `ROLE` (
    `ID` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `CODE` VARCHAR(4) UNIQUE NOT NULL,
    `AUTH` VARCHAR(30) UNIQUE NOT NULL,
    `NAME` VARCHAR(30) UNIQUE NOT NULL,
    `DESCRIPTION` VARCHAR(500)
);

CREATE TABLE `WEB_USER` (
    `ID` VARCHAR(16) PRIMARY KEY,
    `USER_ID` VARCHAR(20) NOT NULL UNIQUE,
    `NAME` VARCHAR(50) NOT NULL,
    `PASSWORD` VARCHAR(100) NOT NULL,
    `EMAIL` VARCHAR(50) DEFAULT NULL,
    `PHONE` VARCHAR(13) DEFAULT NULL,
    `LAST_LOGIN` TIMESTAMP DEFAULT 0,
    `LAST_PASSWORD_CHANGE` TIMESTAMP DEFAULT 0,
    `LAST_LOGIN_FAIL` TIMESTAMP DEFAULT 0,
    `LOGIN_FAIL_COUNT` INTEGER UNSIGNED DEFAULT 0,
    `LOGIN_FAIL_IP` VARCHAR(15) DEFAULT NULL,
    `LOGIN_IP` VARCHAR(15) DEFAULT NULL,
    `ACCESS_IP` VARCHAR(15) DEFAULT '*',
    `DESCRIPTION` VARCHAR(500) DEFAULT NULL,
    `NETWORK_MAP_ID` VARCHAR(16) DEFAULT NULL,
    `DASHBOARD_ID` VARCHAR(16) DEFAULT NULL,
    CONSTRAINT `FK_WEB_USER_DASHBARD_DASHBOARD_ID` FOREIGN KEY (`DASHBOARD_ID`) REFERENCES `DASHBOARD` (`ID`),
    CONSTRAINT `FK_WEB_USER_NETWORK_MAP_NETWORK_MAP_ID` FOREIGN KEY (`NETWORK_MAP_ID`) REFERENCES `NETWORK_MAP` (`ID`)
);

CREATE TABLE `WEB_USER_ROLE` (
    `ID` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `WEB_USER_ID` VARCHAR(16) NOT NULL,
    `ROLE_CODE` VARCHAR(4) NOT NULL,
    CONSTRAINT `FK_WEB_USER_ROLE_WEB_USER_ID` FOREIGN KEY (`WEB_USER_ID`) REFERENCES `WEB_USER` (`ID`),
    CONSTRAINT `FK_WEB_USER_ROLE_ROLE_CODE` FOREIGN KEY (`ROLE_CODE`) REFERENCES `ROLE` (`CODE`)
);

/* ALTER */
ALTER TABLE `CHART` AUTO_INCREMENT = 1;
ALTER TABLE `DASHBOARD_LAYOUT` AUTO_INCREMENT = 1;
ALTER TABLE `ROLE` AUTO_INCREMENT = 1;
ALTER TABLE `WEB_USER_ROLE` AUTO_INCREMENT = 1;

/* INSERT */
INSERT INTO `DASHBOARD` (`ID`, `NAME`, `ROW`, `COLUMN`) VALUES ('DBD0000000000000', '기본대시보드', 6, 6);
INSERT INTO `CHART` (`ID`, `TEST`, `NAME`, `TYPE`, `DATA_COUNT`) VALUES 
    (1, '1', 'Chart1', 'Column', 10), 
    (2, '2', 'Chart2', 'Pie', 2), 
    (3, '3', 'Chart3', 'Pie', 5), 
    (4, '4', 'Chart4', 'Pie', 3), 
    (5, '5', 'Chart5', 'Bar', 6), 
    (6, '6', 'Chart6', 'LineArea', 9), 
    (7, '7', 'Chart7', 'Column', 3);
INSERT INTO `DASHBOARD_LAYOUT` (`ID`, `X`, `Y`, `W`, `H`, `DASHBOARD_ID`, `CHART_ID`) VALUES 
    (1, 0, 0, 2, 3, 'DBD0000000000000', 1),
    (2, 2, 0, 1, 1, 'DBD0000000000000', 2),
    (3, 2, 1, 1, 1, 'DBD0000000000000', 3),
    (4, 2, 2, 1, 1, 'DBD0000000000000', 4),
    (5, 3, 0, 2, 2, 'DBD0000000000000', 5),
    (6, 3, 2, 2, 1, 'DBD0000000000000', 6),
    (7, 6, 0, 1, 3, 'DBD0000000000000', 7);
INSERT INTO `NETWORK_MAP` (`ID`, `NAME`) VALUES
    ('NWM0000000000000', '기본맵');
INSERT INTO `ROLE` (`ID`, `CODE`, `AUTH`, `NAME`, `DESCRIPTION`) VALUES
    (1, 'R000', 'ADMIN', '관리자', '모든 권한을 갖는 사용자'),
    (2, 'R001', 'USER', '사용자', '부분적 권한을 갖는 사용자'),
    (3, 'R002', 'SUSER', '특별 사용자', '특별한 부분에 권한을 갖는 사용자');
INSERT INTO `WEB_USER` (`ID`, `USER_ID`, `NAME`, `PASSWORD`, `EMAIL`, `PHONE`, `LAST_LOGIN`, `LAST_PASSWORD_CHANGE`, `LAST_LOGIN_FAIL`, `LOGIN_FAIL_COUNT`, `LOGIN_FAIL_IP`, `LOGIN_IP`, `ACCESS_IP`, `DESCRIPTION`, `NETWORK_MAP_ID`, `DASHBOARD_ID`) VALUES
    ('USR0000000000000', 'admin', '김개발', '$2a$10$HPsXOkWUd52wnMx37JseMOxcmZezEJDS9uwSH01WVBzOw3CfPK9ry', 'admin@webadmin.hs', '010-1234-5678', now(), now(), now(), 0, NULL, '127.0.0.1', '*', '테스트 관리자', 'NWM0000000000000', 'DBD0000000000000');
INSERT INTO `WEB_USER_ROLE` (`ID`, `WEB_USER_ID`, `ROLE_CODE`) VALUES
    (1, 'USR0000000000000', 'R000'),
    (2, 'USR0000000000000', 'R002');