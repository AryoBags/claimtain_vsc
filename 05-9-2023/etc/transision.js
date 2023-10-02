const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Menghentikan perilaku default tautan
        const targetId = link.getAttribute('href').substring(1); // Mengambil ID target dari href
        const targetElement = document.getElementById(targetId); // Mendapatkan elemen target

        if (targetElement) {
            // Gulir halaman ke elemen target dengan efek transisi
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});