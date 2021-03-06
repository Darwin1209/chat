export function renderDom(query, block): HTMLElement {
  const root = document.querySelector(query)
  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent())
  return root
}
