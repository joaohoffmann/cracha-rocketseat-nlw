const linksSocialMedia = {
  github: 'joaohoffmann',
  youtube: 'keiozin',
  instagram: 'jp.hoffmann',
  facebook: 'Joao Pedro Jordao',
  twitter: 'TwitterBrasil'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userProfile.textContent = data.login
      userLink.href = data.html_url
    })
}
getGitHubProfileInfos()
