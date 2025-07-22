document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  });

  window.addEventListener('load', () => {

    document.body.style.visibility = 'visible';


    gsap.to('#page-transition', {
      duration: 0.8,
      opacity: 0,
      ease: 'power2.out',
      onComplete: () => {
        document.getElementById('page-transition').style.display = 'none';
      }
    });
  });
const burger = document.getElementById('burger-toggle');
const menuWrapper = document.getElementById('mobileMenu');
const menuItems = menuWrapper.querySelectorAll('.menu-item');

let isMenuOpen = false;

const openMenu = () => {
  menuWrapper.classList.add('active');
  
  gsap.to(menuWrapper, {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: "power3.out"
  });

  gsap.fromTo(menuItems, 
    { y: 20, opacity: 0 }, 
    { 
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.6,
      delay: 0.1,
      ease: "power2.out"
    }
  );

  burger.classList.add('open');
  isMenuOpen = true;
};

const closeMenu = () => {
  gsap.to(menuWrapper, {
    duration: 0.4,
    y: '-100vh',
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      menuWrapper.classList.remove('active');
    }
  });

  burger.classList.remove('open');
  isMenuOpen = false;
};

burger.addEventListener('click', () => {
  isMenuOpen ? closeMenu() : openMenu();
});
const closeBtn = document.getElementById('closeMenu');
const closeIcon = document.getElementById('closeIcon')

closeBtn.addEventListener('click', () => {
  closeMenu(); 
 gsap.to(closeIcon, {
    rotation: 90,
    duration: 0.2,
    ease: 'expo',
    onComplete: () => {
      gsap.to(closeIcon, {
        rotation: 0,
        duration: 0.3,
        ease: 'power1.inOut',
        delay: 1
      });
    }
  });
});

  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();

    const parent = toggle.closest('.menu-item');

    
    document.querySelectorAll('.menu-item.has-submenu').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});

  if (window.innerWidth <= 768) {
    const headings = document.querySelectorAll(".footer-content h2");

    headings.forEach((heading) => {
      heading.addEventListener("click", () => {
        const list = heading.nextElementSibling;

        heading.classList.toggle("active");
        list.classList.toggle("open");
      });
    });
  }

    const stickyBar = document.getElementById("sticky-bar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;

    // Фиксируем шапку при прокрутке
    if (currentY > 300) {
      stickyBar.classList.add("fixed");
    } else {
      stickyBar.classList.remove("fixed");
    }

    // Добавляем/убираем тень плавно
    if (currentY < 30) {
      stickyBar.classList.add("no-shadow");
    } else {
      stickyBar.classList.remove("no-shadow");
    }

    lastScrollY = currentY;
  });
  

const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");

      // Активная кнопка
      tabButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Анимация табов
      tabContents.forEach((content) => {
        if (content.id === target) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });
  });

})  