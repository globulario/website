// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle')
  var links = document.getElementById('navLinks')

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('nav__links--open')
    })
    // Close menu on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('nav__links--open')
      })
    })
  }

  // Navbar scroll effect
  var nav = document.getElementById('nav')
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled')
    } else {
      nav.classList.remove('nav--scrolled')
    }
  })

  // Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'))
      if (target) {
        e.preventDefault()
        var offset = 80 // nav height
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({ top: top, behavior: 'smooth' })
      }
    })
  })
})
