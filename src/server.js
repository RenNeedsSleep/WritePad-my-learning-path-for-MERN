import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// we are making sure that the port is also hidden, or else it will run on default port

//dotenv helps us such that we can hide important variables such as our MONGO_URI

//middleware
app.use(express.json()) //this express.json is a middle ware, which gets you the body of the model to access the title and content fields

//middlewafre is a function that tuns in between of requests and response
app.use(rateLimiter)
app.use((req,res,next) => {
     console.log("We just got a new request")
     next()
})

// everytime you run this, you can see that before the request is fullfilled you can see this message
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
     429 - too many requests
     
     anything that is the clients fault
     
5xx- Server Errors

     500-Ineternal server error
     503- Servers unavailable (temp down)
     
     server tried but it failed*/

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
     app.listen(PORT, () => {
     console.log("Port online at :", PORT); //first we initiate the database then we start it
     //if the connection fails, whats the point of starting the database
});
})

//we prefixed all the routes with this specific route prefix


