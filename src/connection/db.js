import mongoose from "mongoose";

export const conn = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected db");
    })
    .catch((err) => {
      console.log(`mongo db connection error ${err}`);
    });
};
