const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),


form.onsubmit = (e)=>{
  e.preventDefault(); //Impide el envio de la suscripcion
  //si el correo electrónico están en blanco, agregue la clase shake en él; de lo contrario, llame a la función especificada
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();


  setTimeout(()=>{ //eliminar la clase de shake después de 500 ms
    eField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} //llamar a la función checkEmail en la entrada de correo electrónico

  function checkEmail(){ // funcion checkEmail
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Patron para validar el email
    if(!eInput.value.match(pattern)){ //SI el patron no coincide se agrega erorr
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");

      /*si el valor del correo electrónico no está vacío, 
      muestra ingrese un correo electrónico válido de lo contrario, muestre el correo electrónico no puede estar en blanco*/
      (eInput.value != "") ? errorTxt.innerText = "Invalid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //si el patron coincide, elimine el error y agregue una clase válida
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }


  //si eField y pField no contienen errores, eso significa que el usuario completó los detalles correctamente y se envia un mesaje
  if(!eField.classList.contains("error")){
    eField.innerText ="Thanks for signing up, your discount code is olipop10";
  }
}