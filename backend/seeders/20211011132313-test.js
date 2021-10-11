'use strict';

/* npx sequelize db:seed --seed 20211011132313-test.js */
/* npx sequelize db:seed:undo --seed 20211011132313-test.js */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('DASHBOARD', [
      {
        id: 'DBD0000000000000',
        name: '기본대시보드',
        row: 6,
        column: 6,
      }
    ], {});

    await queryInterface.bulkInsert('CHART', [
      {
        id: 1,
        test: '1',
        name: 'Chart1',
        type: 'Column',
        data_count: 10,
      },
      {
        id: 2,
        test: '2',
        name: 'Chart2',
        type: 'Pie',
        data_count: 2,
      },
      {
        id: 3,
        test: '3',
        name: 'Chart3',
        type: 'Pie',
        data_count: 5,
      },
      {
        id: 4,
        test: '4',
        name: 'Chart4',
        type: 'Pie',
        data_count: 3,
      },
      {
        id: 5,
        test: '5',
        name: 'Chart5',
        type: 'Bar',
        data_count: 6,
      },
      {
        id: 6,
        test: '6',
        name: 'Chart6',
        type: 'LineArea',
        data_count: 9,
      },
      {
        id: 7,
        test: '7',
        name: 'Chart7',
        type: 'Column',
        data_count: 3,
      },
    ], {});

    await queryInterface.bulkInsert('DASHBOARD_LAYOUT', [
      {
        id: 1,
        x: 0,
        y: 0,
        w: 2,
        h: 3,
        dashboard_id: 'DBD0000000000000',
        chart_id: 1,
      },
      {
        id: 2,
        x: 2,
        y: 0,
        w: 1,
        h: 1,
        dashboard_id: 'DBD0000000000000',
        chart_id: 2,
      },
      {
        id: 3,
        x: 2,
        y: 1,
        w: 1,
        h: 1,
        dashboard_id: 'DBD0000000000000',
        chart_id: 3,
      },
      {
        id: 4,
        x: 2,
        y: 2,
        w: 1,
        h: 1,
        dashboard_id: 'DBD0000000000000',
        chart_id: 4,
      },
      {
        id: 5,
        x: 3,
        y: 0,
        w: 2,
        h: 2,
        dashboard_id: 'DBD0000000000000',
        chart_id: 5,
      },
      {
        id: 6,
        x: 3,
        y: 2,
        w: 2,
        h: 1,
        dashboard_id: 'DBD0000000000000',
        chart_id: 6,
      },
      {
        id: 7,
        x: 6,
        y: 0,
        w: 1,
        h: 3,
        dashboard_id: 'DBD0000000000000',
        chart_id: 7,
      },
    ], {});

    await queryInterface.bulkInsert('NETWORK_MAP', [
      {
        id: 'NWM0000000000000',
        name: '기본맵',
      }
    ], {});

    await queryInterface.bulkInsert('AUTHORITY', [
      {
        id: 1,
        code: 'R000',
        auth: 'ADMIN',
        name: '관리자',
        description: '모든 권한을 갖는 사용자',
      },
      {
        id: 2,
        code: 'R001',
        auth: 'USER',
        name: '사용자',
        description: '부분적 권한을 갖는 사용자',
      },
      {
        id: 3,
        code: 'R002',
        auth: 'SUSER',
        name: '특별 사용자',
        description: '특별한 부분에 권한을 갖는 사용자',
      },
    ], {});

    await queryInterface.bulkInsert('DEPARTMENT', [
      {
        id: 1,
        code: 'DEP0000000000000',
        name: 'DEVH',
        depth: 0,
        description: '회사명',
      },
      {
        id: 2,
        code: 'DEP0000000000001',
        name: '1팀',
        upper_department_code: 'DEP0000000000000',
        depth: 1,
        description: '테스트 1팀',
      },
    ], {});

    await queryInterface.bulkInsert('WEB_USER', [
      {
        id: 'USR0000000000000',
        user_id: 'admin',
        name: '김개발',
        password: '$2a$10$HPsXOkWUd52wnMx37JseMOxcmZezEJDS9uwSH01WVBzOw3CfPK9ry',
        email: 'admin@webadmin.hs',
        phone: '010-1234-5678',
        login_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_ip: '127.0.0.1',
        login_fail_count: 0,
        login_failed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_fail_ip: '127.0.0.1',
        password_changed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        access_ip: '*',
        department_code: 'DEP0000000000000',
        network_map_id: 'NWM0000000000000',
        dashboard_id: 'DBD0000000000000',
        description: '테스트 관리자',
      },
      {
        id: 'USR0000000000001',
        user_id: 'admin1',
        name: '박개발',
        password: '$2a$10$HPsXOkWUd52wnMx37JseMOxcmZezEJDS9uwSH01WVBzOw3CfPK9ry',
        email: 'admin1@webadmin.hs',
        phone: '010-1234-5678',
        login_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_ip: '127.0.0.1',
        login_fail_count: 0,
        login_failed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_fail_ip: '127.0.0.1',
        password_changed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        access_ip: '*',
        department_code: 'DEP0000000000001',
        network_map_id: 'NWM0000000000000',
        dashboard_id: 'DBD0000000000000',
        description: '테스트 사용자',
      },
      {
        id: 'USR0000000000002',
        user_id: 'admin2',
        name: '강개발',
        password: '$2a$10$HPsXOkWUd52wnMx37JseMOxcmZezEJDS9uwSH01WVBzOw3CfPK9ry',
        email: 'admin2@webadmin.hs',
        phone: '010-1234-5678',
        login_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_ip: '127.0.0.1',
        login_fail_count: 0,
        login_failed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_fail_ip: '127.0.0.1',
        password_changed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        access_ip: '*',
        network_map_id: 'NWM0000000000000',
        dashboard_id: 'DBD0000000000000',
        description: '테스트 사용자',
      },
      {
        id: 'USR0000000000003',
        user_id: 'admin3',
        name: '이개발',
        password: '$2a$10$HPsXOkWUd52wnMx37JseMOxcmZezEJDS9uwSH01WVBzOw3CfPK9ry',
        email: 'admin3@webadmin.hs',
        phone: '010-1234-5678',
        login_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_ip: '127.0.0.1',
        login_fail_count: 0,
        login_failed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        login_fail_ip: '127.0.0.1',
        password_changed_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        access_ip: '*',
        department_code: 'DEP0000000000001',
        network_map_id: 'NWM0000000000000',
        dashboard_id: 'DBD0000000000000',
        description: '테스트 사용자',
      },
    ], {});

    await queryInterface.bulkInsert('WEB_USER_AUTHORITY', [
      {
        id: 1,
        web_user_id: 'USR0000000000000',
        authority_code: 'R000',
      },
      {
        id: 2,
        web_user_id: 'USR0000000000000',
        authority_code: 'R002',
      },
      {
        id: 3,
        web_user_id: 'USR0000000000001',
        authority_code: 'R001',
      },
      {
        id: 4,
        web_user_id: 'USR0000000000002',
        authority_code: 'R001',
      },
      {
        id: 5,
        web_user_id: 'USR0000000000003',
        authority_code: 'R001',
      },
    ], {});

    const testData = [];
    for(let i = 0 ; i < 1378 ; ++i) {
      testData.push({
        col1: 'user-'+i,
        col2: 'title-'+i,
        col3: 'summary-'+i
      })
    }

    await queryInterface.bulkInsert('GRID_TEST', testData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('DASHBOARD', null, {});
    await queryInterface.bulkDelete('CHART', null, {});
    await queryInterface.bulkDelete('DASHBOARD_LAYOUT', null, {});
    await queryInterface.bulkDelete('NETWORK_MAP', null, {});
    await queryInterface.bulkDelete('AUTHORITY', null, {});
    await queryInterface.bulkDelete('WEB_USER', null, {});
    await queryInterface.bulkDelete('WEB_USER_AUTHORITY', null, {});
    await queryInterface.bulkDelete('GRID_TEST', null, {});
  }
};

