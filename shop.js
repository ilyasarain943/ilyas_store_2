document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.close-btn').style.display = 'none';
    document.querySelector('.open-btn').style.display = 'inline';
});

/* =========================
   STICKY HEADER ON SCROLL
========================= */
const mainMenu = document.querySelector('.main-head');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainMenu.classList.add('slidedown'); // Add sticky class
    } else {
        mainMenu.classList.remove('slidedown'); // Remove sticky class
    }
});

const header = document.querySelector('.main-head');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('slidedown');
    } else {
        header.classList.remove('slidedown');
    }
});

/* =========================
   MOBILE MENU TOGGLE
========================= */
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navList = document.querySelector('.nav-list');

openBtn.addEventListener('click', () => {
    navList.classList.add('show');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
});

closeBtn.addEventListener('click', () => {
    navList.classList.remove('show');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline';
});



/* =========================
   OPTIONAL: Close menu when clicking outside
========================= */
document.addEventListener('click', (e) => {
    if (
        navList.classList.contains('show') && 
        !navList.contains(e.target) &&
        e.target !== openBtn
    ) {
        navList.classList.remove('show');
        closeBtn.style.display = 'none';
        openBtn.style.display = 'inline';
    }
});

/* =========================
 ===== Cards SECTION ===== 
========================= 
  BEFORE MODIFICATION
document.addEventListener("click", function (e) {
  if (e.target.closest(".buy")) {
    console.log("Buy button clicked");
  }
  $('.bottom').addClass("clicked");
});

document.addEventListener("mouseup", function (e) {
  if (!e.target.closest(".bottom")) {
    return;
  }
  $('.bottom').removeClass("clicked");
});

AFTER MODIFICATION*/
document.addEventListener("click", function (e) {
  const buyBtn = e.target.closest(".buy");
  if (buyBtn) {
    buyBtn.closest(".bottom").classList.toggle("clicked");
  }
});



/* =========================
    ===== Products Data =====   
========================= */

/* ===== watchs ===== */

const watches = [
  {
    title: "True Square Thinline",
    price: "PKR 24,900",
    imageId: "image_pro1",
    description: "Rado True Square Thinline blends Swiss quartz precision with modern elegance.",

  },
  
  {
    title: "True Square Automatic",
    price: "PKR 41,000",
    imageId: "image_pro2",
    description: "Open-heart automatic R734 movement with 80-hour power reserve.",
  },
  {
    title: "Diamonds Edition",
    price: "PKR 41,000",
    imageId: "image_pro3",
    description: "Limited edition ceramic watch with diamond markers.",
  }

  ,{
    title: "Diamonds Edition",
    price: "PKR 41,000",
    imageId: "image_pro3",
    description: "Limited edition ceramic watch with diamond markers.",
  }
];



/* ================================
===== Card generator function =====   
=================================== */
function createCard(product) {
  return `
  <div class="wrapper">
    <div class="container">
      <div id="${product.imageId}" class="top"></div>
      <div class="bottom">
        <div class="left">
          <div class="details">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
          </div>
          <a href="${product.whatsapp}" target="_blank">
            <i id="whatsapp-icon" class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="inside">
      <div class="icon">
        <i class="fa-solid fa-circle-exclamation"></i>
      </div>
      <div class="contents">
        <p>${product.description}</p>
      </div>
    </div>
  </div>
  `;
}
/* =========================
    ===== Render Cards =====   
========================= */
const watchContainer = document.getElementById("all_cards");

watches.forEach(product => {
  watchContainer.innerHTML += createCard(product);
});


/*=========================================
// Get all buy buttons
=========================================*/
document.querySelectorAll('#whatsapp-icon').forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link
    const productCard = btn.closest('.wrapper'); // get the card
    const title = productCard.querySelector('.details h3').innerText;
    const price = productCard.querySelector('.details p').innerText;

    // WhatsApp URL with auto message
    const phone = "923418920911"; // your WhatsApp number
    const message = encodeURIComponent(`Hello! I want ${title} for ${price}`);
    const url = `https://wa.me/${phone}?text=${message}`;

    // Open WhatsApp
    window.open(url, '_blank');
  });
});
