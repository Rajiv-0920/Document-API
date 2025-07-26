# Document Management API

This is a RESTful API built using **Express.js** and **MongoDB (Mongoose)** that allows users to **Create**, **Read**, **Update**, and **Delete** documents.

---

## Features

- Create new documents
- Get all documents
- Get a document by ID
- Update an existing document
- Delete a document

---

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variable management
- CORS (optional, if using with frontend)

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB URI (local or Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/document-api.git
   cd document-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

   Add the following environment variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   npm start
   ```

---

## API Endpoints

Base URL: `https://document-api-vh9o.onrender.com/api/documents/api/documents/`

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| POST   | `/`      | Create a new document   |
| GET    | `/`      | Get all documents       |
| GET    | `/:id`   | Get a document by ID    |
| PUT    | `/:id`   | Update a document by ID |
| DELETE | `/:id`   | Delete a document by ID |

---

## Example Request: Create Document

```
POST /api/documents
Content-Type: application/json

{
  "title": "My Document",
  "content": "This is the content of the document."
}
```

---

## Project Structure

```
.
├── controllers/
│   └── document.controller.js
├── models/
│   └── document.model.js
├── routes/
│   └── document.route.js
├── config/
│   └── db.js
├── .env
├── index.js
├── package.json
└── README.md
```

---

## Deployment

You can deploy this API using platforms like:

- Render
- Railway
- Heroku (deprecated for free tier)
- VPS like DigitalOcean

Ensure that environment variables like `PORT` and `MONGODB_URI` are set correctly on the hosting platform.

---

## License

This project is open-source and free to use.

---

## Author

Crafted by Rajiv-0920. Pull requests and contributions are warmly welcomed!
