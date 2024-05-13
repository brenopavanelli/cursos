function carregar() {
   var msg = document.getElementById('msg')
   var img = document.getElementById('img')
   var data = new Date()
   var hora = data.getHours()

   msg.innerHTML = `<p>Agora são ${hora}h</p>`

   if (hora >= 1 && hora <= 12) {
      img.src = 'assets/imgs/manha.png'
      document.body.style.background = '#f3b600'
   } 
   else if (hora >= 13 && hora <= 18) {
      img.src = 'assets/imgs/tarde.png'
      document.body.style.background = '#7d4c37'
   }
   else if (hora >= 18 && hora <= 24) {
      img.src = 'assets/imgs/noite.png'
      document.body.style.background = '#061331'
   }
}