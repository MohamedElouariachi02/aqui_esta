import data from "./productos.json" with {type : "json"}
import "dotenv/config";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

async function loadProducts()
{
    const productos = data.productos;
    for (let index = 0; index < productos.length; index++) {
        let producto = productos[index];
        await pool.query(
        "INSERT INTO productos (nombre, categoria, estante, marca, precio) VALUES ($1, $2, $3, $4, $5)", 
        [producto.nombre, producto.categoria, producto.estante, producto.marca, producto.precio])
    }
    await pool.end();
}

loadProducts()
console.log("DATABASE_URL:", process.env.DATABASE_URL);