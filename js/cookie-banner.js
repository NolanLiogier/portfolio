document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookie");
    const declineButton = document.getElementById("decline-cookie");

    function executeScripts() {
        console.log("Cookies acceptés, scripts exécutés !");
    }

    // Vérifie si les cookies sont déjà acceptés ou refusés
    const cookieDecision = localStorage.getItem('cookiesDecision');

    if (cookieDecision === 'accepted') {
        cookieBanner.style.display = 'none';
        executeScripts();
    } else if (cookieDecision === 'declined') {
        cookieBanner.style.display = 'none';
    }

    // Action pour le bouton Accepter
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesDecision', 'accepted');
        cookieBanner.style.display = "none";
        executeScripts();
    });

    // Action pour le bouton Refuser
    declineButton.addEventListener('click', function() {
        localStorage.setItem('cookiesDecision', 'declined');
        cookieBanner.style.display = "none";
    });
});
