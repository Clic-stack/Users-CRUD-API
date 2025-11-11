🧑‍💻 Users CRUD API
This API was developed as part of a learning project with the goal of building a RESTful service that allows Create, Read, Update, and Delete (CRUD) operations on users. It is built with Node.js, Express, and Sequelize, connected to a PostgreSQL database, and deployed on Render.

The project focuses on clean architecture, modular controllers, robust validation, and production-ready deployment practices.

🚀 Online Demo
🔗 Available at:

Código
https://users-crud-api-xxxxx.onrender.com/api/users
🎯 Project Objective
Build a functional and scalable REST API that allows:

Create new users with validated input.

Retrieve all users or a single user by ID.

Update existing users with dynamic data.

Delete users with confirmation.

Provide clear JSON responses and error handling.

This project reinforces key backend skills such as:

API design with Express.

Database modeling and queries with Sequelize.

Environment variable management with dotenv.

Deployment on Render with proper build/start commands.

Documentation with Postman.

⚛️ Technologies Used ⚡
Tool / Language	Purpose
Node.js	Runtime environment
Express	Routing and server setup
Sequelize	ORM for PostgreSQL
PostgreSQL	Relational database
dotenv	Environment variable management
Postman	API documentation and testing
Render	Cloud deployment
📁 API Endpoints
Method	Endpoint	Function
GET	/users	Retrieve all users
POST	/users	Create a new user
GET	/users/:id	Retrieve a user by ID
PUT	/users/:id	Update a user by ID
DELETE	/users/:id	Delete a user by ID
🧠 User Model
Field	Type	Example
id	Integer	1
first_name	String	Jesús
last_name	String	Fernández
email	String	jsfdz@example.com
password	String	12345678
birthday	Date	03/05/1992
🛠️ Local Installation
Clone this repository:

bash
git clone https://github.com/Clic-stack/Users-CRUD-API.git
Install dependencies:

bash
npm install
Run the server locally:

bash
npm start
📌 Steps to Follow
Deploy the API through Render (or another service). Tutorial: https://vimeo.com/823890789/202c3cbb87?share=copy

Document your API with Postman. Tutorial: https://vimeo.com/878456387?share=copy

Connect your React CRUD app (previously built with JSON Server) to this deployed API.

✅ Deliverables
Postman documentation (with Render URL, not localhost).

URL of the deployed project on Render.

GitHub repository URL of the API.

URL of the deployed React app (Netlify, Vercel, Render, etc.).

📊 Evaluation Criteria
GET endpoints (2 pts)

POST endpoint (2 pts)

DELETE endpoint (1 pt)

PUT endpoint (2 pts)

Correct frontend integration (2 pts)

Code written in English (1 pt)

🎨 Author
Developed by Clio Salgado as part of the Node.js & Backend module at Academlo, with the objective of consolidating skills in backend development, API design, database integration, and cloud deployment.
