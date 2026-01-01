const confirmEnding = (str, substr) => {
    
  let sizeSubstr = substr.length
  str = str.slice(-sizeSubstr)
  if (str.includes(substr)){
    return true
  }
  else{
    return false
  }
}
console.log(confirmEnding("Bastian","n"))
console.log(confirmEnding("Congratulation","on"))
console.log(confirmEnding("Connor","n"))
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
console.log(confirmEnding("He has to give me a new name","name"))
console.log(confirmEnding("Open sesame","same"))
console.log(confirmEnding("Open sesame", "sage"))
console.log(confirmEnding("Open sesame","game"))
console.log(confirmEnding("If you want to save our world, you must hurry.Não sabemos por quanto tempo mais podemos suportar o nada", "montanha"))
console.log(confirmEnding("Abstraction", "action"))