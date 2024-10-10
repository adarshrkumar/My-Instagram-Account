const iframe = document.querySelector('iframe')
const phonebar = document.querySelector('[phonebar]')

function openApp(app) {
window.parent.querySelector('[phonebar]')
  iframe.setAttribute('src', app + '.html')
  phonebar.setAttribute('onclick', 'closeApp()')
}

function closeApp() {
  back()
/*  iframe.setAttribute('src', '/home.html')
  phonebar.setAttribute('onclick', 'closeApp()')  */
}

function back() {
  alert('Because this is only a one profile Instagram template the back button does not do anything more than this!')
}

function goToPosts() {
  location.href = `/posts.html`
}

function goTo(page) {
  iframe.setAttribute('src', `/${page}.html`)
}