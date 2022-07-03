import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';

import Layout from '../containers/Layout';

import CatalogueManager from '../pages/projects/CatalogueManager';
import StoreAPI from '../pages/projects/StoreAPI';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import Home from '../pages/Home';

const App = () => {
    return (
       <HashRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/projects/catalogue_and_sales_manager" element={<CatalogueManager />} />
                    <Route exact path="/projects/store_api_rest/*" element={<StoreAPI />} />
                    <Route exact path="/about" element={<AboutMe />} />
                </Routes>
            </Layout>
       </HashRouter>
    );
}

export default App;