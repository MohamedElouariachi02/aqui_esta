import "dotenv/config";
import express from "express";
import cors from "cors";
import pg from "pg";


const app = express();
app.use(cors());
app.use(express.json());

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

app.get("/api/productos", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM productos ORDER BY id");
        res.json(rows);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: "Error al leer los productos"})
    }
})

app.post("api/productos", async (req, res) => {
    const {nombre, categoria, estante, marca, precio} = req.body;
    try{
        const {rows} = await pool.query(
            "INSERT INTO products (nombre, categoria, estante, marca, precio) VALUES ($1, $2, $3, $4, $5) RETURNING *", [nombre, categoria, estante, marca, precio]
        );
        res.status(201).json(rows[0]);
    }
    catch{
        console.error(err);
        res.status(500).json({ error : "Error al craer producto" })
    }
})

app.listen(process.env.PORT, () => 
    console.log(`API en http://localhost:${process.env.PORT}`)
);