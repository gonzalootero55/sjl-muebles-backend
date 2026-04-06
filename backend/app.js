import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import productRoutes from "./src/routes/productRoutes.js"
import categoryRoutes from "./src/routes/categoryRoutes.js"


dotenv.config()

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

app.use("/products", productRoutes)

app.use("/categories", categoryRoutes)
// prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀")
})

// conexión a Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err))

// levantar servidor
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})