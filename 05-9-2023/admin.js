
                // Fungsi untuk mengedit baris
                function editRow(button) {
                    // Anda dapat menambahkan logika pengeditan di sini
                    alert('Edit button clicked');
                }
            
                // Fungsi untuk menghapus baris
                function deleteRow(button) {
                    // Anda dapat menambahkan logika penghapusan di sini
                    alert('Delete button clicked');
                }
  
    // Fungsi untuk mengecek apakah teks mengandung kata kunci pencarian
    function containsText(text, keyword) {
        return text.toLowerCase().includes(keyword.toLowerCase());
    }

    // Fungsi untuk menampilkan baris berdasarkan daerah yang dipilih
    function filterByDaerah(daerah) {
        const rows = document.querySelectorAll(".data-table tbody tr");
        rows.forEach((row) => {
            const daerahCell = row.querySelector("td:nth-child(2)");
            if (!daerah || daerah === "all" || containsText(daerahCell.textContent, daerah)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    }

    // Fungsi untuk menangani klik tombol pencarian
    document.getElementById("searchButton").addEventListener("click", function () {
        const keyword = document.getElementById("searchInput").value;
        const daerah = document.getElementById("filterDropdown").value;
        const rows = document.querySelectorAll(".data-table tbody tr");
        rows.forEach((row) => {
            const nameCell = row.querySelector("td:nth-child(1)");
            if (containsText(nameCell.textContent, keyword)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
        filterByDaerah(daerah);
    });

    // Fungsi untuk menangani perubahan dalam dropdown filter
    document.getElementById("filterDropdown").addEventListener("change", function () {
        const daerah = this.value;
        filterByDaerah(daerah);
    });



// pagination
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const pageNumbers = document.getElementById("pageNumbers");

let currentPage = 1;
const totalPages = 10; // Ganti dengan jumlah halaman yang sesuai

// Function untuk memperbarui tampilan pagination
function updatePagination() {
    pageNumbers.innerHTML = "";

    // Tambahkan tombol "Previous"
    const prev = document.createElement("button");
    prev.textContent = "<";
    prev.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            // Tambahkan logika untuk memuat data sesuai dengan halaman saat ini
        }
    });
    pageNumbers.appendChild(prev);

    // Tambahkan angka halaman
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement("button");
        pageNumber.textContent = i;
        if (i === currentPage) {
            pageNumber.classList.add("active");
        }
        pageNumber.addEventListener("click", () => {
            currentPage = i;
            updatePagination();
            // Tambahkan logika untuk memuat data sesuai dengan halaman saat ini
        });
        pageNumbers.appendChild(pageNumber);
    }

    // Tambahkan tombol "Next"
    const next = document.createElement("button");
    next.textContent = ">";
    next.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
            // Tambahkan logika untuk memuat data sesuai dengan halaman saat ini
        }
    });
    pageNumbers.appendChild(next);
}

// Memperbarui tampilan awal
updatePagination();


    