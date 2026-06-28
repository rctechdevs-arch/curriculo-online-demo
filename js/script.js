// BARRA DE PROGRESSO
const progressBar = document.getElementById('progress-bar')
window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight
    progressBar.style.width = (window.scrollY / total * 100) + '%'
})

// MENU MOBILE
const menuToggle = document.getElementById('menuToggle')
const navUl = document.querySelector('#nav ul')
menuToggle.addEventListener('click', () => navUl.classList.toggle('aberto'))
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => navUl.classList.remove('aberto'))
})

// REVEAL + BARRAS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel')
            entry.target.querySelectorAll('.progresso').forEach(barra => {
                barra.style.width = barra.dataset.width
            })
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))