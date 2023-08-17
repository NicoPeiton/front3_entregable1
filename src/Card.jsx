//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import { useState } from "react";


function Card() {

  const [nombreApe, setNombreApe ] = useState("");
  const [edad, setEdad ] = useState(0);
  const [email, setEmail ] = useState("");

  function handleNombreApe(e){
      setNombreApe(e.target.value);
  }
  
  function handleEdad(e){
      setEdad(e.target.value);
  }

  function handleEmail(e){
      setEmail(e.target.value);
  }

  function registro(e){

      if(nombreApe == "" || email == "" || edad == 0){
          alert("Alguno de los campos está incompleto.");
          e.preventDefault();
      }

      else if(nombreApe.length < 4 || email.length < 7){
          alert("Por favor chequea que la información sea correcta");
          e.preventDefault();
      }
  
      else{
          console.log("Nombre: "+ nombreApe);
          console.log("Edad: "+ edad);
          console.log("Email: "+ email);
          e.preventDefault();
          alert("¡Datos enviados!");
      }
  }

  return(
    <div>
        <h2>Registro de usuario</h2>
        <form onSubmit={registro}>
            <div>
                <input type="text" placeholder="Ingrese su nombre completo" onChange={handleNombreApe}></input>
            </div>
            <div>
              <input type="text" placeholder="Ingrese su email" onChange={handleEmail}></input>
            </div>
            <div>
              <input type="number" placeholder="Ingrese su edad" onChange={handleEdad}></input> 
            </div>
            <div>
                <button type="submit">Registrarse</button>
            </div>
        </form>
    </div>
  );
}

export default Card;
