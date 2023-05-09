function moveClock() {
  let momentoActual = new Date();

  let min = momentoActual.getMinutes();
  let hor = momentoActual.getHours();
  let sec = momentoActual.getSeconds();

  let horaImprimible = hor + " : " + min + " : " + sec;

  console.log(horaImprimible);
  document.getElementById("hora").innerHTML = horaImprimible;
}

