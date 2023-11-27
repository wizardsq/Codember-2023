const result = []
function decrypt(str){
  const pattern = /^(\d+)-(\d+) ([a-z])$/i;
  str.split("\n").forEach((items)=> {
  const part1 = items.split(':')[0].match(pattern)
  const phrase = items.split(':')[1].trim()
  const min = parseInt(part1?.[1])
  const max = parseInt(part1?.[2])
  const letter = part1?.[3]
  const concurrency = phrase.split(letter).length - 1;
   if (!(concurrency >= min && concurrency <= max)) {
      result.push(phrase);
    }
  })
}

decrypt(inputStr)
console.log(result[41])