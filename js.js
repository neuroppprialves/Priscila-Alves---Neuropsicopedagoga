function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

document.addEventListener("DOMContentLoaded", function () {
  const animatedTexts = document.querySelectorAll(".animated-text");

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.95; // Define o ponto de ativação

    animatedTexts.forEach((text) => {
      const textTop = text.getBoundingClientRect().top;

      if (textTop < triggerBottom) {
        text.classList.add("visible");
      }
    });
  }

  // Executa ao carregar a página e ao rolar
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    let startPosition = window.scrollY;
                    let targetPosition = targetElement.getBoundingClientRect().top + startPosition;
                    let distance = targetPosition - startPosition;
                    let duration = 1000; // Tempo da animação em milissegundos
                    let startTime = null;
                    
                    function animation(currentTime) {
                        if (startTime === null) startTime = currentTime;
                        let timeElapsed = currentTime - startTime;
                        let run = ease(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }
                    
                    function ease(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }
                    
                    requestAnimationFrame(animation);
                }
            });
        });