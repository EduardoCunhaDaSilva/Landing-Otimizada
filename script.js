const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});




document.querySelectorAll(".faq-question").forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;

    if (resposta.classList.contains("open")) {
      resposta.style.maxHeight = null;
      resposta.classList.remove("open");
    } else {
      resposta.style.maxHeight = resposta.scrollHeight + "px";
      resposta.classList.add("open");
    }
  });
});


const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,     // quantas imagens aparecem ao mesmo tempo
  spaceBetween: 20,     // espaço entre elas
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1 },   // celular
    768: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 4 },  // desktop
  }
});