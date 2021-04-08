var mail = prompt('Inserisci la tua mail:')

var list = ['gigio@gmail.com', 'luigi@gmail.com', 'marcello@gmail.com', 'luisa@gmail.com', 'elisa@gmail.com']

for (var i=0; i<list.length; i++){
  if (mail == list[i]){
    alert('Accesso Confermato')
  }else{
    alert('Accesso Negato')
    break
  }
}