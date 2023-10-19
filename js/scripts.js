const btnBorrar = document.getElementById("btn-borrar");
const btnResumen = document.getElementById("btn-resumen");

const fieldForm = document.querySelectorAll(".field-form");

const fieldCantidad = document.getElementById("field-cantidad");
const fieldCategoria = document.getElementById("field-categoria");

const fieldTotal = document.getElementById("field-total");

const precioTicket = 200;

btnBorrar.addEventListener("click", function (evento) {
  fieldForm.forEach((input) => (input.value = ""));
});

btnResumen.addEventListener("click", function (evento) {
  const cantidad = fieldCantidad.value;
  const categoria = fieldCategoria.value;

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
