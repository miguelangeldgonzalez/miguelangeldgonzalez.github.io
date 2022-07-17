import React from 'react';
import { Link } from 'react-router-dom';

import Postgres from '@icons/logo_postgres_sql.png';
import WebpackLogo from '@icons/logo_webpack.png';
import Bootstrap from '@icons/logo_bootstrap.png';
import Express from '@icons/logo_express_js.png';
import NodeJS from '@icons/logo_node_js.png';
import ReactJS from '@icons/logo_react.png';
import PHP from '@icons/logo_php.png';
import JS from '@icons/logo_js.png';

import '../styles/ProjectCard.css';
//02856323104
const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <Link to={props.to || '/'}>
                <h3>{props.title}</h3>
                <p>{props.children}</p>
                <div className="project-card__languages">
                    {props.languages.map(lg => {
                        let img = undefined;
                        let className = '';

                        switch(lg) {
                            case 'POSTGRES':
                                img = Postgres;
                                break;
                            case 'BOOTSTRAP':
                                img = Bootstrap;
                                break;
                            case 'EXPRESS':
                                img = Express;
                                break;
                            case 'NODE':
                                img = NodeJS;
                                break;
                            case 'PHP':
                                img = PHP;
                                className = 'icon-large'
                                break;
                            case 'JS':
                                img = JS;
                                break;
                            case 'REACT':
                                img = ReactJS;
                                break;
                            case 'WEBPACK':
                                img = WebpackLogo;
                                break;
                        }
                        return (
                            <img src={img} className={className} />
                        );
                    })}
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;