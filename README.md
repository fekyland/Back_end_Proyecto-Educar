<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">proyecto_educar-final</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [End-Points & Features](#end-points--features)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This is the backend for an online courses platform ,that you can do CRUD operatios,such as create,and update courses or update users,tecnoliges stack : Node.js, JavaScript, Express, and MongoDB.

[!BBDD](/public/BBDD.png)

## 🏁 Getting Started <a name = "getting_started"></a>

1 -Clone this repository: git clone https://github.com/fekyland/Back_end_Proyecto-Educar 
2 -npm install
3- excecute migrations & seedeers
4- npm run dev

### End Points & Features

*    Create, read, update, and delete courses
*    Create, read, update, and delete course categories
*    Create, read, update, and delete users
*    User authentication using JSON Web Tokens (JWT)
*    Route protection using authentication middleware.
*    Manage user enrollments to courses.

### API Endpoints
| HTTP Verbs | Endpoints                      | Action                          | 
|    ---     |        ---                     |           ---                   | 
|    GET     | /users/                        | Get all users |                  
|    GET     | /users/:id                     | Get users by id |                
|   DELETE   | /users/delete/:id              | To delete users by id             
|   PATCH    | /:userId/rent/:movieId:        | To rent movies,user collection been update in movies sub array |
|   POST     | /auth/login/                     | To login user by email and id   |
|   POST     | /auth/register/                  | to create users                 |
|   PUT      | /auth/updateuser/                | to update users                 |
|    GET     | /cursadas/                       | To get a list of Courses         | 
|    GET     | /cursadas/:id                    | To search Courses with their id  | 
|    POST    | /cursadas/registercurso          | To register Courses               | 
|    GET     | /cursadas/miscursos/:email       | To search Corses by their own user | 
|    DELETE  | /cursadas/delete/:id             | To delete Courses with their id  | 
|    GET     | /cursadas/search/:title          | To search Courses By name (SEARCH ENGINE) | 
|   PATCH    | /cursadas/:id/order/:userId"     | Buy Courses                      | 
|    GET     | /cursadas/compradas/:userId      | to search for purchased courses | 


## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [Mongoose](https://www.mongodb.com/) - Database ODM
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@fekyland](https://github.com/fekyland) - Idea & Initial work


