// Cargar los includes al inicio
document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll("[data-include]");
    includeElements.forEach(el => {
        const file = el.getAttribute("data-include");
        fetch(file)
            .then(response => response.text())
            .then(data => el.innerHTML = data);
    });
});

// Función para abrir/cerrar menú móvil
function toggleMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const btn = document.getElementById("menuBtn");

    mobileNav.classList.toggle('open');
    overlay.classList.toggle('show');

    if (mobileNav.classList.contains('open')) {
        btn.classList.add("hidden");
    } else {
        btn.classList.remove("hidden");
    }
}


function toggleSubmenu(btn) {
    const submenu = btn.nextElementSibling; // busca el <ul> que está justo después del botón
    submenu.classList.toggle('show');
}
