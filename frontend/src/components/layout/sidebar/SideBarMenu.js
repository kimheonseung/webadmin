import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './SideBarMenu.css';

function SideBarMenu({title, group, hasSubMenu, href, icon, subMenuArray}) {

  const foldToggle = (e) => {
    const dataMenu = e.currentTarget.dataset.menu;
    const subArr = document.getElementsByClassName('t-sidebar-submenu');
    
    for(let i = 0 ; i < subArr.length ; ++i) {
      const subDataMenu = subArr.item(i).dataset.menu;
      if(dataMenu === subDataMenu) {
        const classList = subArr.item(i).classList;
        if(classList.contains('t-submenu-hide')) {
          subArr.item(i).classList.add('t-submenu-show');
          subArr[i].classList.remove('t-submenu-hide');
        } else if(classList.contains('t-submenu-show')) {
          subArr.item(i).classList.add('t-submenu-hide');
          subArr[i].classList.remove('t-submenu-show');
        } else {
          subArr.item(i).classList.add('t-submenu-hide');
        }
      }
    }
  }

  return (
      <>
        {hasSubMenu ?
        <>
          <span data-menu={group} className="list-group-item t-sidebar-menu t-has-submenu t-br-2" onClick={foldToggle}>
            <span id="icon-wrap">
              <FontAwesomeIcon icon={icon} /> {title}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          {subMenuArray}
        </>
        :
          <a className="t-br-2 t-menu-a" href={href}>
            <span data-menu={group} className="list-group-item t-sidebar-menu t-br-2">
              <FontAwesomeIcon icon={icon} /> {title}
            </span>
          </a>
        }
      </>
  );
}

export default SideBarMenu;