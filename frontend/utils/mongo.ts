import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/warranty";

try {
  mongoose.connect(uri, () => console.log(" Mongoose is connected"));
} catch (e) {
  console.log("could not connect");
  throw e;
}
export default mongoose.connection;
