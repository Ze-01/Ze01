// const list = document.querySelectorAll('.list')
// function activeLink() {
//   list.forEach((item) => item.classList.remove('active'))
//   this.classList.add('active')
// }

// list.forEach((item) => item.addEventListener('click', activeLink))

const lists = document.querySelectorAll('.navigation .list')
const contents = document.querySelectorAll('.content-container .content')

const removeActiveClass = () => {
  lists.forEach((t) => {
    t.classList.remove('active')
  })

  contents.forEach((c) => {
    c.classList.remove('active')
  })
}

lists.forEach((t, i) => {
  t.addEventListener('click', () => {
    removeActiveClass()
    contents[i].classList.add('active')
    t.classList.add('active')
  })
})

// 第一个tab的内部交互
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dargStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

// empties.forEach((empty) => {
//     empty.addEventListener('dragover', dragOver)
//     empty.addEventListener('dragenter', dragEnter)
//     empty.addEventListener('dragleave', dragLeave)
//     empty.addEventListener('drop', dragDrop)
// })

function dargStart() {
  this.className += ' hold'
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
  console.log('enter')
}

function dragLeave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
