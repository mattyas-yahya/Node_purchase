const Purchase = require('../model/Purchase');
const { DataTypes, UUIDV4 } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

exports.getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.findAll();
    res.json(purchases);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createPurchase = async (req, res) => {
  const { prcode, requester, detail_request } = req.body;

  try {
     // Generate UUID
     const newId = uuidv4();
    const newPurchase = await Purchase.create({ id: newId,prcode, requester, detail_request });
    res.json(newPurchase);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updatePurchase = async (req, res) => {
  const prcode = req.params.prcode;
  const { requester, detail_request } = req.body;

  try {
    const updatedPurchase = await Purchase.update(
      { requester, detail_request },
      { where: { prcode: prcode } }
    );

    if (updatedPurchase[0] === 1) {
      res.json({ message: 'Purchase updated successfully!' });
    } else {
      res.status(404).json({ error: 'Purchase not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletePurchase = async (req, res) => {
  const prcode = req.params.prcode;

  try {
    const deletedPurchase = await Purchase.destroy({
      where: { prcode: prcode },
    });

    if (deletedPurchase === 1) {
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
  const { prcode, requester, detail_request } = req.body;

  try {
    // Menggunakan metode destroy dengan kondisi berdasarkan nilai dari req.body
    const result = await Purchase.destroy({
      where: {
        prcode: prcode,
        requester: requester,
        detail_request: detail_request,
      },
    });

    if (result > 0) {
      // Menanggapi dengan hasil operasi jika ada data yang dihapus
      res.json({ message: 'Purchases deleted successfully!', result });
    } else {
      // Menanggapi jika tidak ada data yang dihapus
      res.json({ message: 'No purchases deleted. No matching data found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

