import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"; // Importa JWT

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  database: process.env.DB_NAME || "tutoriasfim",
  port: 3306,
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM Alumnos WHERE Numcuenta = ? AND NIP = ?",
      [username, password]
    );

    if (rows.length > 0) {
      const token = jwt.sign({ id: rows[0].id, username: rows[0].Numcuenta }, "secreto123", { expiresIn: "1h" });
      res.json({ success: true, message: "Login exitoso", token });
    } else {
      res.json({ success: false, message: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).json({ message: "❌ Error en la autenticación", error });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
