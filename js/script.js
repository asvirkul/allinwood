
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

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach((elem, i) => {
    gsap.fromTo(elem,
        { opacity: 0, y: 50 },
        {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.2,
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });
    });


// === SPLITTING TEXT EFFECT ===
    Splitting();


// ==== Swiper ===

const swiperLeft = new Swiper('.swiper-left', {
  slidesPerView: 2,
  speed: 6000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    }
  }
});

const swiperRight = new Swiper('.swiper-right', {
  slidesPerView: 2,
  speed: 6000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    }
  }
});


  window.addEventListener('DOMContentLoaded', () => {
    const showcaseSection = document.querySelector('.showcase-wrapper');
    const megamenus = document.querySelectorAll('.megamenu');

    if (!showcaseSection || megamenus.length === 0) return;

    function updateMegamenuBackground() {
      const scrollY = window.scrollY;
      const triggerY = showcaseSection.offsetTop + showcaseSection.offsetHeight;

      if (scrollY > triggerY) {
        megamenus.forEach(menu => menu.classList.add('dark-bg'));
      } else {
        megamenus.forEach(menu => menu.classList.remove('dark-bg'));
      }
    }

    window.addEventListener('scroll', updateMegamenuBackground);
    window.addEventListener('load', updateMegamenuBackground);
  });


// ===ACCORDION===
document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
  
    gsap.set(body, { height: 0, opacity: 0, display: 'none', paddingTop: 0, paddingBottom: 0 });
  
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
  

      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          const otherBody = otherItem.querySelector('.accordion-body');
          otherItem.classList.remove('active');
          gsap.to(otherBody, {
            height: 0,
            opacity: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.4,
            ease: 'power2.inOut',
            onComplete: () => gsap.set(otherBody, { display: 'none' })
          });
        }
      });
  
      if (!isOpen) {
        item.classList.add('active');
        gsap.set(body, { display: 'block' });
  

        body.style.height = 'auto';
        const fullHeight = body.scrollHeight;
        gsap.set(body, { height: 0 }); 
  
        gsap.to(body, {
          height: fullHeight,
          opacity: 1,
          paddingTop: 15,
          paddingBottom: 15,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            body.style.height = 'auto'; 
          }
        });
      } else {
        item.classList.remove('active');
        gsap.to(body, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(body, { display: 'none' });
          }
        });
      }
    });
  });

const showcaseSection = document.querySelector('.showcase-wrapper');
const megamenus = document.querySelectorAll('.megamenu');

function updateMegamenuBackground() {
  const scrollY = window.scrollY;
  const triggerY = showcaseSection.offsetTop + showcaseSection.offsetHeight;

  if (scrollY > triggerY) {
    megamenus.forEach(menu => menu.classList.add('dark-bg'));
  } else {
    megamenus.forEach(menu => menu.classList.remove('dark-bg'));
  }
}

window.addEventListener('scroll', updateMegamenuBackground);
window.addEventListener('load', updateMegamenuBackground);

  
  const images = document.querySelectorAll('.parallax-img');
if (window.innerWidth >= 768) {
    const images = document.querySelectorAll('.parallax-img');
    new simpleParallax(images, {
      scale: 1.3,
      orientation: 'up-right',
      delay: 0.2,
      transition: 'cubic-bezier(0,0,0,1)'
    });
  }
  


  document.querySelectorAll('.has-megamenu').forEach(item => {
    const megamenu = item.querySelector('.megamenu');
    megamenu.addEventListener('wheel', (e) => {
  e.preventDefault();
}, { passive: false });


    gsap.set(megamenu, {
      autoAlpha: 0,
      y: -20,
      display: 'none',
      pointerEvents: 'none'
    });

    let showTween, hideTween;

    item.addEventListener('mouseenter', () => {
       
      if (hideTween) hideTween.kill();

      gsap.set(megamenu, { display: 'block', pointerEvents: 'auto' });
      showTween = gsap.to(megamenu, {
        duration: 0.4,
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', () => {

      if (showTween) showTween.kill();

      hideTween = gsap.to(megamenu, {
        duration: 0.3,
        autoAlpha: 0,
        y: -20,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(megamenu, { display: 'none', pointerEvents: 'none' });
        }
      });
    });
  });





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

  
/*   window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
  
    // Меняем фиксированное меню
    if (currentY > 300) {
      stickyBar.classList.add("fixed");
    } else {
      stickyBar.classList.remove("fixed");
    }
  
    // Добавляем класс .at-top на body, если наверху
    const bodyMain = document.querySelector('body.main');
    if (currentY < 50) {
      bodyMain.classList.add("at-top");
    } else {
      bodyMain.classList.remove("at-top");
    }
  
    lastScrollY = currentY;
  }); */

/*     const video = document.getElementById('myVideo');
    const playBtn = document.querySelector('.video-play');
    const playIcon = playBtn.querySelector('.fa-play');
    const pauseIcon = playBtn.querySelector('.fa-pause');

    playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.classList.add('hide');
        pauseIcon.classList.remove('hide');
    } else {
        video.pause();
        playIcon.classList.remove('hide');
        pauseIcon.classList.add('hide');
    }
    }); */

    document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute('href');
      
        if (!url || url.startsWith('#') || url.startsWith('http')) return;
      
        link.addEventListener('click', e => {
          e.preventDefault();
          gsap.set('#page-transition', { display: 'block', pointerEvents: 'auto' });
      
          gsap.to('#page-transition', {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              window.location.href = url;
            }
          });
        });
      });

    /*var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 10
        });

        // element argument can be a selector string
        //   for an individual element
        var msnry = new Masonry( '.grid', {
         gutter: 5
        }); */

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




});