function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById('name').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('input-email').value;
  var password = document.getElementById('input-password').value;
  var social = document.getElementById('input-social').value;
  var firstChar = /([A-Z])[a-z]/;
  var validateEmail = /\w+@\w+\.+[a-z]/;

  if(name===""||lastname===""||email===""||password===""){
    alert("Debe ingresar los campos obligatorios");
    return false;
  }
  else if (!firstChar.test(name)) {
    alert("Debe ingresar un nombre válido y la primera letra debe ser mayúscula");
    return false;
  }
  else if (!firstChar.test(lastname)) {
    alert("Debe ingresar un apellido válido y la primera letra debe ser mayúscula");
    return false;
  }
  else if(!validateEmail.test(email)) {
    alert("Debe ingresar un correo electrónico válido");
    return false;
  }
  else if(password.length<6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return false;
  }
  else if(password==="password" || password==="123456" || password==="098754") {
    alert("Utilice una contraseña segura");
    return false;
  }
}
