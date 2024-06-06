/* buttons read more */
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const moreText = this.previousElementSibling.querySelector(".more-text");
      const isHidden =
        moreText.style.display === "none" || moreText.style.display === "";

      if (isHidden) {
        moreText.style.display = "inline";
        this.textContent = "Leia menos";
      } else {
        moreText.style.display = "none";
        this.textContent = "Leia mais";
      }
    });
  });
});

/* acordeon */
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      questions.forEach((q) => q.classList.remove("active"));

      this.classList.toggle("active");

      const answers = document.querySelectorAll(".faq-answer");
      answers.forEach((answer) => (answer.style.display = "none"));

      const answerId = this.id.replace("q", "a");
      const answer = document.getElementById(answerId);
      if (this.classList.contains("active")) {
        answer.style.display = "block";
      }
    });
  });
});
