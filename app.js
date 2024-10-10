let postsCount = 9
let followerCount = 15
let followingCount = 30

let username = 'RockGamerAK'
let fullName = 'RockGamerAK'
let work = 'Content Creator'
let bio = `<b>Coder</b>, and <b>Owner</b> of <a target="_blank" href="https://WW.RockGamerAK.com"><b>Wonderful Web Wizards</b></a>. In my free time I like to <b>Code</b> and <b>Make Videos</b>.`
let pfp = ''

var pageTitle = window.parent.document.querySelector('title')
var usernameSpan = document.querySelector('[username]')
var pfpElement = document.querySelector('[pfp]')
var postsElement = document.querySelector('[posts]')
var followersElement = document.querySelector('[followers]')
var followingElement = document.querySelector('[following]')
var nameElement = document.querySelector('[fullname]')
var workELement = document.querySelector('[work]')
var bioElement = document.querySelector('[bio]')
var pfpElement = document.querySelector('[pfp]')

pageTitle.innerText = `@${username} | ${pageTitle.innerText}`
usernameSpan.innerText = username
pfpElement.setAttribute('onclick', `openStory('${username}', '${1}'`)
postsElement.innerText = postsCount
followersElement.innerText = followerCount
followingElement.innerText = followingCount
nameElement.innerHTML = '<b>' + ${fullName} + '</b>'
workELement.innerHTML = work
bioElement.innerHTML = bio
pfpElement.innerHTML = pfp

const iframe = document.querySelector('iframe')
const phonebar = window.parent.document.querySelector('[phonebar]')

function openApp(app) {
  window.parent.querySelector('[phonebar]')
  phonebar.setAttribute('onclick', 'closeApp()')
  location.href = `${app}.html`
}

function closeApp() {
  phonebar.setAttribute('onclick', 'closeApp()')
  location.href =   '/home.html'
}