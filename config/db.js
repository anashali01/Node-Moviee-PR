import mongoose from "mongoose";
import dotenv from "./config.js";
const db = async () => {
    try {
        await mongoose.connect(dotenv.MONGO_URL);
        console.log(`Database Connect Succefully`);

    } catch (error) {
        console.log(`Database Connection Error : ${error}`);
    }
}

export default db();