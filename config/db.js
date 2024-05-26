import mongoose from "mongoose";
//import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://himanshu1441996:H123456789h@cluster1.anmnixu.mongodb.net/latest_ecom?retryWrites=true&w=majority");
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
