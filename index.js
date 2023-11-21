document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var banner = document.getElementById("cookie-consent-banner");
  var acceptButton = document.getElementById("accept-cookies");

  var hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

  if (!hasAcceptedCookies) {
      banner.style.display = "block";
  }

  acceptButton.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      banner.style.display = "none";
  });
});

