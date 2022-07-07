import React from 'react';

const Basics = () => {
    return (
        <React.Fragment>
            <h2>Basics</h2>

            <h3>Description</h3>
            <p>This is a RESTFULL API. This API is created with the aim of can manage all kind of e-commerce, providing manage of products, sales and users.</p>

            <p>It is easy to use and doesn't complicate too much the functions and does not overcomplicate its functions to make it easy to implement.</p>

            <h3>Payment</h3>
            <p>This API doesn't implement a payment gateway, becuase was designed for venezuelan e-commerces and the banks from Venezuela doesn't provide a way to make online pays. It would use a digital wallet as Paypal or Zinli but that wallets doesn't are populars here.</p>

            <p>So, to make a pay the users have to enter the bank transaction reference number and will be validated by an admin.</p>

            <h3>Technologies</h3>
            <p>Originally the database is made with <b>PostgreSQL</b>, but as the business logic was made with <b>Sequelize ORM</b>, it can implements many type of relational databases.</p>

            <p>The login, authentication and authorization was made with <b>JWT</b> and <b>Passport JS</b>.</p>

            <p>Adionally provide password recovery using <b>Nodemailer</b>.</p>
        </React.Fragment>
    )
}

export default Basics;