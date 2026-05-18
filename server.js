import express from "express";

const app = express();

app.get("/api/notes", (req,res)=> {
    res.send("you got 5 notes")
});

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

app.listen(5001, ()=>{
    console.log("Port online at 5001")
});

