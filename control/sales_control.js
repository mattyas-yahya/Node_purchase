const Sales = require('../model/Sales');
const { DataTypes, UUIDV4 } = require('sequelize');
const { v4: uuidv4 } = require('uuid');



exports.getAllSales= async (req, res) => {
  try {
    const sales = await Sales.findAll();
    res.json(sales);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createSales = async (req, res) => {
  const { id, date_transaction, product_reference, product_name, uom, qty,selling_price,total } = req.body;

  if (!id ||!date_transaction || !product_reference || !product_name || !uom || !qty || !selling_price || !total) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newId = uuidv4();
    const newSales = await Sales.create({ id:newId, date_transaction, product_reference, product_name, uom, qty,selling_price,total });
    return res.json(newSales);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.deleteSales = async (req, res) => 
{
  const id = req.params.id;

  try {
    const deletedSales = await Sales.destroy({
      where: { id: id },
    });

    if (deletedSales === 1) {
      res.json({ message: ' deleted successfully!' });
    } else {
      res.status(404).json({ error: ' not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteAllSales = async (req, res) => {
  const { date_transaction, product_reference, product_name, uom, qty,selling_price,total} = req.body;

  try {
    // Menggunakan metode destroy dengan kondisi berdasarkan nilai dari req.body
    const result = await Sales.destroy({
      where: {
      
      },
    });

    if (result > 0) {
      // Menanggapi dengan hasil operasi jika ada data yang dihapus
      res.json({ message: ' deleted successfully!', result });
    } else {
      // Menanggapi jika tidak ada data yang dihapus
      res.json({ message: 'No  deleted. No matching data found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

