let btns = document.querySelectorAll(".btn");
let mobileMenu = document.getElementById("bar");
let navMenu = document.querySelector("nav ul");

// Service filter buttons functionality
btns.forEach(function (buttons) {
    buttons.addEventListener("click", function () {
        console.log(buttons.attributes.id.value);
        if (buttons.attributes.id.value == "ui") {
            document.getElementById("uiDesign").style.display = "block";
            document.getElementById("webDesign").style.display = "none";
            document.getElementById("android").style.display = "none";
        }
        if (buttons.attributes.id.value == "web") {
            document.getElementById("uiDesign").style.display = "none";
            document.getElementById("webDesign").style.display = "block";
            document.getElementById("android").style.display = "none";
        }
        if (buttons.attributes.id.value == "mobile") {
            document.getElementById("uiDesign").style.display = "none";
            document.getElementById("webDesign").style.display = "none";
            document.getElementById("android").style.display = "block";
        }
        if (buttons.attributes.id.value == "all") {
            document.getElementById("uiDesign").style.display = "block";
            document.getElementById("webDesign").style.display = "block";
            document.getElementById("android").style.display = "block";
        }
    })
})

// CV Download functionality
function downloadBtn() {
    const link = document.createElement('a');
    link.href = '/Amit-Resume-21.pdf';
    link.download = 'Amit_Das_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("CV Downloaded Successfully!");
}

// Mobile menu toggle functionality
mobileMenu.addEventListener("click", function () {
    navMenu.classList.toggle("mobile-menu");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function () {
        if (window.innerWidth <= 760) {
            navMenu.classList.remove("mobile-menu");
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-to-top functionality
window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 300) {
        if (!document.getElementById('scrollToTop')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.id = 'scrollToTop';
            scrollBtn.innerHTML = '↑';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: aqua;
                color: black;
                border: none;
                font-size: 20px;
                cursor: pointer;
                z-index: 1000;
                transition: opacity 0.3s;
            `;
            scrollBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.getElementById('scrollToTop');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Contact form - Let Netlify handle it naturally (no JavaScript interference)
// The form will submit directly to Netlify with data-netlify="true"