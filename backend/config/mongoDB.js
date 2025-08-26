import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        const DB_NAME = process.env.DB_NAME;
        const connectionInstances = await mongoose.connect(`${DB_URI}/${DB_NAME}`);
        console.log(`database connection successful !! HOST: ${connectionInstances.connection.host}`);
    } catch (error) {
        console.log(`Database Connection Fail: ${error}`);
        process.exit(1);
    }
}

export default connectToDB;