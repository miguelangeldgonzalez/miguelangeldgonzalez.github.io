import React from 'react';

import ProjectCard from '../components/ProjectCard';

import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h1 className='title'>M<span className='title__delay1'>y</span> Proje<span className='title__delay2'>ct</span>s</h1>
            <div className='project-section__cards-container'>
                <ProjectCard title='Store API REST' languages={['EXPRESS', 'POSTGRES', 'NODE']} to='/projects/store_api_rest'>
                    API to manage a store. Created with JWT for sessions, Express for endpoints and Sequelize ORM to manage any type of Data Base.
                </ProjectCard>
                
                <ProjectCard title='Catalog and Sales Manager' languages={['JS', 'PHP', 'BOOTSTRAP']} to='/projects/catalog_and_sales_manager'>
                Software created for ACM Investments, the software stores the catalog of the real states that the company can sale and provide a sales record.
                </ProjectCard>
            </div>
        </div>
    )
}

export default Projects;