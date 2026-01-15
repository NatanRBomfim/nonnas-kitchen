class Carousel {
  constructor(selector) {
    this.carousel = document.querySelector(selector);
    this.wrapper = this.carousel.querySelector("[data-carousel-wrapper]");
    this.prev = this.carousel.querySelector("[data-carousel-prev]");
    this.next = this.carousel.querySelector("[data-carousel-next]");
    this.indicatorsContainer = document.getElementById(
      this.carousel.getAttribute("data-carousel-indicator")
    );
    this.items = this.wrapper.querySelectorAll("[data-carousel-items]");
    this.currentIndex = 0;
  }

  init() {
    console.log(this);
    this.createIndicators();
    this.addListeners();
    this.updateCarousel();
  }
  createIndicators() {
    this.items.forEach((_items, index) => {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");

      indicator.dataset.index = index;
      this.indicatorsContainer.appendChild(indicator);
    });

    this.indicators = this.indicatorsContainer.querySelectorAll(".indicator");
  }

  addListeners() {
    this.prev.addEventListener("click", () => {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.updateCarousel();
    });

    this.next.addEventListener("click", () => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.updateCarousel();
    });

    this.indicators.forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        this.goToSlide(parseInt(e.target.getAttribute("data-index")));
      });
    });
  }

  updateCarousel() {
    this.wrapper.style.setProperty("--currentIndex", this.currentIndex);

    this.indicatorsContainer
      .querySelector(".active")
      ?.classList.remove("active");

    this.indicatorsContainer
      .querySelector(`[data-index='${this.currentIndex}']`)
      .classList.add("active");
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }
}
