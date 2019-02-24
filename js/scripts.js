function toggleClass (el, className) {
  if (el.classList) {
    el.classList.toggle(className)
  } else {
    var classes = el.className.split(' ')
    var existingIndex = classes.indexOf(className)

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1)
    } else {
      classes.push(className)
    }

    el.className = classes.join(' ')
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var navTrigger = document.querySelector('.NavTrigger')
  navTrigger.addEventListener('click', function (e) {
    e.preventDefault()
    var nav = document.querySelector('.Nav')
    toggleClass(nav, 'is-expanded')
  })
})
