import React, { useEffect } from 'react';
import { faSignInAlt, faSearch, faEye, faChartPie, faSitemap, faChartBar, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import SideBarMenu from './SideBarMenu';
import SideBarSubMenu from './SideBarSubMenu';
import { getToken } from 'scripts/common/AuthUtil';

function SideBar() {
  const menuSelected = (path) => {
    const aMenuArr = document.getElementsByClassName('t-menu-a');
    for(let i = 0 ; i < aMenuArr.length ; ++i) {
      const menuHref = aMenuArr.item(i).getAttribute('href');
      if(path === menuHref)
        aMenuArr.item(i).children[0].classList.add('t-menu-selected');
    }
  }
  useEffect(() => {
    menuSelected(window.location.pathname);
  })
  /* login 관련 메뉴 상수 */
  // const login = {
  //   menu: {
  //     title: '로그인',
  //     group: 'Login',
  //     hasSubMenu: false,
  //     href: '/login',
  //     icon: faSignInAlt,
  //   }
  // }
  /* search 관련 메뉴 상수 */
  const search = {
    menu: {
      title: '검색',
      group: 'Search',
      hasSubMenu: false,
      href: '/search',
      icon: faSearch,
    }
  }
  /* monitoring 관련 메뉴 상수 */
  const monitoring = {
    menu: {
      title: '모니터링',
      group: 'Monitoring',
      hasSubMenu: true,
      icon: faEye,
    },
    subMenu: {
      systemStatus: {
        key: 'system-status',
        title: '시스템 성능',
        group: 'Monitoring',
        icon: faChartPie,
        href: '/system-status'
      },
      map: {
        key: 'map',
        title: '맵',
        group: 'Monitoring',
        icon: faSitemap,
        href: '/map'
      },
      dashboard: {
        key: 'dashboard',
        title: '대시보드',
        group: 'Monitoring',
        icon: faChartBar,
        href: '/dashboard'
      },
    }
  }

  const user = {
    menu: {
      title: '사용자',
      group: 'User',
      hasSubMenu: true,
      icon: faUsers,
    },
    subMenu: {
      management: {
        key: 'user-management',
        title: '사용자 관리',
        group: 'User',
        icon: faUser,
        href: '/user/management'
      },
    }
  }

  useEffect(() => {
  })

  return (
      <>
      {/* flex를 위한 div */}
      <div>
        <div className="t-sidebar" id="sidebar-wrapper">
          <div className="t-sidebar-logo">Developer H.</div>
          <div className="p-2"></div>
          <div className="list-group list-group-flush">
              {/* <SideBarMenu title={login.menu.title} group={login.menu.group} hasSubMenu={login.menu.hasSubMenu} href={login.menu.href} icon={login.menu.icon} /> */}
              <SideBarMenu title={search.menu.title} group={search.menu.group} hasSubMenu={search.menu.hasSubMenu} href={search.menu.href} icon={search.menu.icon} />
              <SideBarMenu title={monitoring.menu.title} group={monitoring.menu.group} hasSubMenu={monitoring.menu.hasSubMenu} icon={monitoring.menu.icon}
                subMenuArray={[
                  <SideBarSubMenu key={monitoring.subMenu.systemStatus.key} title={monitoring.subMenu.systemStatus.title}  group={monitoring.subMenu.systemStatus.group} href={monitoring.subMenu.systemStatus.href} icon={monitoring.subMenu.systemStatus.icon} />, 
                  <SideBarSubMenu key={monitoring.subMenu.map.key} title={monitoring.subMenu.map.title} group={monitoring.subMenu.map.group} href={monitoring.subMenu.map.href} icon={monitoring.subMenu.map.icon} />,
                  <SideBarSubMenu key={monitoring.subMenu.dashboard.key} title={monitoring.subMenu.dashboard.title} group={monitoring.subMenu.dashboard.group} href={monitoring.subMenu.dashboard.href} icon={monitoring.subMenu.dashboard.icon} />,
                ]} />
              <SideBarMenu title={user.menu.title} group={user.menu.group} hasSubMenu={user.menu.hasSubMenu} icon={user.menu.icon} 
                subMenuArray={[
                  <SideBarSubMenu key={user.subMenu.management.key} title={user.subMenu.management.title}  group={user.subMenu.management.group} href={user.subMenu.management.href} icon={user.subMenu.management.icon} />, 
                ]} />
          </div>
        </div>
      </div>
      </>
  );
}

export default SideBar;