function openAlbum(event, album) {
  let tabsContent = document.getElementsByClassName("tabs-content")
  for(let i = 0; i < tabsContent.length; i++) {
    tabsContent[i].style.display = "none"
  }

  let tabsLink = document.getElementsByClassName("tabs-link")
  for (let i = 0; i < tabsLink.length; i++) {
    tabsLink[i].className = tabsLink[i].className.replace(" active", "")
  }

  document.getElementById(album).style.display = "flex"
  event.currentTarget.className += " active"
}

document.getElementById("defaultOpen").click()