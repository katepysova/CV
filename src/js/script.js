const tabLinks = document.querySelectorAll(".nav__btn");
const tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach((link) => {
  link.addEventListener("click", function () {
    tabLinks.forEach((l) => l.classList.remove("active"));
    tabContent.forEach((t) => t.classList.add("hidden"));
    this.classList.add("active");
    const name = this.getAttribute("data-name");
    const target = document.getElementById(name);
    target.classList.remove("hidden");
  });
});

document.getElementById("default-open").click();
