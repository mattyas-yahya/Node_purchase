const Purchase_line = require('../model/Purchase_line');
const { DataTypes, UUIDV4 } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

exports.getAllPurchase_line = async (req, res) => {
  try {
    const purchases_line = await Purchase_line.findAll();
    res.json(purchases_line);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createPurchase_line = async (req, res) => {
  const { prcode, item_code, item_name,qty,price } = req.body;

  try {
      // Generate UUID
      const newId = uuidv4();
    const newPurchaseline = await Purchase_line.create({ id: newId,prcode, item_code, item_name,qty,price });
    res.json(newPurchaseline);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// exports.updatePurchase = async (req, res) => {
//   const prcode = req.params.prcode;
//   const { requester, detail_request } = req.body;

//   try {
//     const updatedPurchase = await Purchase.update(
//       { requester, detail_request },
//       { where: { prcode: prcode } }
//     );

//     if (updatedPurchase[0] === 1) {
//       res.json({ message: 'Purchase updated successfully!' });
//     } else {
//       res.status(404).json({ error: 'Purchase not found' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// exports.deletePurchase = async (req, res) => {
//   const prcode = req.params.prcode;

//   try {
//     const deletedPurchase = await Purchase.destroy({
//       where: { prcode: prcode },
//     });

//     if (deletedPurchase === 1) {
//       res.json({ message: 'Purchase deleted successfully!' });
//     } else {
//       res.status(404).json({ error: 'Purchase not found' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

exports.deleteAllPurchase_line = async (req, res) => {
  const { prcode, item_code, item_name,qty,price } = req.body;

  try {
    // Menggunakan metode destroy dengan kondisi berdasarkan nilai dari req.body
    const result = await Purchase.destroy({
      where: {
        prcode: prcode,
        item_code: item_code,
        item_name: item_name,
        qty: qty,
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

