//Fetch table from apex
fetch('https://apex.oracle.com/pls/apex/sql-timotius/tugasdb/pelanggan').then(res => res.json()).then((out) => {
    let table = out.items
    table.sort((a, b) => (a.id_pelanggan > b.id_pelanggan) ? 1 : -1)
    console.log(table)
    buildTable(table);
}).catch(err => console.error(err));

//Function to built out the table
function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++){
    var row = `<tr>
            <td>${data[i].id_pelanggan}</td>
            <td>${data[i].nama}</td>
                          <td>${data[i].nomor}</td>
                          <td>${data[i].alamat}</td>
                          <td><a href="/updatecust/${data[i].id_pelanggan}"><button>Update</button></a></td>
          </tr>`
    table.innerHTML += row


  }
}
  
//Adding data to apex
var form = document.getElementById("form")

form.addEventListener('submit', function(e){
    e.preventDefault()


    let nama = document.getElementById("nama").value;
    let nomor = document.getElementById("nomor").value;
    let alamat = document.getElementById("alamat").value;


    fetch('https://apex.oracle.com/pls/apex/sql-timotius/tugasdb/pelanggan', {
        method: 'POST',
        body:JSON.stringify({
            nama,
            nomor,
            alamat
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    setTimeout(location.reload.bind(location), 3000);
})
  