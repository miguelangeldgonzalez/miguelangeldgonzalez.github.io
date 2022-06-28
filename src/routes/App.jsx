import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from '../containers/Layout';

import ProjectStoreAPI from '../pages/ProjectStoreAPI';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import Home from '../pages/Home';

const App = () => {
    return (
       <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/projects/store_api_rest" element={<ProjectStoreAPI />} />
                    <Route exact path="/about" element={<AboutMe />} />
                </Routes>
            </Layout>
       </BrowserRouter>
    );
}

export default App;