document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      if (feedback) {
        feedback.textContent = "Please check the highlighted fields.";
        feedback.className = "small text-danger";
      }
      return;
    }

    form.classList.add("was-validated");
    if (feedback) {
      feedback.textContent = "Message submitted successfully!";
      feedback.className = "small text-success fw-semibold";
    }
    form.reset();
    form.classList.remove("was-validated");
  });
});
