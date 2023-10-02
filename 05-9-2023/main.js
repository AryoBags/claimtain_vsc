// Menggunakan event listener untuk menangani pengguliran
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-fade");

    // Fungsi untuk mengecek apakah elemen dalam viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fungsi untuk menambahkan class 'visible' pada elemen yang terlihat
    function handleScroll() {
        sections.forEach((section) => {
            if (isElementInViewport(section)) {
                section.classList.add("visible");
            }
        });
    }

    // Event listener saat menggulir halaman
    window.addEventListener("scroll", handleScroll);

    // Panggil handleScroll() untuk menginisialisasi elemen yang terlihat saat halaman dimuat
    handleScroll();
});

//untuk menu bar 
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburgerMenu.classList.toggle('menu-active');

    // Mengubah ikon menjadi "X" atau kembali ke tiga garis horizontal
    const bars = hamburgerMenu.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburgerMenu.classList.contains('menu-active')) {
            // Jika menu terbuka, ubah ke "X"
            if (index === 0) {
                bar.style.transform = 'rotate(47deg) translate(5px, 6px)';
            } else if (index === 1) {
                bar.style.opacity = '0';
            } else if (index === 2) {
                bar.style.transform = 'rotate(-47deg) translate(5px, -6px)';
            }
        } else {
            // Jika menu tertutup, kembali ke tiga garis horizontal
            bar.style.transform = 'rotate(0) translate(0)';
            bar.style.opacity = '1';
        }
    });
});

// track filter 
// Fungsi untuk mengambil nilai filter
function applyFilter() {
    var filterValue = document.getElementById("filterDropdown").value.toLowerCase(); // Mengambil nilai filter dan mengonversi ke huruf kecil

    // Mendapatkan semua elemen tujuan (destinations)
    var destinations = document.getElementsByClassName("destination");

    // Loop melalui semua elemen tujuan
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        var destinationDaerah = destination.getAttribute("data-daerah").toLowerCase(); // Mendapatkan nilai "data-daerah" dari elemen

        // Cek apakah nilai "data-daerah" cocok dengan filter atau jika filter kosong
        if (filterValue === "" || destinationDaerah.includes(filterValue)) {
            destination.style.display = "inline-block"; // Tampilkan elemen jika cocok
        } else {
            destination.style.display = "none"; // Sembunyikan elemen jika tidak cocok
        }
    }
}

// Menambahkan event listener pada tombol filter
document.getElementById("filterDropdown").addEventListener("change", applyFilter);

// Panggil applyFilter saat halaman dimuat untuk menampilkan semua elemen awalnya
applyFilter();

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
    prev.textContent = "<-";
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
    next.textContent = "->";
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

