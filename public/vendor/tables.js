
$(document).ready( function ()
{
  
    var tabel_pr_line;
    var tabel_pr_line2;

    var tabel_inventory;
var tabel_pr;
var tabel_po;
    $("#prlinee").hide();
    $("#btndel").hide();
    $("#btncncl").hide();
    $("#pr2").hide();
    $("#purchase-request-tab").hide();
    $("#purchase-request").hide();
    $("#purchase-order-tab").hide();
    $("#purchase-order").hide();
    var  tabel_inv;   
    var tabel_pr2;
// Fungsi untuk menghasilkan UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

$(function(){ 
    $("#header").load("header.html");  

    }); 

// Memuat konten modal saat dokumen siap
$("#myButton").on("click", function() {
    // Menggunakan metode load jQuery untuk memuat konten modal
    $("#modal_line").load("../modal_line.html", function() {
      // Menampilkan modal setelah konten dimuat
      $("#modal_line").modal("show");
    });
    });
  //=====================================================
//=====================================================
//=====================================================


tabel_pr ==$('#tabel_pr').DataTable({
    "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "http://localhost:3000/purchase/All",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
    { "mData":"id"},
{ "mData":"prcode"},
{ "mData":"requester"},
{ "mData":"detail_request"}
]
});

     
$("#prlinemodal").click(function (event) 
{
    tabel_pr =$('#tabel_pr').DataTable().row('.selected').data();
    // $('#prcode').val(tabel_pr['prcode']);
    $('[id^="id"]').val(tabel_pr['id']);
    $('[id^="prcode"]').val(tabel_pr['prcode']);
    $("#overview").hide();
    $("#purchase-request-tab").show();
    $("#purchase-request").show();

    $("#overview-tab").hide();
});


  //=====================================================
//=====================================================
//=====================================================

 tabel_pr_line =$('#tabel_pr_line').DataTable({
    "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
    "select": {"style": "multi"},
    "order": [[1, "asc"]],
    "sAjaxSource": "http://localhost:3000/purchase_line/All",
    "scrollX": "1",
    "sAjaxDataProp": "",
    "order": [[ 0, "asc" ]],
    "aoColumns": [
        { "mData":"id"},
    { "mData":"prcode"},
    { "mData":"item_code"},
    { "mData":"item_name"},
    { "mData":"qty"},
    { "mData":"price"},
    {"mData": null,
        "render": function (data, type, row)
         {
            // Menghitung total: qty * price
            return row.qty * row.price;
        }
    }
    ]
    });
  //=====================================================
//=====================================================
//=====================================================

    tabel_pr_line2 =$('#tabel_pr_line2').DataTable({
        "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
        "select": {"style": "multi"},
        "order": [[1, "asc"]],
        "sAjaxSource": "http://localhost:3000/purchase_line/All",
        "scrollX": "1",
        "sAjaxDataProp": "",
        "order": [[ 0, "asc" ]],
        "aoColumns": [
            { "mData":"id"},
        { "mData":"prcode","visible":false},
        { "mData":"item_code"},
        { "mData":"item_name"},
        { "mData":"qty"},
        { "mData":"price"},
        {"mData": null,
            "render": function (data, type, row)
             {
                // Menghitung total: qty * price
                return row.qty * row.price;
            }
        }
        ]
        });


$("#showw").click(function (event) 
{
    tb_prline();
});

  //=====================================================
//=====================================================
//=====================================================


 tabel_inventory =$('#tabel_inventory').DataTable({
    "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
    "select": {"style": "multi"},
    "order": [[1, "asc"]],
    "sAjaxSource": "http://localhost:3000/inventory/All",
    "scrollX": "1",
    "sAjaxDataProp": "",
    "order": [[ 0, "asc" ]],
    "aoColumns": [
        { "mData":"id"},
    { "mData":"item_number"},
    { "mData":"product_reference"},
    { "mData":"product_name"},
    { "mData":"uom"},
    { "mData":"purchase_price"},
    { "mData":"selling_price"}
]
    });
    $("#btndel").click(function (event) 
    {
        tabel_inv =$('#tabel_inventory').DataTable().row('.selected').data();
      // $('#prcode').val(tabel_pr1['prcode']);
      $('[id^="id"]').val(tabel_inv['id']);
      $('[id^="item_number"]').val(tabel_inv['item_number']);
      $('[id^="product_reference"]').val(tabel_inv['product_reference']);
      $('[id^="product_name"]').val(tabel_inv['product_name']);
      $('[id^="uom"]').val(tabel_inv['uom']);
      $('[id^="price"]').val(tabel_inv['price']);

      });

      $("#tabel_inventory").click(function (event) 
      {
        $("#btnadd").hide();
        $("#btndel").show();
        $("#btncncl").show();
        });
        
        $("#btncncl").click(function (event) 
        {
          $("#btndel").hide();
          $("#btncncl").hide();
          $("#btnadd").show();
          location.reload();
          });
          $("#search").click(function (event) 
          {
           
            $("#pr2").show();
            });

            $("#selected").click(function (event) 
            {
                tabel_inventory =$('#tabel_inventory').DataTable().row('.selected').data();
                // $('#prcode').val(tabel_pr1['prcode']);
                $('[id^="id"]').val(tabel_inventory['id']);
                $('[id^="item_code"]').val(tabel_inventory['product_reference']);
                $('[id^="item_name"]').val(tabel_inventory['product_name']);
                $('[id^="price"]').val(tabel_inventory['price']);

            });
  //=====================================================
//=====================================================
//=====================================================


            tabel_po ==$('#tabel_po').DataTable({
                "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
            "select": {"style": "multi"},
            "order": [[1, "asc"]],
            "sAjaxSource": "http://localhost:3000/purchase_order/All",
            "scrollX": "1",
            "sAjaxDataProp": "",
            "order": [[ 0, "asc" ]],
            "aoColumns": [
                { "mData":"id"},
            { "mData":"pocode"},
            { "mData":"prcode"},
            { "mData":"company"},
            { "mData":"vendor"},
            { "mData":"ship_to"}
            ]
            });    
            
            $("#show_po").click(function (event) 
            {
              $("#purchase-order").show();
              $("#purchase-order-tab").show();
              $("#purchase-order-tab2").show();

              $("#overview-tab").hide();
              $("#overview").hide();
            //   location.reload();
           
                tabel_po =$('#tabel_po').DataTable().row('.selected').data();
                // $('#prcode').val(tabel_pr1['prcode']);
                $('[id^="pocode"]').val(tabel_po['pocode']);
                $('[id^="prcode"]').val(tabel_po['prcode']);
                $('[id^="company"]').val(tabel_po['company']);
                $('[id^="vendor"]').val(tabel_po['vendor']);
                $('[id^="ship_to"]').val(tabel_po['ship_to']);
                $('#po-no').text("PO No : "+tabel_po['pocode']);
                $('#cpy').text(tabel_po['company']);
                $('#ven').text(tabel_po['vendor']);
                $('#shp').text(tabel_po['ship_to']);
                tb_prline_po();
                });


                function tb_prline()
                {
                    tabel_pr1 =$('#tabel_pr').DataTable().row('.selected').data();
                    // $('#prcode').val(tabel_pr1['prcode']);
                    $('[id^="requester"]').val(tabel_pr1['requester']);
                    $('[id^="detail_request"]').val(tabel_pr1['detail_request']);
                    $('[id^="prcode"]').val(tabel_pr1['prcode']);
                    
                    
                        $("#prlinee").show();
                            $("#pr").hide();
                        var tabel_pr1;
                        tabel_pr1 = $('#tabel_pr').DataTable().row('.selected').data();
                        var prx = tabel_pr1['prcode'];
                        console.log("datanyaaaaa PR " + prx);
                    
                        // Bersihkan pencarian sebelum melakukan pencarian baru
                        tabel_pr_line.search('').columns().search('').draw();
                    
                        // Pencarian berdasarkan kolom tertentu dengan nilai prx
                        tabel_pr_line.column(1).search(prx).draw();
                    
                        // Pencarian umum dengan nilai prx
                        tabel_pr_line.search(prx).draw();
                }
                function tb_prline_po()
                {
                    tabel_po =$('#tabel_po').DataTable().row('.selected').data();
                    // $('#prcode').val(tabel_pr1['prcode']);
                      $('[id^="prcode"]').val(tabel_po['prcode']);
                        var pro = tabel_po['prcode'];
                        console.log("datanyaaaaa PR " + pro);
                        
                        // Bersihkan pencarian sebelum melakukan pencarian baru
                        tabel_pr_line2.search('').columns().search('').draw();
                        // Pencarian berdasarkan kolom tertentu dengan nilai prx
                        tabel_pr_line2.column(1).search(pro).draw();
                        // Pencarian umum dengan nilai prx
                        tabel_pr_line2.search(pro).draw();
                }
               

  //=====================================================
//=====================================================
//=====================================================

    // $.ajax({
    //     url: 'http://localhost:3000/inventory/All',
    //     type: 'GET',
    //     dataType: 'json',
    //     success: function (data) {
    //         // Setelah mendapatkan data, buat card untuk setiap item
    //         for (var i = 0; i < data.length; i++) {
    //             var item = data[i];

    //             // Buat card menggunakan data dari REST API
    //           //  var cardHtml = '<div class="btn btn-'+ getRandomColor() +'  mb-1">'; // Mengubah col-lg-6 menjadi col-lg-4
    //             var cardHtml = '<div class="btn btn-'+ getRandomColor() +' bg-' + getRandomColor() + ' text-white shadow p-3 m-3">';
    //             cardHtml += '<div id="lbproduct_name" class="h3 mb-4 text-white-800 ">' + item.product_name + '</div>'; // Nama item dengan font besar
    //             cardHtml += '<div id="lbproduct_reference" class="h6 mb-1 text-white-400 ">' + item.product_reference + '</div>'; // Nama item dengan font besar
    //             cardHtml += '<div id="lbuom" class="h6 mb-1 text-white-100 ">' + item.uom + '</div>'; // Nama item dengan font besar
    //             cardHtml += '<div  id="lbselling_price"  class="h6 mb-4 text-white-500">'+  item.selling_price +'</div>'; // Harga jual
    //             cardHtml += '</div>';
    //             // Tambahkan card ke dalam container
    //             $('#itemContainer').append(cardHtml);
    //         }
    //     },
    //     error: function (error) {
    //         console.log('Error fetching data from the API:', error);
    //     }
    // });
    //Fungsi untuk menampilkan daftar item sesuai dengan pencarian
function displayItems(searchTerm) {
  const itemContainer = $('#itemContainer');
  itemContainer.empty(); // Mengosongkan container sebelum menambahkan yang baru

  $.ajax({
    url: 'http://localhost:3000/inventory/All',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      // Filter item berdasarkan pencarian
      const filteredItems = data.filter(item =>
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Setelah mendapatkan data, buat card untuk setiap item yang sesuai dengan pencarian
      for (var i = 0; i < filteredItems.length; i++) {
        var item = filteredItems[i];

        // Buat card menggunakan data dari REST API
        var cardHtml = '<div class="btn btn-' + getRandomColor() + ' bg-' + getRandomColor() + ' text-white shadow p-3 m-3">';
        cardHtml += '<div id="lbproduct_name" class="h3 mb-4 text-white-800 ">' + item.product_name + '</div>';
        cardHtml += '<div id="lbproduct_reference" class="h6 mb-1 text-white-400 ">' + item.product_reference + '</div>';
        cardHtml += '<div id="lbuom" class="h6 mb-1 text-white-100 ">' + item.uom + '</div>';
        cardHtml += '<div  id="lbselling_price"  class="h6 mb-4 text-white-500">' + item.selling_price + '</div>';
        cardHtml += '</div>';

        // Tambahkan card ke dalam container
        itemContainer.append(cardHtml);
      }
    },
    error: function (error) {
      console.log('Error fetching data from the API:', error);
    }
  });
}

// Menangani perubahan pada input pencarian
$('#search').on('input', function () {
  const searchTerm = $(this).val();
  displayItems(searchTerm);
});

// Menampilkan semua item saat halaman dimuat
displayItems('');
    function getRandomColor() {
        var colors = ['primary', 'success', 'danger', 'warning', 'info'];
        var randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

$(document).on('click', '.btn-primary', function() 
{
    // Ambil data item dari atribut data
    var productName = $(this).find('.text-white-800').text().trim();
    var codes = $(this).find('.text-white-400').text().trim();
    var pcs = $(this).find('.text-white-100').text().trim();
    var sellingPrice = $(this).find('.text-white-500').text().trim();
    $('[id^="product_name"]').val(productName);
    $('[id^="uom"]').val(pcs);
    $('[id^="product_reference"]').val(codes);
    $('[id^="selling_price"]').val(sellingPrice);

    // Tampilkan dialog dengan informasi item
    console.log(productName);
    console.log(codes);
    console.log(sellingPrice);

});

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
    const day = today.getDate().toString().padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const currentDate = getCurrentDate();
  $('[id^="date_transaction"]').val(currentDate);

  function hitungin()
  {
    var a = parseFloat($('[id^="qty"]').val()) || 0;
var b = parseFloat($('[id^="selling_price"]').val()) || 0;
// Melakukan perkalian antara a dan b
var hasil = a * b;
// Menetapkan hasil perkalian pada elemen dengan ID yang diawali dengan "c"
$('[id^="total"]').val(hasil);
  }
    // Menambahkan event handler untuk input "qty"
$('[id^="qty"]').on('input', function() {
 
  });  
  
    //=====================================================
//=====================================================
//=====================================================


  // URL API yang ingin diambil datanya
  const apiUrl = 'http://localhost:3000/sales/All';

// Fungsi untuk membuat struk dalam bentuk tabel
// Fungsi untuk membuat struk dalam bentuk tabel
// Fungsi untuk membuat struk dalam bentuk tabel
// Fungsi untuk membuat struk dalam bentuk tabel
function generateReceipt(data) {
  const receiptContainer = document.getElementById('receiptContainer');

  // Bersihkan kontainer sebelum menambahkan tabel baru
  receiptContainer.innerHTML = '';

  // Tabel untuk struk
  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Produk</th>
        <th>Qty</th>
        <th>Harga Satuan</th>
        <th>Total</th>
        <th>Waktu Transaksi</th>
      </tr>
    </thead>
    <tbody>
      ${data.map(item => `
        <tr>
          <td>${item.product_name}</td>
          <td>${item.qty} ${item.uom}</td>
          <td>${item.selling_price}</td>
          <td>${item.total}</td>
          <td>${new Date(item.createdAt).toLocaleString()}</td>
        </tr>
      `).join('')}
    </tbody>
  `;

  // Memasukkan tabel ke dalam elemen receiptContainer
  receiptContainer.appendChild(table);

  // Menghitung total keseluruhan
  const totalContainer = document.createElement('div');

  // Check if item.total is a valid number
  const invalidItems = data.filter(item => {
    const totalAsNumber = parseFloat(item.total); // or parseInt(item.total, 10) for integers
    const isValidNumber = !isNaN(totalAsNumber);

    if (!isValidNumber) {
      console.error('Invalid data for item.total:', item);
    }

    return !isValidNumber;
  });

  if (invalidItems.length === 0) {
    const grandTotal = data.reduce((acc, item) => acc + parseFloat(item.total), 0);
    totalContainer.innerHTML = `<p style="margin-right: 330px;">Grand Total:      ${grandTotal}</p>`;
  } else {
    totalContainer.innerHTML = `<p>Total Keseluruhan: Invalid data</p>`;
    console.error('Invalid data for item.total:', invalidItems);
  }

  receiptContainer.appendChild(totalContainer);
}



  // Mengambil data dari API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Memanggil fungsi generateReceipt dengan data dari API
      generateReceipt(data);
    })
    .catch(error => console.error('Error fetching data from API:', error));



//=====================================================
//=====================================================
//=====================================================
    // Fungsi untuk membuat tombol kalkulator
  function createCalculatorButtons() {
    const calculatorContainer = document.getElementById('calculatorButtons');
    const buttonValues = ['7', '8', '9', '/',
                          '4', '5', '6', '*',
                          '1', '2', '3', '-',
                          '0', '.', '=', '+'];

    // Loop untuk membuat tombol kalkulator
    buttonValues.forEach(value => {
      const button = document.createElement('div');
      button.className = 'button';
      button.textContent = value;
      button.addEventListener('click', () => handleButtonClick(value));

      // Menambahkan tombol ke dalam kontainer
      calculatorContainer.appendChild(button);
    });
  }


  // Fungsi untuk menangani klik tombol
  function handleButtonClick(value)
   {
    const qtyInput = $('[id^="qty"]');
    const currentQty = qtyInput.val();
  
    if (value === '=') {
      // Jika tombol '=' ditekan, evaluasi ekspresi matematika
      try {
        const result = eval(currentQty);
        qtyInput.val(result);
      } catch (error) {
        qtyInput.val('Error');
      }
    } else {
      // Jika tombol angka atau operator ditekan, tambahkan ke nilai input
      qtyInput.val(currentQty + value);
    }
    hitungin();
  }

  // Memanggil fungsi createCalculatorButtons untuk membuat tombol kalkulator
  createCalculatorButtons();

  //=====================================================
//=====================================================
//=====================================================


  //=====================================================
//=====================================================
//=====================================================
});