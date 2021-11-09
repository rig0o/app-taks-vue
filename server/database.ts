
import { connect } from "mongoose";

export const startConnection = async (): Promise<void> => {
  try {
    const db = await connect("mongodb://localhost/taskDataBase");
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};