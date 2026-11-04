document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert("Thanks " + name + "! Message anuppitom.");
  this.reset();
});