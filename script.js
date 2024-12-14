// Fecha del evento
const eventoFecha = new Date('2025-02-22T00:00:00').getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = eventoFecha - ahora;

  // Calcular días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostrar los valores en la página
  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);
