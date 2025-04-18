import './style.css'

document.querySelector('#app')!.innerHTML = /* html */`
<div class="join join-horizontal w-full *:w-1/4">
${
  ['latte', 'frappe', 'macchiato', 'mocha'].map((theme, idx) => /* html */`
    <input
      type="radio"
      ${idx === 0 ? 'checked' : ''}
      name="theme-buttons"
      class="btn theme-controller join-item"
      aria-label="${theme}"
      value="${theme}" />
  `).join('\n')
}
</div>
`
