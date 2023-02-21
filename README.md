<!DOCTYPE html>
<html>
  <head>
    <title>Backend for Online Courses</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1>Backend for Online Courses</h1>
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
    </ul>
    <h2>Contributing</h2>
    <p>If you would like to contribute to this project, please follow these steps:</p>
    <ol>
      <li>Fork this repository.</li>
      <li>Create a branch for your new feature: <code>git checkout -b new-feature</code></li>
      <li>Make your changes and commit them: <code>git commit -m "Add new feature"</code></li>
      <li>Push your changes to your fork: <code>git push origin new-feature</code></li>
      <li>Create a Pull Request to this repository.</li>
    </ol>
    <h2>Author</h2>
    <p>This project was developed by Your Name.</p>
  </body>
</html>
