import React from 'react';

const Models = () => {
    return (
        <div>
            <h2>Models</h2>

            <h3>Users</h3>

            <h4>Structure</h4>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Aditional</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                    <td>Primary Key</td>
                </tr>
                <tr>
                    <td><b>email</b></td>
                    <td>Character Varying</td>
                    <td>Unique</td>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String</td>
                </tr>
                <tr>
                    <td><b>last_name</b></td>
                    <td>String</td>
                </tr>
                <tr>
                    <td><b>role</b></td>
                    <td>String</td>
                    <td>Only can be “customer” or “admin”</td>
                </tr>
                <tr>
                    <td><b>created_at</b></td>
                    <td>Timestamp</td>
                </tr>
            </table>

            <h4>Description</h4>
            <p>Is only a table of users. The users are identified by the email.</p>

            <p>When you search a user in the endpoint, there will be a field called attributes called “image” that field doesn’t exist on the database.</p>

            <h3>Products</h3>

            <h4>Structure</h4>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Aditional</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                    <td>Primary Key</td>
                </tr>
                <tr>
                    <td><b>price</b></td>
                    <td>Integer</td>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String</td>
                </tr>
                <tr>
                    <td><b>description</b></td>
                    <td>Character Varying</td>
                </tr>
                <tr>
                    <td><b>stock</b></td>
                    <td>Integer</td>
                </tr>
                <tr>
                    <td><b>created_at</b></td>
                    <td>Timestamp</td>
                </tr>
            </table>

            <h4>Description</h4>
            <p>The products will be stored here. The products images don’t will be stored on the database; the images will be searched at the moment of the product will be searched.</p>

            <h3>Purchase Orders</h3>
            
            <h4>Structure</h4>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Aditional</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                    <td>Primary Key</td>
                </tr>
                <tr>
                    <td><b>direction</b></td>
                    <td>Character Varying</td>
                </tr>
                <tr>
                    <td><b>ordered_at</b></td>
                    <td>Timestamp</td>
                </tr>
                <tr>
                    <td><b>finished_at</b></td>
                    <td>Timestamp</td>
                    <td>Can be null</td>
                </tr>
                <tr>
                    <td><b>buyer_id</b></td>
                    <td>UUID</td>
                    <td>Polymorphic association</td>
                </tr>
            </table>

            <h4>Description</h4>
            <p>The items of the order will be stored on another table. The field “buyer_id” is a foreign key to the ID of the user or to a deleted user. The unfinished orders have the attribute “finished_at” as null.</p>

            <h3>Sales</h3>
            
            <h4>Structure</h4>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Aditional</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                    <td>Primary Key</td>
                </tr>
                <tr>
                    <td><b>price</b></td>
                    <td>Integer</td>
                </tr>
                <tr>
                    <td><b>quantity</b></td>
                    <td>Integer</td>
                </tr>
                <tr>
                    <td><b>product_id</b></td>
                    <td>UUID</td>
                    <td>Polymorphic association</td>
                </tr>
                <tr>
                    <td><b>purchase_order_id</b></td>
                    <td>UUID</td>
                    <td>Foreign Key</td>
                </tr>
            </table>

            <h4>Description</h4>
            <p>When a purchase order is finished all the order items, that belongs to that order will be deleted and stored in this table. The field “price” will save the price of the product at the moment of the order is finished; this is because the price can change on the table product.</p>

            <p>The field “product_id” have a polymorphic association with the tables products and deleted_products.</p>

            <h3>Deleted Products</h3>
            
            <h4>Structure</h4>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Aditional</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                    <td>Primary Key</td>
                </tr>
                <tr>
                    <td><b>price</b></td>
                    <td>Integer</td>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String</td>
                </tr>
                <tr>
                    <td><b>description</b></td>
                    <td>Character Varying</td>
                </tr>
            </table>

            <h4>Description</h4>
            <p>When a product is deleted and there are sales with this product, the product will be stored on this table and if there are order items with this product, the order items will be deleted.</p>

            <h3>Deleted Users</h3>
            
            <h4>Structure</h4>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Aditional</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                    <td>Primary Key</td>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String</td>
                </tr>
                <tr>
                    <td><b>last_name</b></td>
                    <td>String</td>
                </tr>
            </table>

            <h4>Description</h4>
            <p>When a user is deleted and there are finished purchase orders with this user, the user will be stored on this table. </p>
        </div>
    )
}

export default Models;