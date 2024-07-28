import mongoose, { get } from "mongoose";

let connection;

const getConnection = async () => {
  try {
    if (connection) {
      return connection;
    }

    connection = await mongoose.connect("mongodb://localhost:27017/tasks");
    return connection;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getConnection;
