/* ===============================================
   CONTADOR INTERACTIVO - SOLUCIÓN COMPLETA
   ===============================================
   
   Funcionalidades:
   - Incrementar, decrementar y resetear contador
   - Cambio de color según valor (positivo/negativo/neutro)
   - Botones bonus para +5 y -5
   - Animaciones suaves
   - Persistencia con LocalStorage
   - Mensajes dinámicos
   
   Conceptos aplicados:
   - Selección de elementos del DOM
   - Event Listeners
   - Manipulación de contenido y estilos
   - Condicionales
   - LocalStorage
   =============================================== */

// ===== SELECCIÓN DE ELEMENTOS =====
const contadorElement = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnResetear = document.getElementById("btnResetear");
const btnIncrementar5 = document.getElementById("btnIncrementar5");
const btnDecrementar5 = document.getElementById("btnDecrementar5");
const mensajeElement = document.getElementById("mensaje");
const displayContador = document.querySelector(".contador-display");

let contador = parseInt(localStorage.getItem("contador")) || 0;

function actualizarColores(valor) {
    const v = Math.max(-100, Math.min(100, valor));
    const intensidad = Math.abs(v) / 100;

    let r = 255, g = 255, b = 255;

    if (v > 0) {
        r = Math.round(255 * (1 - intensidad));
        g = 255;
        b = Math.round(255 * (1 - intensidad));
    } else if (v < 0) {
        r = 255;
        g = Math.round(255 * (1 - intensidad));
        b = Math.round(255 * (1 - intensidad));
    }

    const color = `rgb(${r}, ${g}, ${b})`;

    contadorElement.style.color = color;
    displayContador.style.backgroundColor = color;
}

function actualizarMensaje() {
    if (contador > 0) {
        mensajeElement.innerHTML = `El contador está en <strong>positivo</strong> (+${contador})`;
    } else if (contador < 0) {
        mensajeElement.innerHTML = `El contador está en <strong>negativo</strong> (${contador})`;
    } else {
        mensajeElement.innerHTML = `El contador está en <strong>cero</strong>`;
    }
}

function actualizarDisplay() {
    contador = Math.max(-100, Math.min(100, contador));
    contadorElement.textContent = contador;
    actualizarColores(contador);
    actualizarMensaje();
    localStorage.setItem("contador", contador);
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    actualizarDisplay();
});

btnDecrementar.addEventListener("click", () => {
    contador--;
    actualizarDisplay();
});

btnResetear.addEventListener("click", () => {
    contador = 0;
    actualizarDisplay();
});

btnIncrementar5.addEventListener("click", () => {
    contador += 5;
    actualizarDisplay();
});

btnDecrementar5.addEventListener("click", () => {
    contador -= 5;
    actualizarDisplay();
});

actualizarDisplay();


/* ===============================================
   NOTAS EDUCATIVAS
   ===============================================
   
   1. SELECCIÓN DE ELEMENTOS:
      - getElementById(): Más rápido para IDs únicos
      - querySelector(): Más flexible, usa selectores CSS
   
   2. EVENT LISTENERS:
      - addEventListener('evento', función)
      - Separar lógica en funciones reutilizables
   
   3. MANIPULACIÓN DEL DOM:
      - textContent: Para texto simple (más seguro)
      - innerHTML: Para HTML (cuidado con XSS)
      - classList: Para manipular clases CSS
   
   4. CONDICIONALES:
      - if/else: Para lógica binaria o múltiple
      - switch: Para múltiples casos definidos
   
   5. LOCALSTORAGE:
      - localStorage.setItem('clave', 'valor')
      - localStorage.getItem('clave')
      - Solo almacena strings, usar parseInt() para números
   
   6. BUENAS PRÁCTICAS:
      - Nombres descriptivos de variables
      - Funciones pequeñas y enfocadas
      - Comentarios para código complejo
      - Separar lógica de presentación
   
   =============================================== */


