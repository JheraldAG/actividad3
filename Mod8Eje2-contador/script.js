/* ===============================================
   CONTADOR INTERACTIVO
   =============================================== */

// Selección de elementos
const contadorElement = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnResetear = document.getElementById("btnResetear");
const btnIncrementar5 = document.getElementById("btnIncrementar5");
const btnDecrementar5 = document.getElementById("btnDecrementar5");
const mensajeElement = document.getElementById("mensaje");

// Cargar valor guardado
let contador = parseInt(localStorage.getItem("contador")) || 0;

// ===============================================
// FUNCIONES
// ===============================================

function actualizarDisplay() {
    contadorElement.textContent = contador;

    // Limpiar clases
    contadorElement.classList.remove("positivo", "negativo", "neutro");
    document.body.classList.remove("bg-positivo", "bg-negativo", "bg-neutro");

    if (contador > 0) {
        contadorElement.classList.add("positivo");
        document.body.classList.add("bg-positivo");
        mensajeElement.innerHTML = `El contador está en <strong>positivo</strong> (+${contador})`;
    } 
    else if (contador < 0) {
        contadorElement.classList.add("negativo");
        document.body.classList.add("bg-negativo");
        mensajeElement.innerHTML = `El contador está en <strong>negativo</strong> (${contador})`;
    } 
    else {
        contadorElement.classList.add("neutro");
        document.body.classList.add("bg-neutro");
        mensajeElement.innerHTML = `El contador está en <strong>cero</strong>`;
    }

    // Guardar
    localStorage.setItem("contador", contador);
}

function incrementar(cantidad = 1) {
    contador += cantidad;
    actualizarDisplay();
}

function decrementar(cantidad = 1) {
    contador -= cantidad;
    actualizarDisplay();
}

function resetear() {
    contador = 0;
    actualizarDisplay();
}

// ===============================================
// EVENTOS
// ===============================================

btnIncrementar.addEventListener("click", () => incrementar());
btnDecrementar.addEventListener("click", () => decrementar());
btnResetear.addEventListener("click", resetear);
btnIncrementar5.addEventListener("click", () => incrementar(5));
btnDecrementar5.addEventListener("click", () => decrementar(5));

// Atajos de teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") incrementar();
    if (e.key === "ArrowDown") decrementar();
    if (e.key === "+") incrementar(5);
    if (e.key === "-") decrementar(5);
    if (e.key === "r" || e.key === "R") resetear();
});

// Inicializar
actualizarDisplay();

console.log("✅ Contador interactivo iniciado");
