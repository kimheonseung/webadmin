import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBarSubMenu = ({title, group, href, icon}) => {

  return (
      <>
        <a className="t-br-2 t-menu-a" href={href}>
          <span data-menu={group} className="list-group-item t-sidebar-submenu t-br-2">
            <FontAwesomeIcon icon={icon} /> {title}
          </span>
        </a>
      </>
  );
}

export default SideBarSubMenu;