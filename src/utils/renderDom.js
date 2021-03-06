export function renderDom(query, block) {
  const root = document.querySelector(query)

  console.log(block.getContent())
  console.log(root)
  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent())
  return root
}
