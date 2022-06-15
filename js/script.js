let color = 'black'
let click = true

function populateBoard(size) {
   let board = document.querySelector('.board')
   let squares = board.querySelectorAll("div")
   squares.forEach(div => div.remove())
   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
   board.style.gridTemplateRows = `repeat(${size}, 1fr)`

   let amout = size * size
   for (let i = 0; i < amout; i++) {
      let squere = document.createElement("div")
      squere.addEventListener('mouseover', colorSquere)
      squere.style.backgroundColor = '#efefef'
      board.insertAdjacentElement("beforeend", squere)
   }
}

populateBoard(16)

function changeSize(input) {
   if (input >= 2 && input <= 100) {
      populateBoard(input)
   } else {
      alert('слишком большое число')
   }
}

function colorSquere() {
   if (click) {
      if (color == 'random') {
         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
      }
      else {
         this.style.backgroundColor = color
      }
   }

}

function changeColor(choice) {
   color = choice
}

function resetBoard() {
   let board = document.querySelector('.board')
   let squares = board.querySelectorAll("div")
   squares.forEach(div => div.style.backgroundColor = '#efefef')
}

document.querySelector('body').addEventListener('click', (e) => {
   if (e.target.tagName != 'BUTTON') {
      click = !click
      if (click) {
         document.querySelector('.mode').textContent = 'Мод: активный'
         document.querySelector('.mode').style.color = 'green'
      } else {
         document.querySelector('.mode').textContent = 'Мод: пауза'
         document.querySelector('.mode').style.color = 'red'
      }
   }
})