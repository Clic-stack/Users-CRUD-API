## ## 🧑‍💻 API CRUD de Usuarios

Esta API fue desarrollada como parte de un proyecto de aprendizaje con el objetivo de construir un **servicio RESTful** que permita realizar operaciones de **Crear, Leer, Actualizar y Eliminar (CRUD)** sobre usuarios. Está construida con **Node.js**, **Express** y **Sequelize**, conectada a una base de datos **PostgreSQL**, y desplegada en **Render**.  

El proyecto se enfoca en una arquitectura limpia, controladores modulares, validación robusta y prácticas de despliegue listas para producción.

---

## 🚀 Servidor en línea
🔗 Disponible en: https://users-crud-api-gikf.onrender.com/api/users

---

## 📌 Documentación en línea
🔗 Disponible en: https://documenter.getpostman.com/view/48309056/2sB3WtsJn4

---


## 🎯 Objetivo del proyecto

Construir una API REST funcional y escalable que permita:

- Crear nuevos usuarios con validación de datos.  
- Obtener todos los usuarios o un usuario específico por ID.  
- Actualizar usuarios existentes con datos dinámicos.  
- Eliminar usuarios con confirmación.  
- Proporcionar respuestas claras en formato JSON y manejo de errores.  

Este proyecto refuerza habilidades clave como:

- Diseño de APIs con **Express**.  
- Modelado de bases de datos y consultas con **Sequelize**.  
- Gestión de variables de entorno con **dotenv**.  
- Despliegue en **Render** con comandos de build/start adecuados.  
- Documentación con **Postman**.  

---

## ⚛️ Tecnologías usadas ⚡

| Herramienta / Lenguaje | Uso principal |
|------------------------|---------------|
| Node.js                | Entorno de ejecución |
| Express                | Ruteo y configuración del servidor |
| Sequelize              | ORM para PostgreSQL |
| PostgreSQL             | Base de datos relacional |
| dotenv                 | Gestión de variables de entorno |
| Postman                | Documentación y pruebas de la API |
| Render                 | Despliegue en la nube |

---

## 📁 Endpoints de la API

| Método | Endpoint        | Función |
|--------|-----------------|---------|
| GET    | `/users`        | Obtener todos los usuarios |
| POST   | `/users`        | Crear un nuevo usuario |
| GET    | `/users/:id`    | Obtener un usuario por ID |
| PUT    | `/users/:id`    | Actualizar un usuario por ID |
| DELETE | `/users/:id`    | Eliminar un usuario por ID |

---

## 🧠 Modelo de Usuario

| Campo       | Tipo     | Ejemplo              |
|-------------|----------|----------------------|
| id          | Entero   | 1                    |
| first_name  | String   | Jesús                |
| last_name   | String   | Fernández            |
| email       | String   | jsfdz@example.com    |
| password    | String   | 12345678             |
| birthday    | Date     | 03/05/1992           |
| image_url   | String   | "https://ui-avatars.com/api/?name=Jesus+Fernandez" |

---

## 🗂️ Estructura del proyecto

```bash
📁 S02E02/
|   ├── 📁 node_modules/
|   ├── 📁 src/
│   |    └── 📁 controllers/
│   |    |   └── users.controllers.js
│   |    └── 📁 db/
│   |    |   └── connects.js
│   |    └── 📁 models/
|   |    |   └── user.model.js
│   |    └── 📁 routes/
│   |    |   └── app.js
│   |    |   └── server.js
|   └── .env
|   └── .gitignore
|   └── package-lock.json
|   └── package.json
```
---

## 🛠️Local Installation

1. Clona este repositorio:

```bash
git clone https://github.com/Clic-stack/Users-CRUD-API.git
```

2. Instala dependencias:

```bash
npm install
```

3. Corre el servidor localmente:

```bash
npm start
```

---

## 🎨Author
Desarrollado por Clio Salgado como parte del módulo de Node.js & Backend en Academlo, con el objetivo de consolidar habilidades en desarrollo backend, diseño de APIs, integración con bases de datos y despliegue en la nube.

🔽 **English version below** 🔽

## 🧑‍💻 Users CRUD API
This API was developed as part of a learning project with the goal of building a **RESTful service** that allows **Create, Read, Update, and Delete (CRUD)** operations on users. It is built with **Node.js**, **Express**, and **Sequelize**, connected to a **PostgreSQL** database, and deployed on **Render**.  

The project focuses on clean architecture, modular controllers, robust validation, and production-ready deployment practices.

---

## 🚀 Online Demo
🔗 Available at: https://users-crud-api-gikf.onrender.com/api/users

---

## 🎯 Project Objective

Build a functional and scalable REST API that allows:

- Create new users with validated input.  
- Retrieve all users or a single user by ID.  
- Update existing users with dynamic data.  
- Delete users with confirmation.  
- Provide clear JSON responses and error handling.  

This project reinforces key backend skills such as:

- API design with **Express**.  
- Database modeling and queries with **Sequelize**.  
- Environment variable management with **dotenv**.  
- Deployment on **Render** with proper build/start commands.  
- Documentation with **Postman**.  

---

## ⚛️Technologies Used⚡

| Tool / Language | Purpose |
|-----------------|---------|
| Node.js         | Runtime environment |
| Express         | Routing and server setup |
| Sequelize       | ORM for PostgreSQL |
| PostgreSQL      | Relational database |
| dotenv          | Environment variable management |
| Postman         | API documentation and testing |
| Render          | Cloud deployment |

---

## 📁 API Endpoints

| Method | Endpoint        | Function |
|--------|-----------------|----------|
| GET    | `/users`        | Retrieve all users |
| POST   | `/users`        | Create a new user |
| GET    | `/users/:id`    | Retrieve a user by ID |
| PUT    | `/users/:id`    | Update a user by ID |
| DELETE | `/users/:id`    | Delete a user by ID |

---

## 🧠 User Model

| Field       | Type     | Example              |
|-------------|----------|----------------------|
| id          | Integer  | 1                    |
| first_name  | String   | Jesús                |
| last_name   | String   | Fernández            |
| email       | String   | jsfdz@example.com    |
| password    | String   | 12345678             |
| birthday    | Date     | 03/05/1992           |
| image_url   | String   | "https://ui-avatars.com/api/?name=Jesus+Fernandez" |

---

## 🗂️Project Structure

```bash
📁 S02E02/
|   ├── 📁 node_modules/
|   ├── 📁 src/
│   |    └── 📁 controllers/
│   |    |   └── users.controllers.js
│   |    └── 📁 db/
│   |    |   └── connects.js
│   |    └── 📁 models/
|   |    |   └── user.model.js
│   |    └── 📁 routes/
│   |    |   └── app.js
│   |    |   └── server.js
|   └── .env
|   └── .gitignore
|   └── package-lock.json
|   └── package.json
```
---

## 🛠️Local Installation

1. Clone this repository:

```bash
git clone https://github.com/Clic-stack/Users-CRUD-API.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the server locally:

```bash
npm start
```

## 🎨Author
Developed by Clio Salgado as part of the Node.js & Backend module at Academlo, with the objective of consolidating skills in backend development, API design, database integration, and cloud deployment.
