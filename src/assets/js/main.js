document.addEventListener("DOMContentLoaded", function () {
  // Scroll-to-Top Button Logic
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add("block");
      scrollToTopButton.classList.remove("hidden");
    } else {
      scrollToTopButton.classList.add("hidden");
      scrollToTopButton.classList.remove("block");
    }
  });

  // Scroll-to-Content Button Logic
  const scrollLink = document.querySelector('a[href="#content"]');
  if (scrollLink) {
    scrollLink.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector("#content-wrapper");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Toggle Subinterests Logic
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const categoryId = card.getAttribute("data-category-id");
      const categoryElement = document.getElementById(categoryId);
      if (categoryElement) {
        categoryElement.classList.toggle("hidden");
      }
    });

    // Add keyboard navigation support
    card.addEventListener("keypress", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        const categoryId = card.getAttribute("data-category-id");
        const categoryElement = document.getElementById(categoryId);
        if (categoryElement) {
          categoryElement.classList.toggle("hidden");
        }
      }
    });
  });

  // Helper function to decode Base64
  function decodeBase64(encodedString) {
    try {
      return atob(encodedString);
    } catch (e) {
      console.error("Failed to decode Base64 string:", encodedString, e);
      return null;
    }
  }

  // Populate obfuscated email and phone numbers
  const obfuscatedElements = document.querySelectorAll(".obfuscated-value");
  obfuscatedElements.forEach(element => {
    const encodedEmail = element.dataset.email;
    const encodedPhone = element.dataset.phone;

    if (encodedEmail) {
      const email = decodeBase64(encodedEmail);
      if (email) {
        element.innerHTML = `<a href="mailto:${email}" class="text-inherit hover:text-pink-400">${email}</a>`;
      }
    } else if (encodedPhone) {
      const phone = decodeBase64(encodedPhone);
      if (phone) {
        element.innerHTML = `<a href="tel:${phone}" class="text-inherit hover:text-pink-400">${phone}</a>`;
      }
    }
  });
});
