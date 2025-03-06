function funFact() {
  var p = document.getElementById('fun-fact');
  p.innerHTML= 'I got a skin infection when I was in Pre-K, so I got to ride in a firetruck, watch Frozen, and eat popsicles every day at the hospital. It was very fun! The only minor drawback was that my skin was peeling off and it was rather painful. <br> So, if you would like to ride in a moving firetruck as well, just get really sick and you will almost certainly have your wishes come true :)'
}

function haveRead() {
  var p = document.getElementById
  ('have-read');
  var name = prompt('Who is your favorite character?');
  if (name=='') {
    var name = prompt('Please try again')
    if (name=='') {
      var name = prompt('Please try again')
      if (name=='') {
        var name = prompt('Please try again')
        if (name=='') {
          var name = prompt('Please try again')
          if (name=='') {
            var name = prompt('Please try again')
            if (name=='') {
              var name = prompt('Nevermind')
              if (name==''){
                p.innerHTML= 'OK'
              } else {
                p.innerHTML= 'Cool! ' + name + ' is an amazing character.'
              }       
            } else {
              p.innerHTML= 'Cool! ' + name + ' is an amazing character.'
            }
          } else {
            p.innerHTML= 'Cool! ' + name + ' is an amazing character.'
          }
        } else {
          p.innerHTML= 'Cool! ' + name + ' is an amazing character.'
        }
      } else {
        p.innerHTML= 'Cool! ' + name + ' is an amazing character.'
      }
    } else {
      p.innerHTML= 'Cool! ' + name + ' is an amazing character.'
    }
    
  } else {
    p.innerHTML= 'Cool! ' + name + ' is an amazing character.'
  }
  }

function noRead() {
  var p = document.getElementById('no-read');
  p.innerHTML= '*Sigh*'
}