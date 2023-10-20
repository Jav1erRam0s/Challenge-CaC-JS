const btnBorrar = document.getElementById("btn-borrar");
const btnResumen = document.getElementById("btn-resumen");

const fieldForm = document.querySelectorAll(".field-form");

const fieldCantidad = document.getElementById("field-cantidad");
const fieldCategoria = document.getElementById("field-categoria");

const fieldTotal = document.getElementById("field-total");

const precioTicket = 200;

const msjForm = document.getElementById("msj-form");

btnBorrar.addEventListener("click", function (evento) {
  fieldForm.forEach((input) => (input.value = ""));
  fieldTotal.textContent = 0;
});

btnResumen.addEventListener("click", function (evento) {
  const cantidad = fieldCantidad.value;
  const categoria = fieldCategoria.value;

  // Validacion de campo cantidad

  const cantidadValidacion = parseFloat(cantidad);
  const esEntero = Number.isInteger(cantidadValidacion);

  if (isNaN(cantidadValidacion) || cantidadValidacion < 1 || esEntero == false) {
    mostrarMensaje(true, "⚠️ Cantidad ingresada incorrecta ⚠️");
    return;
  }

  mostrarMensaje(false, "✅ Operacion Exitosa ✅");

  // Calculo de descuento

  const subtotal = cantidad * precioTicket;
  var total;

  switch (categoria) {
    case "Estudiante":
      total = subtotal - subtotal * 0.8;
      break;
    case "Trainee":
      total = subtotal - subtotal * 0.5;
      break;
    case "Junior":
      total = subtotal - subtotal * 0.15;
      break;
  }

  fieldTotal.textContent = total;
});

function mostrarMensaje(error, mensaje) {
  const respuesta = document.createElement("span");
  respuesta.textContent = mensaje;

  if (error) {
    msjForm.classList.add("alert", "alert-danger");
  } else {
    msjForm.classList.add("alert", "alert-success");
  }

  msjForm.appendChild(respuesta);
  setTimeout(() => {
    msjForm.classList.remove("alert", "alert-success", "alert-danger");
    respuesta.remove();
  }, 5000);
}
