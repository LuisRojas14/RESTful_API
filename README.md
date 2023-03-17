# RESTful_API
We are going to create a small RESTful API using Node + Express + a PostgreSQL database that will serve the client with some data about users and their orders.

 Connect your NodeJS application to PostgreSQL
Brace up! We are going to create a small RESTful API using Node + Express + a PostgreSQL database that will serve the client with some data about users and their orders.

Work with Git: 1 First Commit + 1 Commit per addition of a request endpoint

1-Create a Github Repo for this exercise
2-Create an  instance on ElephantSQL (you have a guide for that)  
3-Create the database 
 
4-Create an Express server with separate routes for:

5- The users:
    GET  /  : To get all the users 
    GET  /:id :  To get one user (with the id) 
    POST / -> To create a new user 
    PUT /:id  :  To edit one user (with the id) 
    DELETE  /:id : To delete one user (with the id)
    
6- The orders:

    GET  /  : To get all the orders 
    GET  /:id :  To get one order (with the id) 
    POST / -> To create a new order
    PUT /:id  :  To edit one order (with the id) 
    DELETE  /:id : To delete one order (with the id) 
    
    
7* EXTRA (AKA; you can give it a go, but you don’t have to…) If you are finished with these, try to:

   *Validate all the data coming from the users/orders for the Post/Put routes (help)
   
   *Create a separate module for your pool object (help)
   
   *Create a user route that will return all the orders of a user
        -GET /:id/orders : To get all orders linked to a specific user
   
   *Create another user route that will set a user as inactive if he has never ordered anything:
       -PUT /:id/check-inactive : If a user has never ordered, he should be set as inactive
   
    *Separate routes in 2 router files. One for Users, one for Orders: https://expressjs.com/en/guide/routing.html

Don’t forget to check the documentation here: https://node-postgres.com
