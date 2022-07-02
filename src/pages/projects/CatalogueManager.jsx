import React from 'react';

import SimpleTextBox from '@containers/SimpleTextBox';
import Carrousel from '@components/Carrousel';

import Img1 from '@projects-images/catalogueManager/1-login.png';
import Img2 from '@projects-images/catalogueManager/2-Sing_up.png';
import Img3 from '@projects-images/catalogueManager/3-Phones_manager.png';
import Img4 from '@projects-images/catalogueManager/4-Real_state_manager.png';
import Img5 from '@projects-images/catalogueManager/5-Employees_manager.png';
import Img6 from '@projects-images/catalogueManager/6-User_configuration.png';
import Img7 from '@projects-images/catalogueManager/7-Sales_report.png';
import Img8 from '@projects-images/catalogueManager/8-Sales_report.png';


import '@styles/CatalogueManager.css';

const CatalogueManager = () => {
    let carrouselImages = [
        {
            img: Img1,
            alt: "Login"
        },{
            img: Img2,
            alt: "Sing Up"
        },{
            img: Img3,
            alt: "Phones Manager"
        },{
            img: Img4,
            alt: "Real State Manager"
        },{
            img: Img5,
            alt: "Employees Manager"
        },{
            img: Img6,
            alt: "User Configuration"
        },{
            img: Img7,
            alt: "Sales Report"
        },{
            img: Img8,
            alt: "Sales Report"
        }
    ]
    return (
        <div className='catalogue-manager__container'>
            <h1 className='title'>Catalogue and Sales Manager</h1>

            <SimpleTextBox>
                <h2>About the Company</h2>
                <p>ACM Investmens is principally a real state company, but sells phones and vehicles too (yes, it’s a bit strange combination). The company stored the information about the real states and vehicles in excel sheets and the images was stored in groups of messaging services like whatsapp and telegram.</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Software Requirements</h2>
                <p>The software have to store the data about the phnoes like the RAM, storage, brand, model, the stock, etc. Aditionally have to store the data of the real states and the vehicles.</p>

                <p>Have to give a user hierarchy. There was three types of users, the adviser that only can query data, the administrators that can create data and the managers that can creae data an delete users.</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Development Process</h2>
                <p>Originally the software was made with JQuery. The register section, the login and the phone’s data manager it was made with JQuery.</p>

                <p>But I realized that it was better delete JQuery and use vanilla JavaScript, becuase with the API fetch JavaScript can do anything that JQuery do and it is faster a little more complicate but faster.</p>

                <p>The frontend was made with bootstrap, the backend was made with PHP and the database was MySQL</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Images of the Product</h2>
                <Carrousel images={carrouselImages} />
            </SimpleTextBox>
        </div>
    );
}

export default CatalogueManager;