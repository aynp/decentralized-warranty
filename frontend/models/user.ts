import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const User = new Schema({
  id: String,
  warranties: [String],
});
