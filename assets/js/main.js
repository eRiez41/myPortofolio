// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', (event) => {

    // === Logic untuk Modal Hackintosh ===
    
    // 1. Cari elemen-elemennya di halaman
    const openModalBtn = document.getElementById('openHackintoshModal');
    const closeModalBtn = document.getElementById('closeHackintoshModal');
    const modal = document.getElementById('hackintoshModal');

    // 2. Cek apakah elemen-elemen itu ada di halaman ini
    //    Ini penting agar tidak error di halaman lain (index.html, etc.)
    if (openModalBtn && closeModalBtn && modal) {
    
        // 3. Tampilkan modal saat tombol "Lihat Detail" diklik
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah link '#' pindah ke atas halaman
            modal.style.display = 'flex'; // Tampilkan modal
        });

        // 4. Sembunyikan modal saat tombol 'X' diklik
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // Sembunyikan modal
        });

        // 5. (Opsional) Sembunyikan modal saat klik di luar area konten
        modal.addEventListener('click', (e) => {
            // Cek apakah yang diklik adalah latar belakang (overlay), bukan kontennya
            if (e.target === modal) {
                modal.style.display = 'none'; // Sembunyikan modal
            }
        });
    }

    // === (Kamu bisa tambahkan logic untuk modal lain di sini) ===
// 1. Cari elemen-elemennya
    const openMi9ModalBtn = document.getElementById('openMi9Modal');
    const closeMi9ModalBtn = document.getElementById('closeMi9Modal');
    const mi9Modal = document.getElementById('mi9Modal');

    // 2. Cek apakah elemen-elemen itu ada di halaman ini
    if (openMi9ModalBtn && closeMi9ModalBtn && mi9Modal) {
    
        // 3. Tampilkan modal saat tombol "Lihat Detail" diklik
        openMi9ModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            mi9Modal.style.display = 'flex'; // Tampilkan modal
        });

        // 4. Sembunyikan modal saat tombol 'X' diklik
        closeMi9ModalBtn.addEventListener('click', () => {
            mi9Modal.style.display = 'none'; // Sembunyikan modal
        });

        // 5. Sembunyikan modal saat klik di luar area konten
        mi9Modal.addEventListener('click', (e) => {
            if (e.target === mi9Modal) {
                mi9Modal.style.display = 'none'; // Sembunyikan modal
            }
        });
    }
    // 1. Cari elemen-elemennya
    const openLinuxModalBtn = document.getElementById('openLinuxModal');
    const closeLinuxModalBtn = document.getElementById('closeLinuxModal');
    const linuxModal = document.getElementById('linuxModal');

    // 2. Cek apakah elemen-elemen itu ada
    if (openLinuxModalBtn && closeLinuxModalBtn && linuxModal) {
    
        // 3. Tampilkan modal saat tombol diklik
        openLinuxModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            linuxModal.style.display = 'flex'; // Tampilkan modal
        });

        // 4. Sembunyikan modal saat tombol 'X' diklik
        closeLinuxModalBtn.addEventListener('click', () => {
            linuxModal.style.display = 'none'; // Sembunyikan modal
        });

        // 5. Sembunyikan modal saat klik di luar
        linuxModal.addEventListener('click', (e) => {
            if (e.target === linuxModal) {
                linuxModal.style.display = 'none'; // Sembunyikan modal
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    
    // 1. Cari elemen-elemennya
    const openSpkHpModalBtn = document.getElementById('openSpkHpModal');
    const closeSpkHpModalBtn = document.getElementById('closeSpkHpModal');
    const spkHpModal = document.getElementById('spkHpModal');

    // 2. Cek apakah elemen-elemen itu ada
    if (openSpkHpModalBtn && closeSpkHpModalBtn && spkHpModal) {
    
        // 3. Tampilkan modal saat tombol diklik
        openSpkHpModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            spkHpModal.style.display = 'flex'; // Tampilkan modal
        });

        // 4. Sembunyikan modal saat tombol 'X' diklik
        closeSpkHpModalBtn.addEventListener('click', () => {
            spkHpModal.style.display = 'none'; // Sembunyikan modal
        });

        // 5. Sembunyikan modal saat klik di luar
        spkHpModal.addEventListener('click', (e) => {
            if (e.target === spkHpModal) {
                spkHpModal.style.display = 'none'; // Sembunyikan modal
            }
        });
    }

    // 1. Cari elemen-elemennya
    const openSpkJurusanModalBtn = document.getElementById('openSpkJurusanModal');
    const closeSpkJurusanModalBtn = document.getElementById('closeSpkJurusanModal');
    const spkJurusanModal = document.getElementById('spkJurusanModal');

    // 2. Cek apakah elemen-elemen itu ada
    if (openSpkJurusanModalBtn && closeSpkJurusanModalBtn && spkJurusanModal) {
    
        // 3. Tampilkan modal saat tombol diklik
        openSpkJurusanModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            spkJurusanModal.style.display = 'flex'; // Tampilkan modal
        });

        // 4. Sembunyikan modal saat tombol 'X' diklik
        closeSpkJurusanModalBtn.addEventListener('click', () => {
            spkJurusanModal.style.display = 'none'; // Sembunyikan modal
        });

        // 5. Sembunyikan modal saat klik di luar
        spkJurusanModal.addEventListener('click', (e) => {
            if (e.target === spkJurusanModal) {
                spkJurusanModal.style.display = 'none'; // Sembunyikan modal
            }
        });
    }

}); // <-- Ini adalah penutup dari DOMContentLoaded