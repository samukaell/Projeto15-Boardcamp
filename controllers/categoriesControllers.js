import db from "./../db.js";
import joi from "joi";

export async function getCategories(req, res) {
    try {
        const result = await db.query("SELECT * FROM categories");
        res.send(result.rows);
    } catch (e) {
        console.log(e);
        res.status(500).send("Ocorreu um erro ao obter as receitas!");
    }
}