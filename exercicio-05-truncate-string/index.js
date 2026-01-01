function truncarString (str, num){
  if(str.length > num){
    return str.slice(0, num) + "..."
  }else{
    return str
  }
}
console.log(truncarString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncarString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncarString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
console.log(truncarString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
console.log(truncarString("A-", 1))
console.log(truncarString("Absolutely Longer", 2))