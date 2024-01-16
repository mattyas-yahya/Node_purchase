
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
//   tabel_pr1 =$('#tabel_pr').DataTable().row('.selected').data();
// // $('#prcode').val(tabel_pr1['prcode']);
// $('[id^="requester"]').val(tabel_pr1['requester']);
// $('[id^="detail_request"]').val(tabel_pr1['detail_request']);
// $('[id^="prcode"]').val(tabel_pr1['prcode']);


//     $("#prlinee").show();
//         $("#pr").hide();
//     var tabel_pr1;
//     tabel_pr1 = $('#tabel_pr').DataTable().row('.selected').data();
//     var prx = tabel_pr1['prcode'];
//     console.log("datanyaaaaa PR " + prx);

//     // Bersihkan pencarian sebelum melakukan pencarian baru
//     tabel_pr_line.search('').columns().search('').draw();

//     // Pencarian berdasarkan kolom tertentu dengan nilai prx
//     tabel_pr_line.column(1).search(prx).draw();

//     // Pencarian umum dengan nilai prx
//     tabel_pr_line.search(prx).draw();
});



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
    { "mData":"price"}
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
               
});