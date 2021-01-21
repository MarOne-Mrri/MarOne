const sidebar = document.querySelector("#sidebar");

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
    if (sidebar.classList.contains("hide")) {
        sidebar.classList.remove("hide");
        sidebar.classList.add("right-0");
    }
})

const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
    if (!sidebar.classList.contains("hide")) {
        sidebar.classList.add("hide");
        sidebar.classList.remove("right-0");
    }
})