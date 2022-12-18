let menuVisible = false;

// Ver o Ocultar el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true
  }
}

  // Oculta menu despues de seleccionar una opción
function seleccionar(){
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// animación barras
function animacionhabilidades(){
  var habilidades = document.getElementById("habilidades");
  var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
  if(distancia_habilidades >= 300){
    let habilidades = document.getElementsByClassName("progreso");

    habilidades[0].classList.add("Kotlin")
    habilidades[1].classList.add("java")
    habilidades[2].classList.add("flutter")
    habilidades[3].classList.add("htmlcss")
    habilidades[4].classList.add("python")
    habilidades[5].classList.add("php")
    habilidades[6].classList.add("javascript")
    habilidades[7].classList.add("mysql")
    habilidades[8].classList.add("comunicacion")
    habilidades[9].classList.add("trabajoequipo")
    habilidades[10].classList.add("puntualidad")
    habilidades[11].classList.add("creativo")
    habilidades[12].classList.add("amable")
    habilidades[13].classList.add("dedicado")
  }
}

window.onscroll = function(){
  animacionhabilidades();
}


function validar(){
  var form = document.form;

  if(form.nombre.value == 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo nombre esta vacio'
    })
    form.nombre.value = "";
    form.nombre.focus();
    return false;
  }

  if(form.telefono.value == 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo telefono esta vacio'
    })
    form.telefono.value = "";
    form.telefono.focus();
    return false;
  }

  if(form.correo.value == 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo correo esta vacio'
    })
    form.correo.value = "";
    form.correo.focus();
    return false;
  }

  if(form.mensaje.value == 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo mensaje esta vacio'
    })
    form.mensaje.value = "";
    form.mensaje.focus();
    return false;
  }

  if(document.querySelector('#submit')){
    addEventListener('click', function(){
      let nombre = document.querySelector('#name').value;
      let telefono = document.querySelector('#phone').value;
      let correo = document.querySelector('#email').value;
      let mensaje = document.querySelector('#message').value;

      let url = "https://api.whatsapp.com/send?phone=5620949905&text=Hola, mi nombre es " + nombre + "%0APonte en contacto conmigo al numero " + telefono + ", o al correo " + correo + "%0AEl motivo de mi mensaje es " + mensaje;

      window.open(url)
    })
  }

}

