create database webadmin;
grant all privileges on webadmin.* to 'webadmin'@'%' identified by 'webadmin';
use webadmin;
create table grid_test (
    `col1` varchar(100),
    `col2` varchar(100),
    `col3` varchar(100)
);