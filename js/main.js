// Data galeri fotbar  (dalam aplikasi nyata, ini bisa berasal dari API atau database)
const galleryData = [
    {
        id: 1,
        title: "miror di miniso",
        description: "Fotonya gemas, foto ini diambil saat kita abis nonton komang. kamu bahagia banget setelah nonton❤️",
        imageUrl: "/img/fotbar/fotbar 1.jpg",
        category: "fotbar",
        date: "7 April 2025"
    },
    {
        id: 2,
        title: "Kita fotbar sebelum mam",
        description: "Kita fotbar sebelum aku mukbang 2 mie ayam hehe",
        imageUrl: "/img/fotbar/fotbar 2.jpg",
        category: "fotbar",
        date: "5 April 2025"
    },
    {
        id: 3,
        title: "Bukber",
        description: "Ini adalah momen yang sangat seru, saat aku pulang dari surabaya kita bukber dirumaa kamuu mam nasi gorengg nyamm nyamm",
        imageUrl: "/img/fotbar/fotbar 3.jpg",
        category: "fotbar",
        date: "26 Maret 2025"
    },
    {
        id: 4,
        title: "Nunggu rapli",
        description: "Kita foto di bawah pohon nungguinn raplii",
        imageUrl: "/img/fotbar/fotbar 4.jpg",
        category: "fotbar",
        date: "7 April 2025"
    },
    {
        id: 5,
        title: "dirumah kamu",
        description: "foto ini diambil saat ngerayainn ulang tahunn kamuu meskipunn belumm hehe",
        imageUrl: "/img/fotbar/fotbar 5.jpg",
        category: "fotbar",
        date: "1 Dec 2024"
    },
    {
        id: 6,
        title: "Kejebak hujan",
        description: "kita fotbar saat kita mau pulang haha kita hujan hujanan di tanggul abis mam mie apong",
        imageUrl: "/img/fotbar/fotbar 6.jpg",
        category: "fotbar",
        date: "23 November 2024"
    },
    {
        id: 7,
        title: "Mie ayam tugu",
        description: "kita mamam mie ayam di ubs nyamm nyamm",
        imageUrl: "/img/fotbar/fotbar 7.jpg",
        category: "fotbar",
        date: "5 November 2024"
    },
    {
        id: 8,
        title: "cebelum foto studio",
        description: "kita fotar saat nungguin rapli buat foto studio",
        imageUrl: "/img/fotbar/fotbar 8.jpg",
        category: "fotbar",
        date: "2 November 2024"
    },
    {
        id: 9,
        title: "First date",
        description: "Momen ini gaakan pernah aku lupain dimana ini adalah moment spasial banget buat aku hehe kita keluar pertamma kali",
        imageUrl: "/img/fotbar/fotbar 9.jpg",
        category: "fotbar",
        date: "1 July 2023"
    },
    {
        id: 10,
        title: "Aku wisuda",
        description: "Huhu ini juga moment gaakan pernah aku lupain juga, aku senang sekali.",
        imageUrl: "/img/fotbar/fotbar 10.jpg",
        category: "fotbar",
        date: "17 Juni 2023"
    },
    {
        id: 11,
        title: "abis dari smk aku ke smp",
        description: "Ini adalah foto saat aku ke smp setelah aku dari smk buat naruh berkas",
        imageUrl: "/img/fotbar/fotbar 11.jpg",
        category: "fotbar",
        date: "15 Juni 2023"
    },
    {
        id: 12,
        title: "Fotbar di ukm",
        description: "foto ini diambil saat kita mamm mie di ukmm",
        imageUrl: "/img/fotbar/fotbar 12.jpg",
        category: "fotbar",
        date: "lupa"
    },
    {
        id: 13,
        title: "fotbar",
        description: "Ini foto nde depan rumahnya temenmu ituu",
        imageUrl: "/img/fotbar/fotbar 13.jpg",
        category: "fotbar",
        date: "lupa"
    },
    {
        id: 14,
        title: "Paseban",
        description: "Ini adalah momen pas di pantai paseban dimana kamu keluar sama saudara kamu tapi aku ikut hehehee",
        imageUrl: "/img/fotbar/fotbar 14.jpg",
        category: "fotbar",
        date: "13 Juli 2024"
    },
    {
        id: 15,
        title: "Foto abis dari upacara",
        description: "Aku datengin kamu nde rumah e temenmu pas abis upacara hehee",
        imageUrl: "/img/fotbar/fotbar 15.jpg",
        category: "fotbar",
        date: "17 agustus 2023"
    },
    {
        id: 16,
        title: "Kita ke cemara",
        description: "Saat itu kita bikin trend canvas ituu, seruu sekalii",
        imageUrl: "/img/fotbar/fotbar 16.jpg",
        category: "fotbar",
        date: "23 Juli 2023"
    },
    {
        id: 17,
        title: "bukber kamu dan teman sekelasmu",
        description: "ini kamu ajak aku ikut bukber hehe",
        imageUrl: "/img/fotbar/fotbar 17.jpg",
        category: "fotbar",
        date: "27 maret 2024"
    },
    {
        id: 18,
        title: "jemput kamu saat selesai upacara",
        description: "Aku jemput kamu di lapangan paleran saat upacara 17 agustus ini sorenya haha",
        imageUrl: "/img/fotbar/fotbar 18.jpg",
        category: "fotbar",
        date: "17 Agustus 2023"
    },
    {
        id: 19,
        title: "Gunung gambir",
        description: "ini adalah moment yang penuh keseruann haha, aku ultah dan kontak montor hilang hehe",
        imageUrl: "/img/fotbar/fotbar 19.jpg",
        category: "fotbar",
        date: "8 July 2024"
    },
    {
        id: 20,
        title: "Dira",
        description: "Kita mamam di dira",
        imageUrl: "/img/fotbar/fotbar 20.jpg",
        category: "fotbar",
        date: "31 Agustus 2024"
    },
    {
        id: 21,
        title: "Mie ayam belakang baldes",
        description: "Kita mamam pas pulang sekul",
        imageUrl: "/img/fotbar/fotbar 21.jpg",
        category: "fotbar",
        date: "29 Agustus 2024"
    },
    {
        id: 22,
        title: "Foto studio",
        description: "kita foto studio di kencongg",
        imageUrl: "/img/fotbar/fotbar 22.jpg",
        category: "fotbar",
        date: "2 November 2024"
    },
    {
        id: 23,
        title: "Foto studio",
        description: "Aku keren hahaha",
        imageUrl: "/img/fotbar/fotbar 23.jpg",
        category: "fotbar",
        date: "2 November 2024 "
    },
    {
        id: 24,
        title: "Foto studio",
        description: "Kamu keren sekalii",
        imageUrl: "/img/fotbar/fotbar 24.jpg",
        category: "fotbar",
        date: "2 November 2024"
    },
    
    // Kategori jalan (8 card)
    {
        id: 25,
        title: "Bioskop",
        description: "Kita nonton komang seru sekalii, -dingin banget haha",
        imageUrl: "/img/jalan/jalan.jpg",
        category: "jalan",
        date: "7 April 2025"
    },
    {
        id: 26,
        title: "Mr DIY",
        description: "aku menemani kamu ke diy kencong",
        imageUrl: "/img/jalan/jalan 2.jpg",
        category: "jalan",
        date: "7 Desember 2024"
    },
    {
        id: 27,
        title: "Game fantasia",
        description: "Kita bermain di roxy, seruuu",
        imageUrl: "/img/jalan/jalan 3.jpg",
        category: "jalan",
        date: "15 September 2024"
    },
    {
        id: 28,
        title: "Beli eskrim nan cilok",
        description: "Kita keluar malam jajann ehehe",
        imageUrl: "/img/jalan/jalan 4.jpg",
        category: "jalan",
        date: "24 July 2024"
    },
    {
        id: 29,
        title: "Takoyakii",
        description: "kita keluar bareng buat beli takoyakii",
        imageUrl: "/img/jalan/jalan 5.jpg",
        category: "jalan",
        date: "29 November 2024"
    },
    {
        id: 31,
        title: "Kebab",
        description: "Kita keluar beli kebab di wancin inii",
        imageUrl: "/img/jalan/jalan 7.jpg",
        category: "jalan",
        date: "13 September 2024"
    },
    {
        id: 32,
        title: "Aduu warna kulit",
        description: "Ini pas kita beli cilok aci di depan kepiting",
        imageUrl: "/img/jalan/jalan 8.jpg",
        category: "jalan",
        date: "lupa"
    },
    
    // Kategori mam (14 card)
    {
        id: 33,
        title: "Mukbang 2 mie ayam hehe",
        description: "ini aku pas mam mie ayam duaa hehe",
        imageUrl: "/img/mam/mam 1.jpg",
        category: "mam",
        date: "5 April 2025"
    },
    {
        id: 34,
        title: "Seblak yura",
        description: "nyoba bihunn nyamm nyamm",
        imageUrl: "/img/mam/mam 2.jpg",
        category: "mam",
        date: "1 Febuary 2025"
    },
    {
        id: 35,
        title: "Mie ayam sebelah rumahmuu",
        description: "Mie ayamm nyamm nyammm",
        imageUrl: "/img/mam/mam 3.jpg",
        category: "mam",
        date: "25 Oktober 2022"
    },
    {
        id: 36,
        title: "seblak yura",
        description: "ini lebih awal dari yang sebelumnya",
        imageUrl: "/img/mam/mam 4.jpg",
        category: "mam",
        date: "30 December 2024"
    },
    {
        id: 37,
        title: "mie lamer",
        description: "ini kamu ajak aku ke lamer malemm",
        imageUrl: "/img/mam/mam 5.jpg",
        category: "mam",
        date: "25 December 2024"
    },
    {
        id: 38,
        title: "Mie ayam sebelahmu part 2",
        description: "mie ayam again nyamm nyamm",
        imageUrl: "/img/mam/mam 6.jpg",
        category: "mam",
        date: "24 December 2024"
    },
    {
        id: 39,
        title: "Mie apong",
        description: "Ini gara gara uber tutup kita beli apong haha",
        imageUrl: "/img/mam/mam 7.jpg",
        category: "mam",
        date: "23 November 2024"
    },
    {
        id: 40,
        title: "Yura againn",
        description: "Nyamm nyamm",
        imageUrl: "/img/mam/mam 8.jpg",
        category: "mam",
        date: "16 November 2024"
    },
    {
        id: 41,
        title: "Mie level tugu",
        description: "Kamu pingin nyoba mie level tugu",
        imageUrl: "/img/mam/mam 9.jpg",
        category: "mam",
        date: "5 November 2024"
    },
    {
        id: 42,
        title: "Seblak riekhe",
        description: "wawww enaaa",
        imageUrl: "/img/mam/mam 10.jpg",
        category: "mam",
        date: "21 September 2024"
    },
    {
        id: 43,
        title: "Nasgor diraa",
        description: "Kamu nasgor hitamm hahaaa",
        imageUrl: "/img/mam/mam 11.jpg",
        category: "mam",
        date: "31 Agustus 2024"
    },
    {
        id: 44,
        title: "Seblak semboro",
        description: "kamu pingin nyoba seblak prasmanan di semboro tapi zonk hahaha",
        imageUrl: "/img/mam/mam 12.jpg",
        category: "mam",
        date: "14 Juni 2024"
    },
    {
        id: 45,
        title: "Uberr",
        description: "nyammm nyamm enaa uberr",
        imageUrl: "/img/mam/mam 13.jpg",
        category: "mam",
        date: "29 juni 2024"
    },
    {
        id: 46,
        title: "Warung jubung",
        description: "Ini kita setelah abis dari roxy mampir buat mamm mammm",
        imageUrl: "/img/mam/mam 14.jpg",
        category: "mam",
        date: "15 September 2024"
    }
];

