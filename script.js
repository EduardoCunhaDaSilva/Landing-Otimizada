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