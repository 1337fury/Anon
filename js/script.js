//overlay variable
const mainOverlay = document.querySelector("[data-overlay]");

// modal variable
const modal = document.querySelector("[data-model]");
const modalOverlay = document.querySelector("[data-modal-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

// toast variable
const toast = document.querySelector("[data-notification]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

//mobile menu variable
const dataCatgCloseBtns = document.querySelectorAll("[data-catg-close-btn]");
const menuIcon = document.querySelector("[data-mobile-menu-icon]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelector("[data-mobile-menu-close-btn]");

// Aside variables
const aside = document.querySelector("[data-desktop-aside]");
const asideCloseBtn = document.querySelector("[data-aside-close-btn]");
const asideIcon = document.querySelector("[data-aside-icon]");


const categoryShowIcons = document.querySelectorAll("[data-show]");
const categoryHiddenIcons =  document.querySelectorAll("[data-hidden]");
const categoryLists = document.querySelectorAll("[data-category-list]");

// modal functions
modalCloseBtn.addEventListener("click", () => modal.classList.add("close"));
modalOverlay.addEventListener("click", () => modal.classList.add("close"));

// toast functions
toastCloseBtn.addEventListener("click", () => toast.classList.add("close"));

//mobile menu functions
dataCatgCloseBtns.forEach(btn => {
    btn.onclick = function () {
        let activeBtn = this;
        this.parentElement.parentElement.parentElement.classList.toggle("active");
        dataCatgCloseBtns.forEach(ele => {
            if (ele != activeBtn)
                ele.parentElement.parentElement.parentElement.classList.remove("active");
        })
    };
});

menuIcon.addEventListener("click", () => mobileMenu.classList.add("active"));
menuIcon.addEventListener("click", () => mainOverlay.classList.add("active"));
mobileMenuCloseBtn.addEventListener("click", () => mobileMenu.classList.remove("active"));
mobileMenuCloseBtn.addEventListener("click", () => mainOverlay.classList.remove("active"));
mainOverlay.addEventListener("click", () => mobileMenuCloseBtn.click());

//Aside functions 
categoryShowIcons.forEach((btn, inx) => {
    btn.onclick = function () {
        let activeBtn = this;
        categoryLists[inx].classList.toggle("active");
        categoryShowIcons.forEach((ele, index) => {
            if (ele != activeBtn)
                categoryLists[index].classList.remove("active");
        })
    };
});

categoryHiddenIcons.forEach((ele, inx) => {
        ele.onclick = () => {
            categoryLists[inx].classList.remove("active");
        }
});


asideIcon.addEventListener("click", () => aside.classList.add("active"));asideIcon.addEventListener("click", () => mainOverlay.classList.add("active"));asideCloseBtn.addEventListener("click", () => mainOverlay.classList.remove("active"));
asideCloseBtn.addEventListener("click", () => aside.classList.remove("active"));
mainOverlay.addEventListener("click", () => aside.classList.remove("active"));

