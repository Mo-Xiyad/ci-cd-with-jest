import { app } from "./app";
import mongoose from "mongoose";

const port = process.env.PORT! || 3000;

console.log(process.env.MONGO_URL);

// Here we are using the production DB
mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Connected to Mongo`);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
