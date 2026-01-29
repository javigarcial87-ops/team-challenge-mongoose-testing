const express = require("express");
const dotenv = require("dotenv");

/* ✅ IMPORTACIÓN CORRECTA */
const connectDB = require("./config/config");

dotenv.config();

/* ✅ EJECUTAR CONEXIÓN */
connectDB();

const app = express();
app.use(express.json());

app.use("/", require("./routes/posts"));

// Iniciar servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});