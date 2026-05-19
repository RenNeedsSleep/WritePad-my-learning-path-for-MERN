import mongoose from "mongoose"
import dns from "dns"

dns.setServers(["8.8.8.8", "8.8.4.4"]);

//we are connecting to mongoDb using an async method
//process.env.MONGO_URI is the dotenv file where we are storing our mongoURI
//({ family: 4 })this is a parameter that is used to resolve the domain name to an IPv4 address

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { family: 4 });
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("Error connecting to mongoDB:", error);
        process.exit(1);
    }
}

