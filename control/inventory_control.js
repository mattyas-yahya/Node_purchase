const Inventory = require('../model/Inventory');
const { DataTypes, UUIDV4 } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

exports.getAllInv = async (req, res) => {
  try {
    const inventory = await Inventory.findAll();
    res.json(inventory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createInventory = async (req, res) => {
  const { item_number, product_reference, product_name, uom, price } = req.body;

  if (!item_number || !product_reference || !product_name || !uom || !price) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const invid = uuidv4();
    const newInventory = await Inventory.create({ id: invid, item_number, product_reference, product_name, uom, price });
    return res.json(newInventory);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.updateInventory = async (req, res) => 
{
  const id = req.params.id;
  const { item_number, product_reference, product_name,uom,price } = req.body;

  try {
    const updatedInventory = await Inventory.update(
      { item_number, product_reference, product_name,uom,price },
      { where: { id: id } }
    );

    if (updatedInventory[0] === 1) {
      res.json({ message: ' updated successfully!' });
    } else {
      res.status(404).json({ error: ' not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteInventory = async (req, res) => 
{
  const id = req.params.id;

  try {
    const deletedInventory = await Inventory.destroy({
      where: { id: id },
    });

    if (deletedInventory === 1) {
      res.json({ message: ' deleted successfully!' });
    } else {
      res.status(404).json({ error: ' not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteAllInventory = async (req, res) => {
  const { item_number, product_reference, product_name,uom,price  } = req.body;

  try {
    // Menggunakan metode destroy dengan kondisi berdasarkan nilai dari req.body
    const result = await Inventory.destroy({
      where: {
        item_number: item_number,
        product_reference: product_reference,
        product_name: product_name,
        uom: uom,
        price: price,
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

