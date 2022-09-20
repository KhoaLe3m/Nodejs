// Bước 1: include thư viện http 
import express from "express";
import homeRoute from "./routes/home";
import productRoute from "./routes/products";
import categoryRoute from "./routes/categories";
import mongoose from "mongoose";


const app = express();

app.use(express.json());
app.use(homeRoute);
app.use("/api",productRoute);
app.use("/api",categoryRoute);

// Connect db
mongoose.connect("mongodb+srv://root:8wWJwT6dnuqJQo3r@cluster0.swd4jkl.mongodb.net/nodejs?retryWrites=true&w=majority")
    .then(()=>console.log("Kết nối db thành công"))
    .catch((error)=>console.log(error));
// Bước 3: Lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});