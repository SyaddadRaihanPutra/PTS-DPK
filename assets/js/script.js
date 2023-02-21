const btn_to_top = document.getElementById("back-to-top");

const displayButton = () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn_to_top.style.display = "block";
        } else {
            btn_to_top.style.display = "none";
        }
    });
};

const scrollToTop = () => {
    btn_to_top.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
};


displayButton();
scrollToTop();

