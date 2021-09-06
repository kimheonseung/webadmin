import React from 'react';

function Header() {
    const toggle = (e) => {
        e.preventDefault();
        document.getElementById("wrapper").classList.toggle("toggled");
        window.setTimeout(() => window.dispatchEvent(new Event('resize')), 251);
    }
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light t-navbar">
            <button className="btn btn-secondary t-btn-toggle" onClick={toggle} id="menu-toggle">메뉴 접기/펴기</button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="{() => false}">사용자</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="{() => false}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="{() => false}">Action</a>
                            <a className="dropdown-item" href="{() => false}">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="{() => false}">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
      </>
  );
}

export default Header;