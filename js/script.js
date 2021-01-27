document.querySelector(".hamburger-menu").addEventListener("click", () => {
 document.querySelector(".container").classList.toggle("change");
}); 

// typing text animation script
var typed = new Typed(".typing", {
 strings: ["Problem Solver", "Developer", "Cooperator", "Designer", "Self-starter","Risk-taker"],
 typeSpeed: 100,
 backSpeed: 60,
 loop: true
});
