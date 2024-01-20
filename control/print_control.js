
const { PDFDocument, rgb } = require('pdf-lib');
exports.getPrint = async (req, res) => {
  try {
    // Dapatkan elemen receiptContainer
    const receiptContainer = document.getElementById('receiptContainer');

    // Buat dokumen PDF baru
    const pdf = new jsPDF();

    // Tambahkan halaman baru dengan ukuran tertentu (misalnya, ukuran kertas kasir)
    pdf.addPage([250, 500]); // Lebar: 250, Tinggi: 500 (sesuaikan jika perlu)

    // Dapatkan konten HTML dari elemen receiptContainer
    const htmlContent = receiptContainer.innerHTML;

    // Gambar konten HTML ke halaman PDF
    pdf.fromHTML(htmlContent, 10, 10); // Sesuaikan posisi jika perlu

    // Simpan PDF ke Uint8Array
    const pdfBytes = pdf.output('arraybuffer');

    // Secara opsional, Anda dapat menyimpan PDF ke file atau menampilkannya di jendela baru
    // Misalnya, untuk membuka PDF di jendela baru:
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
