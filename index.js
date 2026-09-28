import express from "express";
import dotenv from "dotenv";
import UserRoute from "./Routes/user.js";
import { connectDB } from "./Utils/mongodb.js";
// import { signJWT,verifyJWT } from "./Utils/jwt.js";
// import { hashPassword,comparePassword } from "./Utils/bcrypt.js";
import cors from "cors";

import dns from "dns/promises"
dns.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/user", UserRoute);
const PORT = process.env.PORT||5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const payload = { 
//   userId: "12345",
//   type: "admin" ,
// };
// const token = signJWT(payload);
// console.log("Generated JWT:", token);
// const decodedPayload = verifyJWT(token);
// console.log("Decoded JWT:", decodedPayload);

// const plainPassword = "123456";
// const hashedPassword = await hashPassword(plainPassword);
// console.log("Plain Password:", plainPassword);
// console.log("Hashed Password:", hashedPassword);
// console.log( await comparePassword(plainPassword, hashedPassword));
