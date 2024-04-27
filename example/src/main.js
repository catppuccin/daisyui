import './app.css'

document.querySelector('#app').innerHTML = `
<div class="flex gap-3 *:w-1/4">
${
  ['latte', 'frappe', 'macchiato', 'mocha'].map((theme, idx) => /* html */`
<div class="form-control">
  <label class="label cursor-pointer gap-4">
    <span class="label-text">${theme}</span>
    <input type="radio" ${idx === 0 ? 'checked' : ''} name="theme-radios" class="radio theme-controller" value="${theme}"/>
  </label>
</div>`,
).join('\n')}
</div>
`
