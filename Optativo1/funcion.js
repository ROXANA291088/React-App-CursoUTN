function registro () {
    var Nombre=document.form_registro.nombre.value
    var Apellido=document.form_registro.Apellido.value
    var DNI=document.form_registro.DNI.value
    var Email=document.form_registro.Email.value
    var telefono=document.form_registro.telefono.value
    console.log(nombre,apellido,dni,email,telefono)
        if (nombre=="" &&apellido && dni && email &&telefono){
            document.getElementById("todos_error").innerHTML= "Todos los campos son obligatorio"
        }
          document.getElementById("mensaje").innerHTML="Gracias por Elegirnos"

}

