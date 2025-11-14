const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerBtn = document.querySelector("#menu-open");

const news = [
    {
        id: "1",
        img: "./img /"
        title: "Föredrag 22/10",
        date: "16 Oktober 2025"
    },
    {
        id: "2",
        img: "",
        title: "Åk 9 besöksdag",
        date: "5 Oktober 2025"
    },
    {
        id: "3"
        img: "",
        title: "föreldramöte åk 1 9/9",
        date: "2 september 2025"
    },
]


const closeMenu = () => {
    mobileNav.classList.add("hidden");
    nav.classList.add("nav-closed");
    hamburgerBtn.classList.remove("hidden");
}
const openMenu = () => {
    hamburgerBtn.classList.add("hidden");
    nav.classList.remove("nav-closed");
    mobileNav.classList.remove("hidden");
};

const menuCloseBtn = document
.querySelector("#menu-close")
.addEventListener("click", closeMenu);

const menuOpenBtn = document
.querySelector("#menu-open")
.addEventListener("click", openMenu);

const renderNews = () => {
    const container = document.querySelector(".news-grid");

    news.forEach = ((news) => {
        const card = document.createElement("div");
        card.className = "news-card";

        card.innerHTML = `
            <img src="${news.img} alt="${new.title}" class="news-image" />
            <h3 class="news-title">${news.title}</h3>
            <p class="news-date">${news.date}</p>
            `/

            container.appendChild(card);
    });
};

renderNews();