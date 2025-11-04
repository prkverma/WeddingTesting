const slideNavigator= name =>{
    let slides=document.querySelectorAll('.bg-slide');
    slides.forEach(slide=>{
        slide.classList.remove('active');
        if(slide.classList.contains(name)){
            slide.classList.add('active');
        }
    });
};

window.addEventListener('load', ()=>{
    const slideBtnList= document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn=>{
        btn.addEventListener('click', function(e){
            e.preventDefault();
            slideBtnList.forEach(el =>{
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});

const sectionNavigator= name =>{
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if(section.classList.contains(name)){
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
};

window.addEventListener('load', () => {
    const navList= document.querySelectorAll('.nav-btn');
    navList.forEach(nav=>{
        nav.addEventListener('click', function(e){
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});

const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
}

const initNavigation = () => {
    const navList=document.querySelectorAll('.nav-btn');
    navList.forEach(el=>{
        el.classList.remove('active');
        if(el.getAttribute('data-target')==='about'){
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
}

const toggleMenu=()=>{
    const menu=document.querySelector('.menu');
    const navMobile= document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
};


// FOR SHARE ICON

document.getElementById('shareIcon').addEventListener('click', function(event) {
    var icons = document.getElementById('shareIcons');
    icons.classList.toggle('show');
    event.stopPropagation(); // Prevent event from bubbling up to document
});

document.addEventListener('click', function(event) {
    var icons = document.getElementById('shareIcons');
    if (icons.classList.contains('show')) {
        icons.classList.remove('show');
    }
});

document.getElementById('shareIcons').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to document
});








document.querySelectorAll('.form-control').forEach(input => {
    const label = input.nextElementSibling;
    
    input.addEventListener('focus', () => {
        label.style.top = '0';
        label.style.transform = 'translateY(-50%) scale(0.9)';
        label.style.backgroundColor = '#fff';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            if (input.tagName === 'TEXTAREA') {
                label.style.top = '20px';
            } else {
                label.style.top = '50%';
            }
            label.style.transform = 'translateY(-50%)';
            label.style.backgroundColor = 'transparent';
        }
    });
});


  document.getElementById("discoverBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const moreText = document.querySelector(".more-text");
    moreText.classList.toggle("show");

    // Change button text dynamically
    this.textContent = moreText.classList.contains("show") ? "Show less" : "Discover more";
  });




    // 🧮 Set how many images you have
  const totalImages = 20;

  // 🪄 Generate image paths automatically
  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(`./images/portfolio/portfolio-${i}.jpg`);
  }

   // Select the gallery container
  const gallery = document.getElementById("ImageGallery");

  // Loop through each image and create the HTML dynamically
  images.forEach((src, index) => {
    const html = `
      <div class="col-lg-4 col-md-6 portfolio-item filter-ceremony">
        <div class="portfolio-img">
          <img class="img-fluid" src="${src}" loading="lazy" alt="">
        </div>
        <div class="portfolio-info">
          <h4>Ceremony ${index + 1}</h4>
          <p>Ceremony</p>
          <a href="${src}" 
             data-gallery="portfolioGallery"
             class="portfolio-lightbox preview-link"
             title="Ceremony ${index + 1}">
             <ion-icon name="add-outline"></ion-icon>
          </a>
          <a href="#" class="details-link" title="More Details">
             <ion-icon name="link-outline"></ion-icon>
          </a>
        </div>
      </div>
    `;
    gallery.insertAdjacentHTML("beforeend", html);
  });

