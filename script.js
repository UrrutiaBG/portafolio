const textArea = document.querySelector(".text-area"); //almacena lo que el usuario escribe
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function validar(){
    let texto = document.querySelector(".text-area").value;
    let validor = texto.match(/^[a-z\s]*$/);

    if(!validor || validor===0){
        alert("Favor de ingresar sólo letras minúscula y SIN acento");
        location.reload();
        return true;
    }
}

function encriptar(stringEncriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matriz.length; i++){
        if(stringDesencriptada.includes(matriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnEncriptar(){
    if(!validar()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;   
        copia.style.display = "block";
    }
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
}
