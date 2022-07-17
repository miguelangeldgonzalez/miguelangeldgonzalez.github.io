import React from 'react';

import { useLocation } from 'react-router-dom';

import '../styles/_vars.scss';
import '../styles/Layout.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

const layout = ({ children }) => {
    const {pathname} = useLocation();

    const setOnTop = path => {
        window.scrollTo(0,0);
    }

    return (
        <div className="layout">
            {setOnTop(pathname)}
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout;