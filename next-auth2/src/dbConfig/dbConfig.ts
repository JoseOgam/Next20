import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected succeffully");
    });

    connection.on("error", (error) => {
      console.log("Mongo connection error");
      console.error(error);
    });
  } catch (error: any) {
    console.log("something went wrong");
    console.log(error.message);
  }
}
