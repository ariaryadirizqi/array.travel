// banner slide
const button = document.querySelector('button');
const hero = document.querySelector('.hero')
const interval = 3000

let heroSlide = document.querySelectorAll('.hero-slide')
let index = 1

const firstClone = heroSlide[0].cloneNode(true)
const lastClone = heroSlide[heroSlide.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

hero.append(firstClone)
hero.prepend(lastClone)

const slideWidth = heroSlide[index].clientWidth

hero.style.transform = `translateX(${-slideWidth * index}px)`

const startSlide = () => {
    setInterval(() => {
        index++
        hero.style.transform = `translateX(${-slideWidth * index}px)`
        hero.style.transition = '2s ease-in-out'
    }, interval);
}

startSlide()

hero.addEventListener('transitionend', () => {
    heroSlide = document.querySelectorAll('.hero-slide')

    if (heroSlide[index].id == 'first-clone') {
        hero.style.transition = 'none'
        index = 1
        hero.style.transform = `translateX(${-slideWidth * index}px)`
    }
})

button.addEventListener('click', function () {
    if (window.innerWidth < 600) {
        window.scrollBy(0, 1193);
    } else {
        window.scrollBy(0, 600);
    }
})

// validation
const fullName = document.querySelector('.name')
const email = document.querySelector('.email')
const interest = document.querySelector('.interest')
const submit = document.querySelector('.submit-form')

submit.addEventListener('click', ()=> {
    if (fullName.value == '' || email.value == '' || interest.value == '') {
        alert('Form tidak boleh kosong!')
    } else if (fullName.value.length < 5) {
        alert('Nama kamu minimal lima huruf!')
    } else if(email.value.indexOf('@gmail.com') == -1){
        alert('Format email salah!')
    } else {
        alert('Pesan terkirim!')
    }
})