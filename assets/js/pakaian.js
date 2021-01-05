//Fetch table from apex
fetch('https://apex.oracle.com/pls/apex/sql-timotius/tugasdb/pakaian').then(res => res.json()).then((out) => {
    let table = out.items
    table.sort((a, b) => (a.id_pakaian > b.id_pakaian) ? 1 : -1)
    buildTable(table);
}).catch(err => console.error(err));

//Function to built out the table
function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++){
    var row = `<tr>
                <td>${data[i].id_pakaian}</td>
                <td>${data[i].nama}</td>
                <td>${data[i].merk}</td>
                <td>${data[i].kategori}</td>
                <td>${data[i].harga_jual}</td>
                <td>${data[i].harga_beli}</td>
                <td>${data[i].stok}</td>
                <td><a href="/updateappa/${data[i].id_pakaian}"><button>Update</button></a></td>
            </tr>`
    table.innerHTML += row


  }
}
  
//Adding data to apex
var form = document.getElementById("form")

form.addEventListener('submit', function(e){
    e.preventDefault()


    let nama = document.getElementById("nama").value;
    let merk = document.getElementById("merk").value;
    let kategori = document.getElementById("kategori").value;
    let harga_jual = document.getElementById("harga_jual").value;
    let harga_beli = document.getElementById("harga_beli").value;
    let stok = document.getElementById("stok").value;


    fetch('https://apex.oracle.com/pls/apex/sql-timotius/tugasdb/pakaian', {
        method: 'POST',
        body:JSON.stringify({
            nama,
            merk,
            kategori,
            harga_jual,
            harga_beli,
            stok
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    setTimeout(location.reload.bind(location), 3000);
})
  