import { pool } from "config/db";
//import moment from 'moment-timezone';

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
   // const apiKey = 'test1';     
   //const results = await pool.query(req.query);
   //const currentDateTime = moment().tz('Asia/Colombo');
  //const currentDate = currentDateTime.format('YYYY/MM/DD');
  //console.log(currentDate);

    const results = await pool.query("SELECT * from kot_info where Sync='No'");
      return res.status(200).json(results);                
    
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { invoice_id} = req.body;
   
    //pool.query("update kot_info set Sync = 'Yes' where invoice_id='" + [invoice_id] + "'");

    const result = await pool.query("update kot_info set Sync = 'Yes' where invoice_id='" + [invoice_id] + "'");
 
    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
