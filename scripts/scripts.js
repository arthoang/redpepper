const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionEl = document.querySelector(".section");
const navOpenClName = "nav-open";

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle(navOpenClName);
    //for contact page
    (sectionEl!=null) ? sectionEl.classList.toggle(navOpenClName) : null;
});