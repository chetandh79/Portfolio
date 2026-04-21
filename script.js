AOS.init();

// Typing effect
const text = ["Java Developer", "Student", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];

    if (isDeleting) {
        document.getElementById("typing").textContent = current.substring(0, j--);
    } else {
        document.getElementById("typing").textContent = current.substring(0, j++);
    }

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();