var mail = prompt('Inserisci la tua mail:')

var list = ['gigio@gmail.com', 'luigi@gmail.com', 'marcello@gmail.com', 'luisa@gmail.com', 'elisa@gmail.com']

var confirmed = false

for (var i=0; i<list.length; i++){
  if (mail == list[i]){
    confirmed = true
    break
  }
}

alert(confirmed? 'Accesso consentito':'Accesso Negato')