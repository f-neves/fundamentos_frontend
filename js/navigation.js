// navigation.js
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", (event) => {
    const target = event.target.getAttribute("href");
    console.log(`Navegando para: ${target}`);
  });
});
