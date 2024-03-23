const product_api = 'https://crudcrud.com/api/2919ed0ef9f34dc9a3d32c7fd3ee98a1/barang';

let namaBarang = document.getElementById('nama');
let jumlahBarang = document.getElementById('jumlah');
let hargaBarang = document.getElementById('harga');
let konten = document.getElementById('konten');

// Get Data
fetch(product_api)
    .then(response => response.json())
    .then(res => {
        res.forEach(element => {
            konten.innerHTML += `
                <tr>
                    <td>${element._id}</td>
                    <td>${element.nama}</td>
                    <td>${element.jumlah}</td>
                    <td>${element.harga}</td>
                    <td>
                        <button class="btn-edit" id="edit"('${element._id}')">Edit</button>
                        <button class="btn-hapus" onclick="deleteData('${element._id}')">Delete</button>
                    </td>
                </tr>`;
            console.log(element);
        });
    })
    .catch(error => {
        console.error('Data tidak ditemukan:', error);
    });

// Create Data
const form = document.getElementById('form-data');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(form);

    const newData = {
        nama: formData.get('nama'),
        jumlah: formData.get('jumlah'),
        harga: formData.get('harga')
    };
    fetch(product_api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => response.json())
    .then(data => {
        location.reload()
        console.log('Data ditambahkan:', data)
    })
    .catch(error => {
        console.log('Data gagal disimpan:', error)
    });
});
 
// Update Data


// Delete Data
function deleteData(id) {
    fetch(`${product_api}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Gagal menghapus data.');
        }
        confirm('Apakah anda yakin?')
        console.log('Data berhasil dihapus.');
        location.reload()
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
}