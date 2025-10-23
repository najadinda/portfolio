const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const header = document.getElementById('main-header');

    // Toggle menu mobile
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Tutup menu setelah klik link
    menu.addEventListener('click', () => {
      menu.classList.add('hidden');
    });

    // Tutup menu mobile kalau balik ke desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        menu.classList.add('hidden');
      }
    });

    // Efek ganti background saat scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    new Typed("#typed-name", {
      strings: ["Ayudhya Naja Adinda"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: "|",
    });

const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // reset active
      filterBtns.forEach(b => b.classList.remove('text-blue-600', 'font-bold'));
      btn.classList.add('text-blue-600', 'font-bold');

      projectCards.forEach(card => {
        card.style.opacity = "0";
        setTimeout(() => {
          if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = "block";
            setTimeout(() => card.style.opacity = "1", 100);
          } else {
            card.style.display = "none";
          }
        }, 200);
      });
    });
  });