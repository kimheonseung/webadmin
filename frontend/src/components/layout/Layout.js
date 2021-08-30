import React from 'react';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';

const Layout = (props) => {
    return (
        <>
            <div className="d-flex" id="wrapper">
                <SideBar />
                <div className="t-content" id="page-content-wrapper">
                    <Header />
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;