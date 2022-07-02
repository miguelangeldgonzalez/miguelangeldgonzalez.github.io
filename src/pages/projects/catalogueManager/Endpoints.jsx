import React from 'react';

const Endpoints = () => {
    /*
        Index
        Products ~ 325

    */
    return (
        <div>
            {/*--------------------- USERS ----------------------*/}
            <React.Fragment>
            <h2>Endpoints</h2>

            <h3>Users</h3>
            <h4><span>POST</span> - Create User</h4>

            <h5>Authorization</h5>
            <p>No needs authorization.</p>

            <h5>Body</h5>
            <p>Send a body with these attributes (all are requireds):</p>
            <table>
                <tr>
                    <th>value</th>
                    <th>description</th>
                </tr>
                <tr>
                    <td><b>email</b></td>
                    <td>String with a valid email structure.</td>
                </tr>
                <tr>
                    <td><b>password</b></td>
                    <td>Alphanumeric and have more than 8 characters.</td>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String with only letters, with a min of 2 letters</td>
                </tr>
                <tr>
                    <td><b>lastName</b></td>
                    <td>String with only letters, with a min of 2 letters</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an object with these attributes:</p>
            <code>
                {`
                {
                    "id": "379723b8-f12a-475f-b58c-a8792764e97c",
                    "role": "customer",
                    "createdAt": "2022-06-17T17:20:55.768Z",
                    "email": "raul@gmail.com",
                    "name": "Raul",
                    "lastName": "Joaquin"
                }
                `}
            </code>
            <p>201 - Created</p>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or is wrong</td>
                </tr>
            </table>
            
            <h4><span>GET</span> - Get All Users</h4>

            <h5>Authorization</h5>
            <p>Require admin authorization.</p>

            <h5>Query Params</h5>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>Search a user by the name, have to be a string</td>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>Search by the id, have to be a UUID</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an <b>array</b> of objects with these attributes:</p>
            <code>
                {`
                {
                    "id": "e28017d0-4224-47a7-bda4-6b2bacf7aa32",
                    "email": "amelia@gmail.com",
                    "name": "Amelia",
                    "lastName": " Margarita",
                    "role": "customer",
                    "createdAt": "2022-06-07T23:25:34.991Z",
                    "image": false
                }                        
                `}
            </code>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or is wrong</td>
                </tr>
                <tr>
                    <td>403 - Forbidden</td>
                    <td>If the user is not a admin</td>
                </tr>
            </table>

            <h4><span>PATCH</span> - Edit Users</h4>

            <h5>Authorization</h5>
            <p>Will edit the logged user. If an admin user is logged, will edit the user of the specified ID.</p>

            <h5>Body</h5>
            <p>Send a body with these attributes (all are optional):</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                </tr>
                <tr>
                    <td><b>email</b></td>
                    <td>String with a valid email structure.</td>
                </tr>
                <tr>
                    <td><b>password</b></td>
                    <td>Alphanumeric and have more than 8 characters.</td>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String with only letters, with a min of 2 letters</td>
                </tr>
                <tr>
                    <td><b>lastName</b></td>
                    <td>String with only letters, with a min of 2 letters</td>
                </tr>
            </table>

            <p>If the user is not an admin the attribute ID will be ignored.</p>

            <h5>Returned</h5>
            <p>The endpoint will return an object with these attributes:</p>
            <code>
                {`
                {
                    "id": "e28017d0-4224-47a7-bda4-6b2bacf7aa32",
                    "email": "amelia@gmail.com",
                    "name": "Luisa",
                    "lastName": "Margarita",
                    "role": "customer",
                    "createdAt": "2022-06-07T23:25:34.991Z"
                }                                          
                `}
            </code>
            <p>Is the same user but with the modifications.</p>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or is wrong</td>
                </tr>
                <tr>
                    <td>404 - Not Found</td>
                    <td>If an admin try to edit a user and the id of the user isn’t on the data base</td>
                </tr>
            </table>

            <h4><span>DELETE</span> - Delete Users</h4>

            <h5>Authorization</h5>
            <p>Will delete the logged user. If an admin user is logged, will delete the user of the specified ID.</p>

            <h5>Body</h5>
            <p>Send a body with this attribute:</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                </tr>
            </table>

            <p>If the user is not an admin the attribute ID will be ignored.</p>

            <h5>Returned</h5>
            <p>The endpoint will return an object with these attributes:</p>
            <code>
                {`
                {
                   "mesage": "User deleted"
                }                                          
                `}
            </code>
            <p>Is the same user but with the modifications.</p>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or is wrong</td>
                </tr>
                <tr>
                    <td>404 - Not Found</td>
                    <td>If an admin try to edit a user and the id of the user isn’t on the data base</td>
                </tr>
            </table>
                
            <h4><span>POST</span> - /upload_profile_image</h4>

            <h5>Authorization</h5>
            <p>Will load the profile image of the logged user.</p>

            <h5>Body</h5>
            <p>Send a FormData with the image, no matters the field name neither the quantity of images. The backend ever will take the first file that achieve the requirements.</p>

            <h5>Returned</h5>
            <p>The endpoint will return an array of objects with these attributes:</p>
            <code>
                {`
                {
                    "image": "https://api.backend.com/profile_photos/e28017d0-4224-47a7-bda4-6b2bacf7aa32.png",
                    "message": "Image loaded correctly"
                `}
            </code>
            <p>201 - Created</p>
            <p>All the profile images will converted to PNG format and stored on the folder profile_photos using the id of the user as name.</p>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>415 - Unsupported Media Type</td>
                    <td>The only type admitted are JPEG, JPG, PNG and GIF</td>
                </tr>
                <tr>
                    <td>406 - Not Acceptable</td>
                    <td>The max file size is 3MB</td>
                </tr>
            </table>

            <h4><span>DELETE</span> - /delete_profile_image</h4>

            <h5>Authorization</h5>
            <p>Will edit the logged user. If an admin user is logged, will delete the user’s profile image of the specified ID.</p>

            <h5>Body</h5>
            <p>Only for admin users therefore is optional.</p>

            <table>
                <tr>
                    <th>Description</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                </tr>
            </table>

            <p>If the ID is specified, but the logged is not an admin, the ID will be ignored and will take the ID of the logged user.</p>
            
            <h5>Returned</h5>
            <p>The endpoint will return an object with these attributes:</p>
            <code>
                {`
                {
                    "message": "Deleted"
                }                                          
                `}
            </code>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>The field id is worng</td>
                </tr>
                <tr>
                    <td>404 - Not Found</td>
                    <td>The user doesn’t have profile image or the specified ID doesn’t belong to any user</td>
                </tr>
            </table>
            </React.Fragment>
            
            {/*--------------------- PRODUCTS ----------------------*/}
            <React.Fragment>
            <h3>Products</h3>

            <h4><span className='post'>POST</span> - Create Product</h4>

            <h5>Authorization</h5>
            <p>Only an admin can create a product.</p>

            <h5>Body</h5>
            <p>Send a body with these attributes (all are requireds):</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String.</td>
                </tr>
                <tr>
                    <td><b>price</b></td>
                    <td>Integer, 0 not admitted.</td>
                </tr>
                <tr>
                    <td><b>description</b></td>
                    <td>Character Varying</td>
                </tr>
                <tr>
                    <td><b>stock</b></td>
                    <td>Integer greater or equal to 0.</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an object with these attributes:</p>
            <code>
                {`
                {
                    "id": "889467e2-86f1-4971-a0d7-3d2632361c9f",
                    "createdAt": "2022-06-20T01:58:58.331Z",
                    "price": 87,
                    "name": "Agua de cambur",
                    "description": "Agua de cambur saturada de musica",
                    "stock": 5
                }                
                `}
            </code>
            <p>201 - Created</p>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or is wrong</td>
                </tr>
                <tr>
                    <td>403 - Forbiden</td>
                    <td>If the user is not an admin</td>
                </tr>
            </table>

            <h4><span className='get'>GET</span> - Get All Products</h4>

            <h5>Authorization</h5>
            <p>No needs authorization.</p>

            <h5>Query Params</h5>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>ID of the product.</td>
                </tr>
                <tr>
                    <td><b>greater_than</b></td>
                    <td>Price gretater than.</td>
                </tr>
                <tr>
                    <td><b>less_than</b></td>
                    <td>Price less than.</td>
                </tr>
                <tr>
                    <td><b>limit</b></td>
                    <td>Set a limit</td>
                </tr>
                <tr>
                    <td><b>offset</b></td>
                    <td>Set an offset.</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an array of objects with these attributes:</p>
            <code>
                {`
               {
                    "id": "24a714ac-9ef7-4492-931b-a3811fc98182",
                    "price": 3,
                    "name": "Pescado frito",
                    "description": "Pescado frito con aceite de ballena blanca que sabia cantar opera griega",
                    "stock": 26,
                    "createdAt": "2022-06-08T23:05:48.359Z",
                    "images": []
                }                               
                `}
            </code>
            <p>The attribute “image”, will return an array with the URLs of the images of the product.</p>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is wrong</td>
                </tr>
            </table>

            <h4><span className='delete'>DELETE</span> - Delete a Product</h4>

            <h5>Authorization</h5>
            <p>Only an admin can delete a product.</p>

            <h5>Body</h5>
            <p>Send a body with these attributes (is required):</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>ID of the product.</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an array of objects with these attributes:</p>
            <code>
                {`
               {
                    "message: "Product deleted"
                }                               
                `}
            </code>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is wrong</td>
                </tr>
                <tr>
                    <td>403 - Forbiden</td>
                    <td>The user is not an admin</td>
                </tr>
            </table>

            <h4><span className='post'>PATCH</span> - Edit User</h4>

            <h5>Authorization</h5>
            <p>Only an admin can edit a product.</p>

            <h5>Body</h5>
            <p>Send a body with these attributes (all are optional, but id is required):</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
            
                <tr>
                    <td><b>id</b></td>
                    <td>UUID.</td>
                </tr>
                <tr>
                    <td><b>name</b></td>
                    <td>String.</td>
                </tr>
                <tr>
                    <td><b>price</b></td>
                    <td>Integer, 0 not admitted.</td>
                </tr>
                <tr>
                    <td><b>description</b></td>
                    <td>Character Varying</td>
                </tr>
                <tr>
                    <td><b>stock</b></td>
                    <td>Integer greater or equal to 0.</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an object with these attributes:</p>
            <code>
                {`
                {
                    "id": "889467e2-86f1-4971-a0d7-3d2632361c9f",
                    "createdAt": "2022-06-20T01:58:58.331Z",
                    "price": 87,
                    "name": "Agua de cambur",
                    "description": "Agua de cambur saturada de musica",
                    "stock": 5
                }                
                `}
            </code>
            <p>201 - Created</p>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or is wrong</td>
                </tr>
                <tr>
                    <td>403 - Forbiden</td>
                    <td>If the user is not an admin</td>
                </tr>
            </table>
            
            <h4><span className='post'>POST</span> - /upload_product_images</h4>

            <h5>Authorization</h5>
            <p>Only an admin can upload products images.</p>

            <h5>Body</h5>
            <p>A FormData with the images and this fields (all are requireds):</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
            
                <tr>
                    <td><b>field</b></td>
                    <td>String. The name of the input {`(<input name=””>)`} of the images.</td>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID of the product.</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an array of strings, with the URLs of the uploaded images.</p>
            <code>
                {`
                [
                    "backend.com/products/889467e2-86f1-4971-a0d7-3d2632361c9f/Agua_de_cambur_119.png",
                    "backend.com/products/889467e2-86f1-4971-a0d7-3d2632361c9f/Agua_de_cambur_118.png"
                ]                                
                `}
            </code>
            <p>The products images are in the folder products, in the folder products there is a folder with the id of the products that has images uploaded.</p>

            <p>The max of images per product by default is 10, but the backend administrator can change it. The upload image works like that:</p>
            <ul>
                <li>If you try to upload more than 10 images to the same product, the first 10 images will be uploaded. </li>
                <li>If you try to upload images to a product that already have images, will be uploaded the images needed to complete 10. For example, if you try to upload 6 images to a product that already have 8 images, only will be uploaded 2 images.</li>
                <li>If you try to upload images to a product that already have 10 images, you will be have a 409 ERROR.</li>
            </ul>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>404 - Not Found</td>
                    <td>There is not a product with the specified ID</td>
                </tr>
                <tr>
                    <td>409 – Conflict </td>
                    <td>The field of the upload files is not found or the product exceeds the limit of images per product</td>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or a field is wrong</td>
                </tr>
            </table>

            <h4><span className='delete'>DELETE</span> - /delete_product_images</h4>

            <h5>Authorization</h5>
            <p>Only an admin can delete products images.</p>

            <h5>Body</h5>
            <p>Send a body with this attribute (all rea optional except the id):</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
            
                <tr>
                    <td><b>id</b></td>
                    <td>UUID. The id of the product.</td>
                </tr>
                <tr>
                    <td><b>deleteAll</b></td>
                    <td>Boolean. If true, will delete all the images (Optional).</td>
                </tr>
                <tr>
                    <td><b>images</b></td>
                    <td>Array of strings. The images you want to delete.</td>
                </tr>
            </table>

            <p>If you specify deleteAll and images, all the images will be deleted.</p>

            <h5>Returned</h5>
            <p>The endpoint will return an array of strings, with the URLs of the uploaded images.</p>
            <code>
                {`
                {
                    "message": "Images product deleted successfully",
                }
                `}
            </code>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>404 - Not Found</td>
                    <td>There is not a product with the specified ID</td>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or a field is wrong</td>
                </tr>
            </table>
            </React.Fragment>

            {/*------------------- PURCHASE ORDER --------------------*/}
            <React.Fragment>
            <h3>Purchase Order</h3>

            <h4><span>GET</span> - Get All Orders</h4>

            <h5>Authorization</h5>
            <p>A customer can only search for their orders. An admin can see all orders.</p>

            <h5>Query</h5>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID. Id of the order.</td>
                </tr>
                <tr>
                    <td><b>buyerId</b></td>
                    <td>UUID. Search orders by user.</td>
                </tr>
                <tr>
                    <td><b>finished</b></td>
                    <td>Boolean. Search all finished orders.</td>
                </tr>
                <tr>
                    <td><b>notFinished</b></td>
                    <td>Boolean. Search all  not finished orders.</td>
                </tr>
                <tr>
                    <td><b>finishedBefore</b></td>
                    <td>Date “YYYY-MM-DD”. Search all finished orders before the specified date.</td>
                </tr>
                <tr>
                    <td><b>finishedAfter</b></td>
                    <td>Date “YYYY-MM-DD”. Search all finished orders after the specified date.</td>
                </tr>
                <tr>
                    <td><b>createdBefore</b></td>
                    <td>Date “YYYY-MM-DD”. Search all created orders before the specified date.</td>
                </tr>
                <tr>
                    <td><b>createdAfter</b></td>
                    <td>Date “YYYY-MM-DD”. Search all created orders after the specified date.</td>
                </tr>
                <tr>
                    <td><b>offset</b></td>
                    <td>Integer. Set an offset.</td>
                </tr>
                <tr>
                    <td><b>limit</b></td>
                    <td>Integer. Set a limit.</td>
                </tr>
                <tr>
                    <td><b>self</b></td>
                    <td>Boolean. By default, the admin will receive all the orders, if self is true, the admin only will receive their orders</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <p>The endpoint will return an object with principally two attributes, “count” indicates the number of orders and “orders” that is an array of the orders.</p>
            <code>
                {`
                {
                    "orders": [
                        {
                            "id": "4d2e1027-bf80-4223-9f59-5f3a8d3322ae",
                            "direction": "Narnia, Calle 34 Case 22",
                            "orderedAt": "2022-06-08T23:02:09.527Z",
                            "finishedAt": "2022-06-08T23:04:20.108Z",
                            "orderItems": [
                                {
                                    "price": 3,
                                    "quantity": 5,
                                    "product": {
                                        "id": "48b82aa0-a774-4d4c-ae42-af52483dee4b",
                                        "price": 3,
                                        "name": "Cochino",
                                        "description": "Lonjas de cochino horneada con alas de Dodo"
                                    }
                                },
                                {
                                    "price": 5,
                                    "quantity": 8,
                                    "product": {
                                        "id": "3d2fbe5c-124b-4d1f-af13-86c8b8264b80",
                                        "price": 50,
                                        "name": "Patas de conejo",
                                        "description": "Par de patas de conejo usadas por un chaman de zimbabue",
                                        "stock": 40,
                                        "createdAt": "2022-06-08T00:25:49.839Z"
                                    }
                                }
                            ],
                            "buyer": {
                                "id": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                                "name": "Saul",
                                "lastName": "Tijeras"
                            }
                        }
                    ],
                    "count": 3
                }                
                `}
            </code>
            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td>400 - Bad Request</td>
                    <td>A field is not defined or is wrong</td>
                </tr>
                <tr>
                    <td>403 - Forbiden</td>
                    <td>If the user is not an admin</td>
                </tr>
            </table>

            <h4><span className='post'>POST</span> - Create Purchase Order</h4>
            
            <h5>Authorization</h5>
            <p>Only the admin can create orders for other users. The customer only can create orders for themselves.</p>

            <h5>Body</h5>
            <p>All fields are required, except buyerId, if the admin is logged will take buyerId, if the admin is not logged, buyerId will be ignored.</p>

            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>direction</b></td>
                    <td>String. The direction of the order</td>
                </tr>
                <tr>
                    <td><b>buyerId</b></td>
                    <td>UUID. Id of the buyer</td>
                </tr>
                <tr>
                    <td><b>orderItems</b></td>
                    <td>An array with objects of the ordered products</td>
                </tr>
                <tr>
                    <th>Attributes of the objects in the array</th>
                </tr>
                <tr>
                    <td><b>quantity</b></td>
                    <td>Integer. The quantity of the product oredered</td>
                </tr>
                <tr>
                    <td><b>productId</b></td>
                    <td>UUID. Id of the product ordered</td>
                </tr>
            </table>

            <code>
                {`
                {
                    "direction": "Lima, Costa Brava",
                    "buyerId": "2135a6a9-36fd-487e-a637-50a989700ab0",
                    "orderItems": [
                        {
                            "quantity": 1,
                            "productId": "3e1587bf-090a-426e-82f0-96691ccade3d"
                        }
                    ]
                }                
                `}
            </code>

            <p>When an order is created the stock of the product ordered will decrease by the quantity ordered.</p>

            <h5>Returned</h5>
            <p>The endpoint will return an object with these attributes:</p>
            <code>
                {`{
                    "id": "b5ac518b-6387-4aaa-ad61-05f6bb5a6bd0",
                    "orderedAt": "2022-06-20T03:35:47.206Z",
                    "finishedAt": null,
                    "direction": "Venezuela, Aguas Calientes",
                    "orderItems": [
                        {
                            "id": 15,
                            "quantity": 1,
                            "productId": "24a714ac-9ef7-4492-931b-a3811fc98182",
                            "purchaseOrderId": "b5ac518b-6387-4aaa-ad61-05f6bb5a6bd0"
                        }
                    ],
                    "buyerId": "7dd1277f-a138-4071-932e-563fd290b7d5"
                }`}
            </code>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>404 - Not Found</b></td>
                    <td>There is not a product with the specified Id or there is not a user with the specified id</td>
                </tr>
                <tr>
                    <td><b>400 - Not found</b></td>
                    <td>A field is not defined or is wrong</td>
                </tr>
            </table>
            
            <h4><span>DELETE</span> - Delete Order</h4>

            <h5>Authorization</h5>
            <p>Only an admin user can delete orders.</p>

            <h5>Body</h5>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>id</td>
                    <td>UUID (Required)</td>
                </tr>
            </table>

            <p>When an order is deleted the stock of the products in the order will increase by the quantity ordered.</p>

            <p><b>NOTE:</b> You can’t delete a finished order; only unfinished orders can be deleted. To delete a finished order, you have to delete all their sales and the order will be deleted automatically.</p>

            <h5>Returned</h5>
            <code>
                {`{
                    "message": "Order deleted",
                }`}
            </code>
            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Error</th>
                    <th>Reason</th>
                </tr>
                <tr>
                    <td><b>404 - Not Found</b></td>
                    <td>There is not an order with the  specified id</td>
                </tr>
                <tr>
                    <td><b>400 - Bad Request</b></td>
                    <td>A field is not defined or is worng</td>
                </tr>
            </table>

            <h4><span>PATCH</span> - Update Order</h4>

            <h5>Authorization</h5>
            <p>Only an admin can update orders.</p>

            <h5>Body</h5>
            <p>Both are required</p>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID</td>
                </tr>
                <tr>
                    <td><b>direction</b></td>
                    <td>String</td>  
                </tr>
            </table>

            <h5>Returned</h5>
            <code>
                {`{
                    "id": "4d2e1027-bf80-4223-9f59-5f3a8d3322ae",
                    "direction": "Guanajuato",
                    "orderedAt": "2022-06-08T23:02:09.527Z",
                    "finishedAt": "2022-06-08T23:04:20.108Z",
                    "orderItems": [
                        {
                            "price": 3,
                            "quantity": 5,
                            "product": {
                                "id": "48b82aa0-a774-4d4c-ae42-af52483dee4b",
                                "price": 3,
                                "name": "Cochino",
                                "description": "Lonjas de cochino horneada con alas de Dodo"
                            }
                        },
                        {
                            "price": 5,
                            "quantity": 8,
                            "product": {
                                "id": "3d2fbe5c-124b-4d1f-af13-86c8b8264b80",
                                "price": 50,
                                "name": "Patas de conejo",
                                "description": "Par de patas de conejo usadas por un chaman de zimbabue",
                                "stock": 40,
                                "createdAt": "2022-06-08T00:25:49.839Z"
                            }
                        }
                    ],
                    "buyer": {
                        "id": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                        "name": "Saul",
                        "lastName": "Tijeras"
                    }
                }`}
            </code>
            <p>Will return the order with the chages.</p>

            <h4><span className='patch'>PATCH</span> - /set_as_finished</h4>

            <h5>Authorization</h5>
            <p>Only an admin can set an order as finished</p>

            <h5>Body</h5>
            <table>
                <tr>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>id</b></td>
                    <td>UUID (Required)</td>
                </tr>
            </table>

            <h5>Returned</h5>
            <code>
                {`{
                    "id": "ca4a6622-aec6-4dab-b944-33f52fda4900",
                    "direction": "Turkia",
                    "orderedAt": "2022-06-14T14:52:10.422Z",
                    "finishedAt": "2022-06-20T03:51:44.262Z",
                    "orderItems": [
                        {
                            "id": 12,
                            "quantity": 1,
                            "product": {
                                "id": "3d2fbe5c-124b-4d1f-af13-86c8b8264b80",
                                "price": 50,
                                "name": "Patas de conejo",
                                "description": "Par de patas de conejo usadas por un chaman de zimbabue",
                                "stock": 40,
                                "createdAt": "2022-06-08T00:25:49.839Z"
                            }
                        }
                    ],
                    "buyer": {
                        "id": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                        "name": "Saul",
                        "lastName": "Tijeras"
                    }
                }`}
            </code>

            <h5>Errors</h5>
            <table>
                <tr>
                    <th>Error</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><b>404 - Not Found</b></td>
                    <td>There is not an order with the specified ID</td>
                </tr>
                <tr>
                    <td><b>400 - Bad Request</b></td>
                    <td>A field is not defined, a field is wrong or the order is already set as finished</td>
                </tr>
            </table>
            </React.Fragment>

            {/*----------------------- SALES -------------------------*/}
            <React.Fragment>
                <h3>Sales</h3>
                <p>All these endpoints need admin authorization.</p>

                <h4><span className='get'>GET</span> - Get All Sales</h4>

                <h5>Query Params</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>id</b></td>
                        <td>UUID. Search by the id of the sell</td>
                    </tr>
                    <tr>
                        <td><b>productId</b></td>
                        <td>UUID. Search by the id of the product</td>
                    </tr>
                    <tr>
                        <td><b>minQuantity</b></td>
                        <td>Integer. Set a min quantity</td>
                    </tr>
                    <tr>
                        <td><b>maxQuantity</b></td>
                        <td>Integer. Set a max quantity</td>
                    </tr>
                    <tr>
                        <td><b>minPrice</b></td>
                        <td>Integer. Set a min price</td>
                    </tr>
                    <tr>
                        <td><b>maxPrice</b></td>
                        <td>Integer. Set a max price</td>
                    </tr>
                    <tr>
                        <td><b>limit</b></td>
                        <td>Integer. Set a limit</td>
                    </tr>
                    <tr>
                        <td><b>Offset</b></td>
                        <td>Integer. Set an offset</td>
                    </tr>
                </table>

                <h5>Returned</h5>
                <p>The endpoint will return an array with these attributes:</p>
                <code>{`{
                        "id": "5c4aee8c-45a6-4d28-80b2-04675831b899",
                        "price": 3,
                        "quantity": 5,
                        "purchaseOrder": {
                            "id": "4d2e1027-bf80-4223-9f59-5f3a8d3322ae",
                            "direction": "Guanajuato",
                            "buyerId": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                            "orderedAt": "2022-06-08T23:02:09.527Z",
                            "finishedAt": "2022-06-08T23:04:20.108Z"
                        },
                        "product": {
                            "id": "48b82aa0-a774-4d4c-ae42-af52483dee4b",
                            "price": 3,
                            "name": "Cochino",
                            "description": "Lonjas de cochino horneada con alas de Dodo"
                        }
                    }
                `}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Error</th>
                        <th>Reson</th>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field is not defined or a field is wrong</td>
                    </tr>
                </table>

                <h4><span className='patch'>PATCH</span> - Edit Sell</h4>
                
                <h5>Body</h5>

                <p>All are optional, except the id.</p>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>id</b></td>
                        <td>UUID</td>
                    </tr>
                    <tr>
                        <td><b>Quantity</b></td>
                        <td>Integer</td>
                    </tr>
                    <tr>
                        <td><b>price</b></td>
                        <td>Integer</td>
                    </tr>
                </table>

                <h5>Returned</h5>
                <code>{`{
                    "id": "020f2a2f-d27b-4773-8b7e-80a4fd9d905a",
                    "price": 10,
                    "productId": "3e1587bf-090a-426e-82f0-96691ccade3d",
                    "purchaseOrderId": "ed270f7b-d942-4afc-a26e-3dde2accb567",
                    "quantity": 15,
                    "product_id": "3e1587bf-090a-426e-82f0-96691ccade3d"
                }
                `}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Error</th>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td><b>404 - Not Found</b></td>
                        <td>There is not an order with the specified ID</td>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field is wrong</td>
                    </tr>
                </table>

                <h4><span className="delete">DELETE</span> - Delete Sell</h4>

                <h5>Body</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>id</b></td>
                        <td>UUID (Required)</td>
                    </tr>
                </table>

                <h5>Returned</h5>
                <code>{`{
                    "message": "Sell deleted",
                }`}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Error</th>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td><b>404 - Not Found</b></td>
                        <td>There is not an order with the specified ID</td>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field is wrong</td>
                    </tr>
                </table>
            </React.Fragment>

            {/*------------------- DELETED USERS --------------------*/}
            <React.Fragment>
            <h3>Sales</h3>
                <p>All these endpoints need admin authorization.</p>

                <h4><span className='get'>GET</span> - Get All Sales</h4>

                <h5>Query Params</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>name</b></td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td><b>id</b></td>
                        <td>UUID</td>
                    </tr>
                </table>

                <h5>Returned</h5>
                <p>The endpoint will erturn an array of objects with these attributes:</p>
                <code>{`{
                        "id": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                        "name": "Saul",
                        "lastName": "Tijeras",
                        "PurchaseOrders": [
                            {
                                "id": "ed270f7b-d942-4afc-a26e-3dde2accb567",
                                "direction": "Guanajuato, Calle 34 Case 22",
                                "buyerId": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                                "orderedAt": "2022-06-10T20:56:00.773Z",
                                "finishedAt": "2022-06-11T02:51:43.114Z"
                            },
                            {
                                "id": "4d2e1027-bf80-4223-9f59-5f3a8d3322ae",
                                "direction": "Guanajuato",
                                "buyerId": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                                "orderedAt": "2022-06-08T23:02:09.527Z",
                                "finishedAt": "2022-06-08T23:04:20.108Z"
                            },
                            {
                                "id": "ca4a6622-aec6-4dab-b944-33f52fda4900",
                                "direction": "Turkia",
                                "buyerId": "540e0f4a-13b6-4586-b9c3-5f03f6b77e33",
                                "orderedAt": "2022-06-14T14:52:10.422Z",
                                "finishedAt": "2022-06-20T03:51:44.262Z"
                            }
                        ]
                    }
                `}</code>
                <p>The attribute purchaseOrders is an array objects with the purchaseOrders that forbid that the user be deleted.</p>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Error</th>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field is wrong</td>
                    </tr>
                </table>

                <h4><span className="delete">DELETE</span> - Delete Users</h4>
                
                <h5>Query Params</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>id</b></td>
                        <td>UUID (Required)</td>
                    </tr>
                </table>

                <h5>Returned</h5>
                <code>{`
                {
                    "message": "User Deleted"
                }
                `}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Error</th>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field is wrong</td>
                    </tr>
                    <tr>
                        <td><b>406 - Conflict</b></td>
                        <td>The user still has sales</td>
                    </tr>
                </table>
            </React.Fragment>

            {/*----------------- DELETED PRODDUCTS --------------------*/}
            <React.Fragment>
                <h3>Deleted Products</h3>
                <p>All these endpoints need admin authorization.</p>

                <h4><span className='get'>GET</span> - Get All Deleted Products</h4>

                <h5>Query Params</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>id</b></td>
                        <td>UUID</td>
                    </tr>
                    <tr>
                        <td><b>lessThan</b></td>
                        <td>Integer. Price less than.</td>
                    </tr>
                    <tr>
                        <td><b>greaterThan</b></td>
                        <td>Integer. Price greater than.</td>
                    </tr>
                    <tr>
                        <td><b>name</b></td>
                        <td>String. name of the product.</td>
                    </tr>
                </table>

                <h5>Returnned</h5>

                <p>The endpoint will return an array of objects with these attributes:</p>
                <code>{`{
                        "id": "48b82aa0-a774-4d4c-ae42-af52483dee4b",
                        "price": 3,
                        "name": "Cochino",
                        "description": "Lonjas de cochino horneada con alas de Dodo",
                        "Sales": [
                            {
                                "id": "5c4aee8c-45a6-4d28-80b2-04675831b899",
                                "price": 3,
                                "productId": "48b82aa0-a774-4d4c-ae42-af52483dee4b",
                                "purchaseOrderId": "4d2e1027-bf80-4223-9f59-5f3a8d3322ae",
                                "quantity": 5,
                                "product_id": "48b82aa0-a774-4d4c-ae42-af52483dee4b"
                            }
                        ]
                }`}</code>
                <p>The attribute sales is an array objects with the sales that forbid that the product be deleted.</p>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Error</th>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td><b>404 - Not Found</b></td>
                        <td>There is not a product with that id</td>
                    </tr>
                    <tr>
                        <td><b>406 - Conflict</b></td>
                        <td>The user still have a sales</td>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field is wrong</td>
                    </tr>
                </table>

                <h4><span className="delete">DELETE</span> - Delete Product</h4>
                <p>All these endpoints need admin authorization.</p>

                <h5>Body</h5>

                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>id</b></td>
                        <td>UUID (Required)</td>
                    </tr>
                </table>

                <h5>Returned</h5>
                <code>{`{
                    "message": "Product deleted",
                }`}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Error</th>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td><b>404 - Not Found</b></td>
                        <td>There is not a product with that</td>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field is not defined or is wrong</td>
                    </tr>
                </table>
            </React.Fragment>

            {/*----------------- DELETED PRODDUCTS --------------------*/}
            <React.Fragment>
                <h3>Authentication</h3>

                <h4><span className="post">POST</span> - /login</h4>

                <h5>Authorization</h5>
                <p>No needs authorization.</p>

                <h5>Body</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>email</b></td>
                        <td>String. Valid email structure</td>
                    </tr>
                    <tr>
                        <td><b>password</b></td>
                        <td>String</td>
                    </tr>
                </table>

                <h5>Returned</h5>
                <code>{`{
                    "user": {
                        "id": "7dd1277f-a138-4071-932e-563fd290b7d5",
                        "email": "cristina@gmail.com",
                        "name": "Miranda",
                        "lastName": "Figarella",
                        "role": "admin",
                        "createdAt": "2022-06-07T23:19:44.840Z"
                    },
                    "token": "eyJhbGciOiJIUzI1NiIsInR50CI6IkpXVCJ9.eyJzdWIiOiI3ZGQxMjc3Zi1hMTM4LTQwNzEtOTMyZS01NjNmZDI5MGI3ZDUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTU3MDAwMDR9.2motxohp2FONyLEOOH14_xyX3d98fYr71i4RdVRPoxE"
                }`}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>401 - Unauthorized</b></td>
                        <td>Email or password incorrect</td>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field not defined or is wrong</td>
                    </tr>
                </table>

                <h4><span className="post">POST</span> - /recovery</h4>

                <h5>Authorization</h5>
                <p>No needs authorization.</p>

                <h5>Body</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>email</b></td>
                        <td>String. Valid email structure</td>
                    </tr>   
                </table>

                <h5>Returned</h5>
                <code>{`{
                    "message": "Email sent",
                }`}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>401 - Unauthorized</b></td>
                        <td>The email is not on the database</td>
                    </tr>
                    <tr>
                        <td><b>400 - Bad Request</b></td>
                        <td>A field not defined or is wrong</td>
                    </tr>
                </table>

                <h4><span className="post">POST</span> - /change-password</h4>

                <h5>Authorization</h5>
                <p>No needs authorization.</p>

                <h5>Body</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>newPassword</b></td>
                        <td>String. The new password</td>
                    </tr>   
                </table>

                <h5>Params</h5>
                <p>/change-password/:token</p>
                <p>The token will expire in 15 minutes.</p>

                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>Token</b></td>
                        <td>A valid token.</td>
                    </tr>   
                </table>

                <h5>Returned</h5>
                <code>{`{
                    "message": "Password changed",
                }`}</code>

                <h5>Errors</h5>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><b>401 - Unauthorized</b></td>
                        <td>
                            <ul>
                                <li>The token is wrong</li>
                                <li>The token have expired</li>
                                <li>The token was used</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </React.Fragment>
        </div>
    )
}

export default Endpoints;