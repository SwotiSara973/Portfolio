const accordionItems = document.querySelectorAll(".accordion-item");
const imageElement = document.querySelector(".image img");

accordionItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove active from previously active item
    document.querySelector(".accordion-item.active")?.classList.remove("active");

    // Add active to clicked item
    item.classList.add("active");

    // Change image
    const imagePath = item.dataset.image;
    imageElement.src = imagePath;
  });
});
