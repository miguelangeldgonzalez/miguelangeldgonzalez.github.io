import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from '../containers/Layout';

import CatalogueManager from '../pages/projects/CatalogManager';
import CaracasCake from '../pages/projects/CaracasCake';
import Portafolio from '../pages/projects/Portafolio';
import StoreAPI from '../pages/projects/StoreAPI';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import AboutMe from '../pages/AboutMe';
import Home from '../pages/Home';

const App = () => {
    return (
       <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/projects/catalog_and_sales_manager" element={<CatalogueManager />} />
                    <Route exact path="/projects/caracas_cakes_web_site" element={<CaracasCake />} />
                    <Route exact path="/projects/store_api_rest/*" element={<StoreAPI />} />
                    <Route exact path="/projects/portfolio" element={<Portafolio />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/about" element={<AboutMe />} />
                </Routes>
            </Layout>
       </BrowserRouter>
    );
}

export default App;