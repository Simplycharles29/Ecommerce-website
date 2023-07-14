//   responsive nav
let nav = document.querySelector('.nav-details')
let hamBurger = document.querySelector('.toggle')

hamBurger.onclick = () =>{
    nav.classList.toggle('active')
    document.querySelector('.toggle i').classList.toggle('fa-xmark')
}

// countdown
let countDownDate = new Date('Jul 16 2023 00:00:00').getTime()
let x = setInterval(function(){
    let now = new Date().getTime()
    let difference = countDownDate - now

    let days = Math.floor(difference / (1000 * 60 * 60 *24))
    let hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60))
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(difference % (1000 * 60) / (1000))

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    if(difference < 0){
        clearInterval(x)
        document.getElementById('days').innerHTML = '00'
        document.getElementById('hours').innerHTML = '00'
        document.getElementById('minutes').innerHTML = '00'
        document.getElementById('seconds').innerHTML = '00'
    }
    if(difference >= 10){
        document.getElementById('days').innerHTML = '0'+ days
        document.getElementById('hours').innerHTML = '0'+ hours
    }
}, 1000)

// swiper
var swiperCollections = new Swiper(".collections", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
  });

