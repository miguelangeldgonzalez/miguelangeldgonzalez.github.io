import React from 'react';

import '../styles/_vars.scss';
import '../styles/Layout.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

const layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout;