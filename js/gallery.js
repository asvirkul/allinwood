
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


        var msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
         itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
         
        }); 

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

        document.querySelectorAll('.has-megamenu').forEach(item => {
    const megamenu = item.querySelector('.megamenu');

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

    document.querySelectorAll('.has-megamenu').forEach(item => {
    const megamenu = item.querySelector('.megamenu');

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
  

});