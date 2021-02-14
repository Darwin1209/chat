"use strict"
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.currentTarget).entries())
  console.log(data)
})
