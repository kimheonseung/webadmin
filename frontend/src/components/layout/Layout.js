import React, { useEffect } from 'react';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';

const Layout = (props) => {
    useEffect(() => {
        window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => {
            if(e.matches)
                window.setTimeout(() => window.dispatchEvent(new Event('resize')), 251);
        });

    });
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