// Variabel untuk melacak jumlah fotbar  yang ditampilkan
let displayedItems = 0;
const itemsPerLoad = 4;

// Fungsi untuk membuat kartu fotbar 
function createPhotoCard(item) {
    const card = document.createElement('div');
    card.className = 'card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300';
    card.setAttribute('data-category', item.category);
    
    card.innerHTML = `
        <div class="relative overflow-hidden group">
            <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button class="view-photo bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" data-id="${item.id}">
                    <i class="fas fa-search-plus"></i>
                </button>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">${item.title}</h3>
            <p class="text-gray-600 text-sm mb-3">${item.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-xs text-gray-500"><i class="far fa-calendar-alt mr-1"></i>${item.date}</span>
                <span class="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-700">${item.category}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Fungsi untuk memuat fotbar -fotbar 
function loadPhotos() {
    const gallery = document.getElementById('gallery');
    const endIndex = Math.min(displayedItems + itemsPerLoad, galleryData.length);
    const fragment = document.createDocumentFragment();
    
    for (let i = displayedItems; i < endIndex; i++) {
        const card = createPhotoCard(galleryData[i]);
        fragment.appendChild(card);
    }
    
    gallery.appendChild(fragment);
    displayedItems = endIndex;
    
    // Sembunyikan tombol "Muat Lebih Banyak" jika semua fotbar  sudah dimuat
    if (displayedItems >= galleryData.length) {
        document.getElementById('loadMore').style.display = 'none';
        
        // Tambahkan kartu aniversari di akhir galeri
        addAnniversaryCard();
    }
    
    // Tambahkan event listener untuk tombol lihat fotbar 
    document.querySelectorAll('.view-photo').forEach(button => {
        button.addEventListener('click', function() {
            const photoId = parseInt(this.getAttribute('data-id'));
            openPhotoModal(photoId);
        });
    });
}

// Fungsi untuk menambahkan kartu aniversari
function addAnniversaryCard() {
    const gallery = document.getElementById('gallery');
    
    // Buat elemen kartu aniversari
    const anniversaryCard = document.createElement('div');
    anniversaryCard.className = 'card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300';
    
    // Isi konten kartu
    anniversaryCard.innerHTML = `
        <div class="relative overflow-hidden group">
            <img src="/img/images.jpeg" alt="Aniversari" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-pink-500 to-transparent opacity-70"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <a href="aniv.html" class="bg-white text-pink-500 font-bold py-2 px-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-pink-50">
                    <i class="fas fa-heart mr-2"></i> Lihat Aniversari
                </a>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Halaman Aniversari Spesial</h3>
            <p class="text-gray-600 text-sm mb-3">click page ini❤️</p>
        </div>
    `;
    
    // Tambahkan kartu ke galeri
    gallery.appendChild(anniversaryCard);
    
    // Tambahkan efek animasi
    setTimeout(() => {
        anniversaryCard.style.opacity = '1';
        anniversaryCard.style.transform = 'translateY(0)';
    }, 100);
}

// Fungsi untuk membuka modal fotbar 
function openPhotoModal(photoId) {
    const photo = galleryData.find(item => item.id === photoId);
    if (!photo) return;
    
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = photo.imageUrl;
    modalTitle.textContent = photo.title;
    modalDescription.textContent = photo.description;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Mencegah scrolling
    
    // Animasi masuk
    modalImage.style.opacity = '0';
    modalImage.style.transform = 'scale(0.9)';
    setTimeout(() => {
        modalImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        modalImage.style.opacity = '1';
        modalImage.style.transform = 'scale(1)';
    }, 10);
}

// Fungsi untuk menutup modal fotbar 
function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    
    // Animasi keluar
    modalImage.style.opacity = '0';
    modalImage.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Mengembalikan scrolling
        modalImage.style.transition = '';
    }, 300);
}

// Fungsi untuk memfilter fotbar  berdasarkan kategori
function filterPhotos() {
    const filterValue = document.getElementById('filter').value;
    const gallery = document.getElementById('gallery');
    const cards = gallery.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Fungsi untuk mencari fotbar  berdasarkan judul atau deskripsi
function searchPhotos() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const gallery = document.getElementById('gallery');
    const cards = gallery.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchValue) || description.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Muat fotbar -fotbar  awal
    loadPhotos();
    
    // Animasi masuk untuk galeri
    setTimeout(() => {
        document.querySelector('.gallery-container').classList.add('loaded');
    }, 100);
    
    // Event listener untuk tombol "Muat Lebih Banyak"
    document.getElementById('loadMore').addEventListener('click', loadPhotos);
    
    // Event listener untuk filter
    document.getElementById('filter').addEventListener('change', filterPhotos);
    
    // Event listener untuk pencarian
    document.getElementById('search').addEventListener('input', searchPhotos);
    
    // Event listener untuk menutup modal
    document.getElementById('closeModal').addEventListener('click', closePhotoModal);
    
    // Menutup modal saat mengklik di luar konten modal
    document.getElementById('photoModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closePhotoModal();
        }
    });
    
    // Menutup modal dengan tombol Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !document.getElementById('photoModal').classList.contains('hidden')) {
            closePhotoModal();
        }
    });
});

// Animasi scroll untuk menampilkan kartu saat di-scroll
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});