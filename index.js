const products = [
  {
    img: "/images/ankaragown.webp",
    title: "Ankara Gown",
    desc: "A simple yet elegant green Ankara gown with natural fit.",
  },
  {
    img: "/images/sex.webp",
    title: "Bold Slit Beauty",
    desc: "A daring and elegant high-slit design with cultural flair.",
  },
  {
    img: "/images/sexy.webp",
    title: "One-Shoulder Glam",
    desc: "Stand out with asymmetric shoulder elegance and curves.",
  },
  {
    img: "/images/manequin.webp",
    title: "Mannequin Masterpiece",
    desc: "A designer cut for high-end fashion lovers.",
  },
];

let currentIndex = 0;

function openPopup(index) {
  currentIndex = index;
  const popup = document.getElementById("popup");
  const item = products[currentIndex];
  document.getElementById("popup-img").src = item.img;
  document.getElementById("popup-title").innerText = item.title;
  document.getElementById("popup-desc").innerText = item.desc;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % products.length;
  openPopup(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  openPopup(currentIndex);
}

document.getElementById("popup").addEventListener("click", function(e) {
  if (e.target.id === "popup") {
    closePopup();
  }
});



  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const menuBtn = document.getElementById("menu");
  const navList = document.querySelector(".list");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");

    // Change icon from bars to times (hamburger to X)
    if (menuBtn.classList.contains("fa-bars")) {
      menuBtn.classList.remove("fa-bars");
      menuBtn.classList.add("fa-times");
    } else {
      menuBtn.classList.remove("fa-times");
      menuBtn.classList.add("fa-bars");
    }
  });

 
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.classList.add("fade-out");

      // Remove from view after the fade-out completes (1s)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }, 2000);
  });



  document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();  
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  });

function autoExpand(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

window.addEventListener("load", function () {
    // Simulate preloader delay
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";

    // Re-initialize AOS AFTER preloader is gone
    AOS.refresh();  });