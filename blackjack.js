let result = 0
      let arr = []
      let Win = false
      let gameOn = false
      let declare = ""
      let persay = ""
      let message = document.getElementById("message")
      let sum = document.getElementById("sum")
      let cards = document.getElementById("cards")
      let per = document.getElementById("price")
      
      function startGame(){
      gameOn = true
      let cardOne =numberCard();
      let cardTwo =numberCard();
      result = cardOne + cardTwo
      arr = [cardOne,cardTwo]
      inBuilt()
      per.textContent = persay
      }
      
      function inBuilt(){
      
      cards.textContent = "Cards: "
      for (i=0; i<arr.length; i++){
      cards.textContent += arr[i] + " "
      }
      if (result > 21){
      declare= "Bad luck! Try again"
      gameOn = false
      persay= "Outcome: Oh! So sad, you just lost a fortune."
      }
      else if(result===21){
      declare= "You hit the blackJack!"
      Win = true
      persay= "Outcome: HURRAY!!! You just made 30million." 
      }
      else{
        persay = "Outcome: Continue with faith"
      gameOn=true
      declare= "Draw a new card!"
      }
      message.textContent = declare
      per.textContent= persay
      sum.textContent = "Sum: " + result
      }
      
      function newCard(){
        if(gameOn===true && Win===false){
      let numbers = numberCard()
      result += numbers
      arr.push(numbers)
      inBuilt()
      }
      }
      
      function numberCard(){
      let numberGet = Math.floor(Math.random()*13)+1
      if (numberGet>10){
      return 10
      }else if (numberGet===1){
      return 11
      }else{
      return numberGet
      }
      }