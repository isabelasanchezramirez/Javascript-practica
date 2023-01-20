document.addEventListener('DOMContentLoaded', ()=>{
   //card options
   
   const cardArray=[
    {
        name: 'fries',
        img:'images/'
    },
    {
        name: 'fries',
        img:'images/'
    },

    {
        name: 'cheeseburger',
        img:'images/'
    },
    {
        name: 'cheeseburger',
        img:'images/'
    },
    {
        name: 'hotdog',
        img:'images/'
    },
    {
        name: 'hotdog',
        img:'images/'
    },
    {
        name: 'icecream',
        img:'images/'
    },
    {
        name: 'icecream',
        img:'images/'
    },
    {
        name: 'milkshake',
        img:'images/'
    },{
        name: 'milkshake',
        img:'images/'
    },
    {
        name: 'pizza',
        img:'images/'
    },{
        name: 'pizza',
        img:'images/'
    }

   ]

   const grid= document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
   var cardsChosen= []
   var cardsChosenId = []
   var cardsWon = []

   //create your boRD

   function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
   }

   function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionsOneId = cardsChosenId[0]
    const optionsTwoId = cardsChosenId[1]
    if(cardsChosen[0]=== cardsChosen[1]){
        alert('you found a match')
        cards[optionsOneId].setAttribute('src', 'images/white.png')
        cards[optionsTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionsOneId].setAttribute('src', 'images/blank.png')
        cards[optionsOneId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')

    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if()
   }

   function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
   }

   createBoard()







})