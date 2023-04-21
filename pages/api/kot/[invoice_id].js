import { pool } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getTask(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getTask = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM stock WHERE id = ?", [
      req.query.id,
    ]);
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await pool.query("DELETE FROM stock WHERE id = ?", [req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    console.log(req);
    
    pool.query("update kot_info set Sync = 'Yes' where invoice_id='" + [req.body.invoice_id] + "'");
    return res.status(204).json();
  } catch (error) {
    console.log(req)
    return res.status(500).json({ message: error.message });
  }
};
