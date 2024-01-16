const Purchase_order = require('../model/Purchase_order');
const { DataTypes, UUIDV4 } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

exports.getAllPurchasesOrder = async (req, res) => {
  try {
    const po = await Purchase_order.findAll();
    res.json(po);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createPurchase_order = async (req, res) => {
  const { pocode,prcode, company, vendor,ship_to } = req.body;

  try {
     // Generate UUID
     const newId = uuidv4();
    const newPurchase_order = await Purchase_order.create({ id: newId,pocode,prcode, company, vendor,ship_to  });
    res.json(newPurchase_order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updatePurchasesOrder = async (req, res) => {
  const pocode = req.params.pocode;
  const { prcode, company, vendor,ship_to } = req.body;

  try {
    const updatedPurchasesOrder = await Purchase_order.update(
      { prcode, company, vendor,ship_to  },
      { where: { pocode: pocode } }
    );

    if (updatedPurchasesOrder[0] === 1) {
      res.json({ message: 'updatedPurchasesOrder updated successfully!' });
    } else {
      res.status(404).json({ error: 'Purchase not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletePurchase = async (req, res) => {
  const pocode = req.params.pocode;

  try {
    const deletedPurchaseOrder = await Purchase_order.destroy({
      where: { pocode: pocode },
    });

    if (deletedPurchaseOrder === 1) {
      res.json({ message: 'Purchase deleted successfully!' });
    } else {
      res.status(404).json({ error: 'Purchase not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteAllPurchase = async (req, res) => {
  const { pocode,prcode, company, vendor,ship_to } = req.body;

  try {
    // Menggunakan metode destroy dengan kondisi berdasarkan nilai dari req.body
    const result = await Purchase_order.destroy({
      where: {
        pocode: pocode,
        prcode: prcode,
        company: company,
        vendor: vendor,
        ship_to: ship_to,
      },
    });

    if (result > 0) {
      // Menanggapi dengan hasil operasi jika ada data yang dihapus
      res.json({ message: 'PurchaPurchase_orderses deleted successfully!', result });
    } else {
      // Menanggapi jika tidak ada data yang dihapus
      res.json({ message: 'No Purchase_order deleted. No matching data found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

