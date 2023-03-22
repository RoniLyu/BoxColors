const boxes = document.querySelectorAll('.box')
const btn = document.querySelector('button')
const random255 = () => Math.round(Math.random() * 255)

btn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`
  })
})