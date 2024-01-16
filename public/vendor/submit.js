
$(document).ready( function ()
{
    var form_purchase = $('#form_purchase');
    var form_purchase_line = $('#form_purchase_line');


    $("#pol1").click(function (event)
{    
// e.preventDefault(); // Mencegah aksi default formulir
$.ajax({
type: "POST",
url: "http://localhost:3000/purchase/Save",
data: $("#form_purchase").serialize(), // Menggunakan $("#form_purchase").serialize()
cache: false,
});
});

$("#pol2").click(function (event)
{    
// e.preventDefault(); // Mencegah aksi default formulir
$.ajax({
type: "POST",
url: "http://localhost:3000/purchase/Delete",
data: $("#form_purchase").serialize(), // Menggunakan $("#form_purchase").serialize()
cache: false,
});
});

$("#poll1").click(function (event)
{    
// e.preventDefault(); // Mencegah aksi default formulir
$.ajax({
type: "POST",
url: "http://localhost:3000/purchase_line/Save",
data: $("#form_purchase_line").serialize(), // Menggunakan $("#form_purchase").serialize()
cache: false,
});
});

$("#poll2").click(function (event)
{    
// e.preventDefault(); // Mencegah aksi default formulir
$.ajax({
type: "POST",
url: "http://localhost:3000/purchase_line/Delete",
data: $("#form_purchase_line").serialize(), // Menggunakan $("#form_purchase").serialize()
cache: false,
});
});


$("#inv1").click(function (event)
{    
// e.preventDefault(); // Mencegah aksi default formulir
$.ajax({
type: "POST",
url: "http://localhost:3000/inventory/Save",
data: $("#form_inventory").serialize(), // Menggunakan $("#form_purchase").serialize()
cache: false,
success: function(response) {
    // Buat elemen alert Bootstrap
    var alertElement = $('<div class="alert alert-success" role="alert">Data berhasil di tambah!</div>');

    // Tambahkan elemen alert ke dalam body atau elemen lainnya sesuai kebutuhan
    // Misalnya, tambahkan ke dalam elemen dengan id="alert-container"
    $('#alert-container').html(alertElement);

    // Setelah beberapa detik, hapus elemen alert
    setTimeout(function() {
        alertElement.alert('close');
    }, 3000); // 3000 milidetik (3 detik) dalam contoh ini

    // Jika Anda juga ingin memuat ulang halaman, gunakan:
    // location.reload();
},
error: function(error) {
    // Handle error jika diperlukan
    console.error("Error in AJAX request:", error);
}
});

});
$("#inv2").click(function (event) {    
    // e.preventDefault(); // Mencegah aksi default formulir
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/inventory/Delete",
        data: $("#form_inventory1").serialize(),
        cache: false,
        success: function(response) {
            // Buat elemen alert Bootstrap
            var alertElement = $('<div class="alert alert-success" role="alert">Data berhasil dihapus!</div>');

            // Tambahkan elemen alert ke dalam body atau elemen lainnya sesuai kebutuhan
            // Misalnya, tambahkan ke dalam elemen dengan id="alert-container"
            $('#alert-container').html(alertElement);

            // Setelah beberapa detik, hapus elemen alert
            setTimeout(function() {
                alertElement.alert('close');
            }, 3000); // 3000 milidetik (3 detik) dalam contoh ini

            // Jika Anda juga ingin memuat ulang halaman, gunakan:
            // location.reload();
        },
        error: function(error) {
            // Handle error jika diperlukan
            console.error("Error in AJAX request:", error);
        }
    });
});


$("#po1").click(function (event)
{    
// e.preventDefault(); // Mencegah aksi default formulir
$.ajax({
type: "POST",
url: "http://localhost:3000/purchase_order/Save",
data: $("#form_purchase_order").serialize(), // Menggunakan $("#form_purchase").serialize()
cache: false,
});
});

$("#po2").click(function (event)
{    
// e.preventDefault(); // Mencegah aksi default formulir
$.ajax({
type: "POST",
url: "http://localhost:3000/purchase_order/Delete",
data: $("#form_purchase_order").serialize(), // Menggunakan $("#form_purchase").serialize()
cache: false,
});
});


});