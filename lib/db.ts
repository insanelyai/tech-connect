import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB database connection established successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB database connection error: ", err);
      process.exit(1);
    });
  } catch (error) {
    console.log("[MONGO ERROR]", error);
  }
};

export default connect;
