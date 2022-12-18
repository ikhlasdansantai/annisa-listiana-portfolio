// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["College Student", "Mobile Photographer", "Content Writer", "Editor", "Junior Graphic Designer"],
  loop: true,
  typeSpeed: 60,
  backSpeed: 45,
  backDelay: 600,
});
// <!-- typed js effect ends -->

// todo dropdown
const dropdownIcons = document.getElementsByClassName("accordion-menu");
// const softwareToolImages = document.getElementsByClassName("software-skill-wrapper")[0];

for (let i = 0; i < dropdownIcons.length; i++) {
  const dropdownIcon = dropdownIcons[i];

  dropdownIcon.addEventListener("click", () => {
    dropdownIcon.classList.toggle("active");
    if (dropdownIcon.classList.contains("active") === true) {
      dropdownIcon.nextElementSibling.classList.add("show");
    } else {
      dropdownIcon.nextElementSibling.classList.remove("show");
    }
  });
}

const closeIcon = document.getElementsByClassName("close-icon")[0];
const navItemsMobile = document.getElementsByClassName("nav-items")[0];
const friesMenu = document.getElementsByClassName("fries-menu")[0];

friesMenu.addEventListener("click", () => {
  // alert("OK!");
  navItemsMobile.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  navItemsMobile.classList.remove("show");
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
