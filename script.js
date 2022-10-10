// Listen for Submit
document.getElementById("calculadora-al-prestamo").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("resultado").style.display = "none";

  // Show Loader
  document.getElementById("cargando").style.display = "block";

  setTimeout(calcularResultado, 2000);

  e.preventDefault();
});
// Calculate Results
function calcularResultado() {
    // UI Vars
    const monto = document.getElementById("monto");
    const interes = document.getElementById("interes");
    const anios = document.getElementById("anios");
    const pagoMensual = document.getElementById("pago-mensual");
    const pagoTotal = document.getElementById("pago-total");
    const totalInteres = document.getElementById("total-interes");
    
    const principal = parseFloat(monto.value);
    const calculatedInteres = parseFloat(interes.value) / 100 / 12;
    const calculatarPagos = parseFloat(anios.value) * 12;
  
    // Computed Monthly payment
    const x = Math.pow(1 + calculatedInteres, calculatarPagos);
    const mensual = (principal * x * calculatedInteres) / (x - 1);
  
    if (isFinite(mensual)) {
      pagoMensual.value = mensual.toFixed(2);
      pagoTotal.value = (mensual * calculatarPagos).toFixed(2);
      totalInteres.value = (mensual * calculatarPagos - principal).toFixed(2);
  
      // Show Results
      document.getElementById("resultado").style.display = "block";
  
      // Hide Loader
      document.getElementById("cargando").style.display = "none";
    } else {
      showError("Por favor compruebe las entradas numéricas.");
    }
  }
  
  //
  function showError(error) {
    //
    document.getElementById("resultado").style.display = "none";
  
    //
    document.getElementById("cargando").style.display = "none";
  
    //
    const errorDiv = document.createElement("div");
  
    //
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
  
    //
    errorDiv.className = "alert alert-danger";
  
    //
    errorDiv.appendChild(document.createTextNode(error));
  
    //
    card.insertBefore(errorDiv, heading);
  
    //
    setTimeout(clearError, 3000);
  
    //
    function clearError() {
      document.querySelector(".alert").remove();
    }
  }
  function BotonDePrestamo(){
    document.getElementById("Solicita-tu-prestamo").style.background = "#4C60EC";
    document.getElementById("BotonDePrestamo").innerHTML = "¡Listo! en breve recibiras un mail";
    document.getElementById("BotonDePrestamo").style.background = "MediumSeaGreen"; 
  }
  function toggleItemState(){
  }