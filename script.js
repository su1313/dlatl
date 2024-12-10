document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".text-wrapper, .text-wrapper-2, .text-wrapper-3, .text-wrapper-4, .text-wrapper-5, .text-wrapper-6, .text-wrapper-7, .text-wrapper-8, .text-wrapper-9, .text-wrapper-10, .text-wrapper-11, .text-wrapper-12, .text-wrapper-13, .text-wrapper-14, .text-wrapper-15, .text-wrapper-16, .text-wrapper-17, .text-wrapper-18, .text-wrapper-19, .text-wrapper-20, .fade-in-text"
  );

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(function (element) {
    element.classList.add("hidden");
    observer.observe(element);
  });
});
