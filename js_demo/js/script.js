//alert('blah blah blah')

function askQuestion() {
  var p = prompt('Who is your favorite Wings of Fire character?')
  if (p != null) {
    document.getElementById('question').innerHTML = 'Cool! ' + p + ' is a great character'
  }
}