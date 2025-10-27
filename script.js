// Ambil elemen yang dibutuhkan
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const header = document.getElementById("main-header");

// Toggle menu saat tombol diklik
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("scale-95");
});

// Tutup menu otomatis setelah klik salah satu link
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.add("hidden");
    menu.classList.add("opacity-0");
    menu.classList.add("scale-95");
  }
});


// Tutup menu mobile kalau balik ke desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.classList.add("hidden");
  }
});

// Efek ganti background saat scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

new Typed("#typed-name", {
  strings: [
 'Ayudhya <span class="text-pink-500">Naja</span> Adinda'
  ],
  typeSpeed: 80,
  backSpeed: 50,
  loop: false,
  showCursor: true,
  cursorChar: "|",
});

const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // reset active
    filterBtns.forEach((b) => b.classList.remove("text-blue-600", "font-bold"));
    btn.classList.add("text-blue-600", "font-bold");

    projectCards.forEach((card) => {
      card.style.opacity = "0";
      setTimeout(() => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
          setTimeout(() => (card.style.opacity = "1"), 100);
        } else {
          card.style.display = "none";
        }
      }, 200);
    });
  });
});
