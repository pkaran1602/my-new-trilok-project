import React from 'react';
import style from './layout.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            <div>
                <div className={style.layout}>
                    <div className={style.sticky}>
                        <Header />
                    </div>
                    <div className={style.outlet}>
                        <Outlet />
                    </div>
                </div>
                <footer className="ml-auto">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Layout