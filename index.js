// 1. Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  console.log("Modo cambiado:", document.body.classList.contains("dark") ? "Oscuro" : "Claro");
});

// 2. Contador de Likes
let count = 0;
const likeBtn = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCounter");

likeBtn.addEventListener("click", () => {
  count++;
  likeCounter.textContent = count;
  console.log("Likes:", count);
});

// 3. Buscador de artículos
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearch");
    const tarjetas = document.querySelectorAll(".tarjeta");

    searchInput.addEventListener("keyup", () => {
      let filter = searchInput.value.toLowerCase();
      let hayFiltro = filter.length > 0;

      tarjetas.forEach(t => {
        let text = t.innerText.toLowerCase();
        t.style.display = text.includes(filter) ? "" : "none";
      });

      clearBtn.style.display = hayFiltro ? "inline-block" : "none";
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      tarjetas.forEach(t => t.style.display = "");
      clearBtn.style.display = "none";
    });


// 4. Galería con hover
const galeria = document.getElementById("seeAll");
const galeriaImg = document.getElementById("galeriaImg");

let imagenes = ["modelo.jpeg", "sombreros.jpeg","modas.jpeg", "moda.jpeg", "moda1.jpeg","moda2.jpeg"]; 
let index = 0;
let intervalo;

galeria.addEventListener("mouseover", () => {
  intervalo = setInterval(() => {
    index = (index + 1) % imagenes.length;
    galeriaImg.src = imagenes[index];
  }, 2000);
});

galeria.addEventListener("mouseout", () => {
  clearInterval(intervalo);
});