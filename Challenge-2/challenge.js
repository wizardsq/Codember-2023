let suma = 0;
let respuesta = []
function compiler(str){
  for(let i = 0; i< str.length; i++){
    if(str.charAt(i) == '#'){
      suma = suma + 1
    } else if(str.charAt(i) == '@'){
      suma = suma -1
    }else if(str.charAt(i) == '*'){
      suma = suma * suma
    }else{
      respuesta.push(suma)
    }
  }
  return respuesta.join("")
}

compiler("&##&*&@&")