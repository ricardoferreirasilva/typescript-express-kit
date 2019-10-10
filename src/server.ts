import express from "express"
import dotenv from "dotenv"


// Configuring environment variables.
dotenv.config();


const app = express();

// Define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// Start the Express server
app.listen( process.env.PORT, () => {
    console.log( `Server started at http://localhost:${ process.env.PORT }` );
} );