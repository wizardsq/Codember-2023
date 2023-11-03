function countWords(string){
    const words = string.toLowerCase().split(' ')
    let wordsCount = {}
    words.forEach(function(word) {
      if(word in wordsCount){
       wordsCount[word]++
      }else{
        wordsCount[word] = 1
      }              
    })
    return objeto = Object.keys(wordsCount).map((item) => item+wordsCount[item]).join("")
  }
  
  /*
    Descomentar estas lineas y dentro de la funcion pasarle el string que se desea evaluar
    countWords()
  */