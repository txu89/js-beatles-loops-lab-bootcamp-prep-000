function theBeatlesPlay(musicians, instruments) {
  var array = []
  var sentence = 0
  for (let i = 0; i < musicians.length; i++) {
    for (j = 0; j < instruments.length; j++) {
      array[++sentence] = `"${musicians[i]} plays ${istruments[j]}"`
    }
  }
}