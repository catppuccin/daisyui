<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/saadeghi/daisyui">daisyUI</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/daisyui/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/daisyui?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/daisyui/issues"><img src="https://img.shields.io/github/issues/catppuccin/daisyui?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/daisyui/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/daisyui?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/mocha.webp"/>
</details>

## Usage

### Installation

| **npm**                            | **pnpm**                            | **yarn**                            |
| ---------------------------------- | ----------------------------------- | ----------------------------------- |
| npm install -D @catppuccin/daisyui | pnpm install -D @catppuccin/daisyui | yarn install -D @catppuccin/daisyui |

### Configuration

```javascript
// tailwind.config.js
import catppuccin from '@catppuccin/daisyui'

module.exports = {
  content: ['./src/**/*.{js,ts}', 'index.html'],
  plugins: [require('daisyui')],
  daisyui: {
    // Top value under this array will be used as the default theme
    // You can use saadeghi/theme-change to switch between themes
    themes: [
      // You can simply select a catppuccin flavor with sane default colors
      catppuccin('latte'),
      // Or you can optionally specify accent colors
      catppuccin('frappe', 'pink'),
      // Or you can optionally customize more semantic colors
      catppuccin('macchiato', { primary: 'maroon' }),
      // Values not explicitly defined will use default values
      catppuccin('mocha', { primary: 'sky', secondary: 'rosewater' }),
      // Fallback to default theme
      'light',
    ],
  },
};
```

#### Available Catppuccin Flavors

- Latte, Frappe, Macchiato, Mocha

#### Customizable Semantic Colors

- **Optional fields:** primary, secondary, accent, neutral, info

Note: We do not recommend changing any colors other than the `primary` and `accent`, although we provide a way to do so

#### Available Catppuccin Color Values

- **Accent Colors:** rosewater, flamingo, pink, mauve, red, maroon, peach, yellow, green, teal, sky, sapphire, blue, lavender
  - Can be assigned to `primary`, `secondary`, `accent` and `info` semantic color values
- **Monochromatic Colors:** text, subtext1, subtext0, overlay2, overlay1, overlay0, surface2, surface1, surface0, base, mantle, crust
  - Can be assigned to `secondary` and `neutral` semantic colors values

### Example

You can use the following HTML to test the theme:

```html
<div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-8">
  <button class="btn">Default</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-accent">Accent</button>
  <button class="btn btn-info">Info</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-error">Error</button>
</div>
```

You can find the example in the `example` folder.

## 💝 Thanks to

- [Liumingxun](https://github.com/Liumingxun)

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
