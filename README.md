<!DOCTYPE html>
<html>
  <head>
    <title>Backend for Online Courses</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1>EDUCAR-Backend for Online Courses</h1>
    <p>This is the backend for an online courses platform that uses Node.js, JavaScript, Express, and MongoDB.</p>
    <h2>Installation</h2>
    <ol>
      <li>Clone this repository: <code>git clone https://github.com/your-username/your-repository.git</code></li>
      <li>Install dependencies: <code>npm install</code></li>
      <li>Create a <code>.env</code> file at the root of the project and configure the following environment variables:</li>
      <pre><code>PORT=3000
MONGODB_URI=mongodb://localhost:27017/online-courses</code></pre>
      <li>Start the application: <code>npm start</code></li>
    </ol>
    <h2>Technologies</h2>
    <ul>
      <li><a href="https://nodejs.org/">Node.js</a>: a JavaScript runtime environment for server-side programming.</li>
      <li><a href="https://expressjs.com/">Express</a>: a Node.js framework for building web applications and APIs.</li>
      <li><a href="https://www.mongodb.com/">MongoDB</a>: a document-oriented NoSQL database.</li>
      <li><a href="https://mongoosejs.com/">Mongoose</a>: a Node.js library that provides a simple and schema-based solution for modeling application data.</li>
    </ul>
    <h2>Features</h2>
    <ul>
      <li>Create, read, update, and delete courses.</li>
      <li>Create, read, update, and delete course categories.</li>
      <li>Create, read, update, and delete users.</li>
      <li>User authentication using JSON Web Tokens (JWT).</li>
      <li>Route protection using authentication middleware.</li>
      <li>Manage user enrollments to courses.</li>
     <li> API Endpoints</li>
<li>| HTTP Verbs | Endpoints                      | Action                          | </li>
<li>|    ---     |        ---                     |           ---                   | </li>
<li>|    GET     | /users/                        | Get all users |                   </li>
<li>|    GET     | /users/:id                     | Get users by id |                 </li>
<li>|   DELETE   | /users/delete/:id              | To delete users by id             </li>
<li>|   PATCH    | /:userId/rent/:movieId:        | To rent movies,user collection been update in movies sub array |</li>
<li>|   POST     | /auth/login/                     | To login user by email and id   |</li>
<li>|   POST     | /auth/register/                  | to create users                 |</li>
<li>|   PUT      | /auth/updateuser/                | to update users                 |</li>
<li>|    GET     | /cursadas/                       | To get a list of Courses         | </li>
<li>|    GET     | /cursadas/:id                    | To search Courses with their id  | </li>
<li>|    POST    | /cursadas/registercurso          | To register Courses               | </li>
<li>|    GET     | /cursadas/miscursos/:email       | To search Corses by their own user | </li>
<li>|    DELETE  | /cursadas/delete/:id             | To delete Courses with their id  | </li>
<li>|    GET     | /cursadas/search/:title          | To search Courses By name (SEARCH ENGINE) | </li>
<li>|   PATCH    | /cursadas/:id/order/:userId"     | Buy Courses                      | </li>
<li>|    GET     | /cursadas/compradas/:userId      | to search for purchased courses | </li>




    </ul>
    <h2>Author</h2>
    <p>This project was developed by @fekyland  https://github.com/fekyland</p>
  </body>
</html>
