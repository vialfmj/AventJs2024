function drawRace(indices: number[], length: number): string {
    let result = ''
    indices.forEach((element, index, array) => {
        let newString = ' '.repeat(array.length - index)+('~'.repeat(length) + '/' + (index + 1)  + '\n')        
        if(element > 0)
        newString = newString.substring(array.length - index, element) + 'r' + newString.substring(element, newString.length)
       
        result += newString
    });
    let s = '-------'.at(-1)
    console.log(s)
    return result
  }


  
  const exampleInput8 = {
    indices: [0, 5, -3],
    length: 10
  }

  console.log(drawRace(exampleInput8.indices, exampleInput8.length))