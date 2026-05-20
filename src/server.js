import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// we are making sure that the port is also hidden, or else it will run on default port

//dotenv helps us such that we can hide important variables such as our MONGO_URI
connectDB();

//middleware
app.use(express.json())
/* Http responses

1xx- Informational

2xx- 200-OK
     201-Success
     
3xx- Redirecting
    when you delete something and it seems that the route has been
    redirected
    
4xx- Client Errors

     404- Not found
     401- Bad Request
     
     anything that is the clients fault
     
5xx- Server Errors

     500-Ineternal server error
     503- Servers unavailable (temp down)
     
     server tried but it failed*/

app.use("/api/notes", notesRoutes)

//we prefixed all the routes with this specific route prefix

app.listen(PORT, () => {
     console.log("Port online at :", PORT);
});

