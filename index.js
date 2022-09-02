//Selectores, vienen a ser los inputs para configurar el JS. Qué acciones necesito capturar, que son generadas por el usuario desde el doc HTML, y las almaceno en variables.
//Caja principal

const input = document.querySelector("#caja-de-texto"); //variable desde donde obtengo el input del usuario
const btnEncriptar = document.querySelector("#encriptame"); //variable desde donde obtengo el clic del usuario en el botón encriptar
const btnDesencriptar = document.querySelector("#desencriptame"); //variable desde donde obtengo el clic del usuario en el botón desencriptar

//Caja lateral
const inputAEncriptar = document.querySelector("#msj-encriptado"); //variable desde donde obtengo el encriptado, resultado del input del usuario
const btnCopiar = document.querySelector("#copiame"); //variable desde donde obtengo el clic del usuario en el botón copiar



//manipula el dom para que algunos componentes aparezcan y desaparezcan de la pantalla
function home() { //al hacer clic en el logo, como si hiciera clic en recargar
    document.getElementById("con-mensaje").style.display = 'none'; //no se muestra
    document.getElementById("sin-mensaje").style.display = 'block'; //mostrar éste
}


//Elemento oculto al cargar/recargar la página
document.getElementById("con-mensaje").style.display = 'none';


//Verificar lo que el usuario digitó
inputverificar(); //llamado a la función

function inputverificar() {
    var inputPalabra = document.querySelector("#caja-de-texto"); //traigo el input del usuario en la caja ppal
    inputPalabra.addEventListener("keypress", function (e) { //añadir una escucha al presionar una tecla y sumarle una función con parámetro evento ??
        var keyCode = (e.keyCode ? e.keyCode : e.which); //como si fuera un if else. Lo que está antes del signo de pregunta es la condición que va a evaluar, luego lo que está entre el signo de pregunta y los dos puntos va a ser el valor si la condición se confirma y lo que está después de los dos puntos sería la alternativa. var keyCode = ( SI e.keyCode DEVOLVER e.keyCode SINO DEVOLVER e.which); operador condicional ternario
        if (keyCode > 47 && keyCode < 65) { //condición para ciertos valores -números-
            e.preventDefault(); //no deja dichos valores, cancela el evento, sólo permite letras
        }
    });
}


//captura el id en el momento del click y direcciona el programa para el método que encripta el texto
document.getElementById('encriptame').onclick = (e) => {
    e.preventDefault(); //impedir que coloque ciertos caracteres ??
    const inputEncriptado = encriptar(input.value.toLowerCase()); //llama a la función encriptar para que se ejecute y devuelva el resultado.toLowerCase, en minúsculas
    inputAEncriptar.value = inputEncriptado; //en el selector del inicio, caja reveladora, muestro el resultado 
    input.value = ""; //en el selector del inicio, caja ppal, muestro nada
    aparecer(); //jueguito de mostrar o esconder cajas
}

function encriptar(cadenaEncriptada) { //acción a ejecutar sobre el input cuando el usuario hace clic en el botón encriptar
    let clavesDeCodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] // declaro el array con las claves de encriptación
    cadenaEncriptada = cadenaEncriptada.toLowerCase() //transformo el mensaje a encriptar a minúsculas
    for (let i = 0; i < clavesDeCodificacion.length; i++) { //encriptación
        if (cadenaEncriptada.includes(clavesDeCodificacion[i][0])) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(clavesDeCodificacion[i][0], clavesDeCodificacion[i][1])
        }
    }
    return cadenaEncriptada; //devolver mensaje encriptado
}


//manipula el dom para que algunos componentes aparezcan y desaparezcan de la pantalla
function aparecer() { //cambia la caja lateral que se muestra, en este caso, mostrar caja reveladora
    document.getElementById("sin-mensaje").style.display = 'none'; //no se muestra
    document.getElementById("con-mensaje").style.display = 'block'; //mostrar éste
}


//mensaje ya encriptado en caja reveladora, captura el id en el momento del click y hace la validación que copia el texto
document.getElementById('copiame').onclick = (e) => {
    e.preventDefault();
    const inputAEncriptar = document.querySelector("#msj-encriptado"); //traer selector del inicio, ya encriptado
    inputAEncriptar.select(); //seleccionarlo
    navigator.clipboard.writeText(inputAEncriptar.value) //copiar el valor del mensaje
    inputAEncriptar.value = ""; //una vez copiado, dejar de mostrar el valor del mensaje
}


//captura el id en el momento del click y direcciona el programa para el método que desencripta el texto
document.getElementById('desencriptame').onclick = (e) => { //ejecutar este evento al hacer clic en el botón desencriptar (selector inicial) 
    e.preventDefault();
    const inputDesencriptado = desencriptar(input.value); //crea una variable y aloja el resultado de llamar a la función desencriptar
    inputAEncriptar.value = inputDesencriptado; //muestra el msj desencriptado en la caja reveladora
    input.value = ""; //desaparece el mensaje de la caja ppal
    aparecer() //jueguito de mostrar o esconder
}


function desencriptar(cadenaDesencriptada) { //acción a ejecutar cuando el usuario hace clic en el botón desencriptar
    let clavesDeCodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] //las mismas de antes
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase() //crea una variable para guardar el msj desencriptado transformándolo a minúsculas
    for (let i = 0; i < clavesDeCodificacion.length; i++) { //desencriptación
        if (cadenaDesencriptada.includes(clavesDeCodificacion[i][0])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(clavesDeCodificacion[i][1], clavesDeCodificacion[i][0])
        }
    }
    return cadenaDesencriptada; //devolver msj desencriptado
}










