/* =========================================
   OPENING CURTAIN
   ========================================= */

function openCurtain() {

    const curtain =
        document.getElementById("openingCurtain");

    curtain.classList.add("open");


    setTimeout(function () {

        curtain.classList.add("hide");

    }, 2000);

}



/* =========================================
   GANPATI COUNTDOWN
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Ganpati स्थापना
        // 14 September 2026 - 10:00 AM

        const ganpatiDate =
            new Date(
                2026,
                8,
                14,
                10,
                0,
                0
            ).getTime();


        function updateCountdown() {


            const now =
                new Date().getTime();


            const difference =
                ganpatiDate - now;


            if (difference <= 0) {

                document.getElementById("days")
                    .textContent = "00";

                document.getElementById("hours")
                    .textContent = "00";

                document.getElementById("minutes")
                    .textContent = "00";

                document.getElementById("seconds")
                    .textContent = "00";

                return;
            }


            const days =
                Math.floor(
                    difference /
                    (1000 * 60 * 60 * 24)
                );


            const hours =
                Math.floor(
                    (difference /
                    (1000 * 60 * 60)) % 24
                );


            const minutes =
                Math.floor(
                    (difference /
                    (1000 * 60)) % 60
                );


            const seconds =
                Math.floor(
                    (difference / 1000) % 60
                );


            document.getElementById("days")
                .textContent =
                String(days)
                    .padStart(2, "0");


            document.getElementById("hours")
                .textContent =
                String(hours)
                    .padStart(2, "0");


            document.getElementById("minutes")
                .textContent =
                String(minutes)
                    .padStart(2, "0");


            document.getElementById("seconds")
                .textContent =
                String(seconds)
                    .padStart(2, "0");

        }


        updateCountdown();

        setInterval(
            updateCountdown,
            1000
        );

    }
);



/* =========================================
   MOBILE MENU
   ========================================= */

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}



/* =========================================
   MORE GALLERY PHOTOS
   ========================================= */

function showMorePhotos() {

    const extraPhotos =
        document.querySelector(
            ".extra-photos"
        );


    const button =
        document.getElementById(
            "morePhotosBtn"
        );


    if (extraPhotos) {

        extraPhotos.classList.add("show");

    }


    if (button) {

        button.style.display = "none";

    }

}



/* =========================================
   WHATSAPP SHARE
   ========================================= */

function shareInvitation() {

    const message =
        "🙏 गणपती बाप्पा मोरया! 🌺\n\n" +
        "आमच्या घरी गणपती बाप्पांचे आगमन होत आहे.\n" +
        "आपण सहकुटुंब सहपरिवार बाप्पांच्या दर्शनासाठी अवश्य यावे. 🙏\n\n" +
        "गणपती बाप्पा मोरया! ❤️";


    const whatsappURL =
        "https://wa.me/?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}



/* =========================================
   BACK TO TOP
   ========================================= */

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =========================================
   SHOW / HIDE TOP BUTTON
   ========================================= */

window.addEventListener(
    "scroll",
    function () {

        const topButton =
            document.getElementById("topBtn");


        if (window.scrollY > 300) {

            topButton.style.display =
                "block";

        } else {

            topButton.style.display =
                "none";

        }

    }
);