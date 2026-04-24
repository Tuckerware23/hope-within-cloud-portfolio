# Game Infrastructure (Node.js Backend)

This folder contains the Node.js backend for the **Caller of Light Within** RPG game. The backend is built with [Express](https://expressjs.com/) to handle HTTP requests and provide game logic endpoints.

## Getting Started

1. **Install Node.js** – Ensure you have Node.js (v16 or later) installed on your system.
2. **Install dependencies** – Navigate to this directory and run:

   ```bash
   npm install
   ```

   This installs `express` and other dependencies defined in `package.json`.

3. **Run the server** – Start the development server with:

   ```bash
   npm start
   ```

   This command executes `node server.js`, which boots an Express application. In our example the server reads the `PORT` environment variable or defaults to `3001`. It then defines routes and calls `app.listen` to start listening on that port【807462070683512†L66-L76】.

4. **Test the API** – With the server running, open your browser or a tool like Postman and navigate to:

   - `http://localhost:3001/status` – Returns a simple JSON message indicating the server is running.
   - `http://localhost:3001/battle` – Placeholder endpoint for battle logic; currently returns a mock JSON response.

## Files Explained

- **package.json** – Defines the project metadata and dependencies. The `scripts.start` command runs `server.js`.
- **server.js** – Implements the Express server. It imports Express, creates an app instance, sets up basic routes, and calls `app.listen()` to start the server【807462070683512†L66-L76】. You can add additional routes here to handle game events, user authentication, or database interactions.

### server.js overview

The server uses the following pattern to start listening on a port:

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.listen(port, () => {
  console.log(`Game server listening on port ${port}`);
});
```

This example is similar to the Express "Hello World" sample【807462070683512†L66-L76】 but extended for our game logic.

### Adding routes

To add a new API endpoint, use `app.get()` or `app.post()` and provide a path and handler function. For example, to create an endpoint that returns the player's current inventory:

```javascript
app.get('/inventory', (req, res) => {
  // TODO: implement inventory logic
  res.json({ items: [] });
});
```

## Deployment Notes

- **Environment variables** – In production, set the `PORT` environment variable to control which port the server listens on instead of hardcoding a value.
- **Process manager** – Use a process manager like `pm2` or `forever` to keep the Node.js process running after you log out.
- **Reverse proxy** – For production deployments, it’s common to place a reverse proxy (e.g., Nginx or AWS Application Load Balancer) in front of the Node.js server to handle SSL termination and load balancing.

## Next Steps

- Implement game logic and connect to a database (e.g., MongoDB, PostgreSQL).
- Secure endpoints with authentication and rate limiting.
- Deploy the backend to a cloud provider (e.g., AWS EC2 or Elastic Beanstalk) and expose it behind your domain.

Refer to the [Express documentation](https://expressjs.com/en/starter/hello-world.html) for more details on routing, middleware, and advanced features【807462070683512†L66-L76】.
