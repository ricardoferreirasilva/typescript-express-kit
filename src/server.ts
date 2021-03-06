import express from "express"
import dotenv from "dotenv"


// Configuring environment variables.
dotenv.config();

// Instancing express.
export const app = express();

// Define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send("Hello world!");
} );

// Load the remainder of our routers.
import RouterExample from "./routes/RouterExample"

app.use("/example", RouterExample);



// Start the Express server
app.listen( process.env.PORT, () => {
    console.log( `Server started at http://localhost:${ process.env.PORT }` );
} );

export default app;
module.exports = app;