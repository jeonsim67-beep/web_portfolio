AOS.init({
    duration: 1000,
    once: false
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

/* 메뉴에 마우스를 올리면 커서 확대 */
const menuItems = document.querySelectorAll(
    ".logo, .logo img, .menu a, .contact_btn, .contact_button"
);
menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = +counter.dataset.target;

                let current = 0;

                const increment = target / 80;

                const update = () => {

                    current += increment;

                    if (current < target) {

                        counter.innerText = Math.floor(current);

                        requestAnimationFrame(update);

                    } else {

                        if (target >= 1000) {

                            counter.innerText = target + "+";

                        } else {

                            counter.innerText = target;

                        }

                    }

                }

                update();

                observer.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => observer.observe(counter));
});