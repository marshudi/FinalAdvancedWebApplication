It looks like you're setting up a client and server for a web application, with the client using React and the server using Express, MongoDB, and Mongoose. Your package installations for the client and server seem mostly correct, but there's a small typo in the client section. Here's the corrected version:

**Client:**

```bash
# Install Bootstrap, React Router, and Axios
npm install bootstrap react-router-dom@latest axios
```

**Server:**

```bash
# Initialize the project (creates package.json)
npm init

# Install Express, MongoDB, Mongoose, and CORS
npm install express mongodb mongoose cors
```

After running the server installation commands, you might want to add `"type": "module"` to your `package.json` file, especially if you are using ECMAScript modules (ESM) in your Node.js application.

Here's how you can add it to your `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "start": "node your-server-file.js"
  },
  "dependencies": {
    "express": "^your-express-version",
    "mongodb": "^your-mongodb-version",
    "mongoose": "^your-mongoose-version",
    "cors": "^your-cors-version"
  }
}
```
