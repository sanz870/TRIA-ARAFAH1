// ==================================================
// TRIA ARAFAH
// JAVASCRIPT
// ==================================================


// ==================================================
// KEMBALI KE HOME SAAT REFRESH
// ==================================================

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {

    // Hapus #gallery, #about, #contact, dll dari URL
    if (window.location.hash) {

        history.replaceState(
            null,
            "",
            window.location.pathname
        );

    }

    // Kembali ke paling atas
    window.scrollTo(0, 0);

});


// ==================================================
// MENU MOBILE
// ==================================================

const menuButton = document.querySelector(".menu-button");

const mobileMenu = document.createElement("nav");

mobileMenu.className = "mobile-menu";

mobileMenu.innerHTML = `
    <a href="#home">Home</a>
    <a href="#about">Tentang</a>
    <a href="#gallery">Galeri</a>
    <a href="#contact">Kontak</a>
`;

document.body.appendChild(mobileMenu);


// ==================================================
// BUKA / TUTUP MENU
// ==================================================

if (menuButton) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });

}


// ==================================================
// KLIK LINK MENU
// ==================================================

const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    });

});


// ==================================================
// KLIK DI LUAR MENU
// ==================================================

document.addEventListener("click", function (event) {

    if (
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        mobileMenu.classList.remove("active");

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    }

});


// ==================================================
// MUSIK
// ==================================================

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");


if (music && musicButton) {


    // ==================================================
    // PLAY / PAUSE
    // ==================================================

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            const playPromise = music.play();

            if (playPromise !== undefined) {

                playPromise
                    .then(function () {

                        musicButton.textContent = "Ⅱ";

                        musicButton.classList.add("playing");

                    })
                    .catch(function (error) {

                        console.log(
                            "Musik gagal diputar:",
                            error
                        );

                    });

            }

        } else {

            music.pause();

            musicButton.textContent = "♫";

            musicButton.classList.remove("playing");

        }

    });


    // ==================================================
    // MUSIK MULAI
    // ==================================================

    music.addEventListener("play", function () {

        musicButton.textContent = "Ⅱ";

        musicButton.classList.add("playing");

    });


    // ==================================================
    // MUSIK DI-PAUSE
    // ==================================================

    music.addEventListener("pause", function () {

        musicButton.textContent = "♫";

        musicButton.classList.remove("playing");

    });


    // ==================================================
    // MUSIK SELESAI
    // ==================================================

    music.addEventListener("ended", function () {

        musicButton.textContent = "♫";

        musicButton.classList.remove("playing");

    });


    // ==================================================
    // ERROR AUDIO
    // ==================================================

    music.addEventListener("error", function () {

        console.log(
            "ERROR: File musik tidak dapat dimuat."
        );

        console.log(
            "Periksa nama dan lokasi file MP3."
        );

    });

}