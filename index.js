const myCarouselWrapper = document.getElementsByClassName('my-carousel-wrapper')[0]
const bgImgs = Array.from(document.getElementsByClassName('bg-img'))

const items = Array.from(myCarouselWrapper.getElementsByClassName('my-carousel-item'))

let current = 0
const len = items.length
const myCarouselItemClassName = 'my-carousel-item'

const myCarouselItem = items[0]
const stepWidth = myCarouselItem.getBoundingClientRect().width

function goDisplay () {
  current = (current + 1) % (len - 1)

  // TODO 计算需要偏移的距离
  const offsetX = -1 * current * stepWidth
  myCarouselWrapper.style.transform = `translateX(${offsetX}px)`

  items.forEach((item, i) => {
    item.className = myCarouselItemClassName
    item.style.transition = 'all .8s ease'
    if (i === (current + 1)) {
      item.classList.add('active')

      bgImgs.forEach((img, i) => {
        img.style.display = 'none'
    
        if (i === (current + 1)) {
          img.style.display = 'block'
        }
      })
    }
  })
}

// let timer = null

// clearInterval(timer)
// timer = setInterval(() => {
//   goDisplay();
// }, 3000)