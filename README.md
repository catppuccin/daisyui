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

| **npm**                            | **pnpm**                        | **yarn**                        |
| ---------------------------------- | ------------------------------- | ------------------------------- |
| npm install -D @catppuccin/daisyui | pnpm add -D @catppuccin/daisyui | yarn add -D @catppuccin/daisyui |

### Configuration

0. Follow the installation instructions for [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) and [Daisy UI](https://daisyui.com/docs/install/)

1. Create a separate file like `catppuccinTheme.latte.ts` and import `@catppuccin/daisyui`

   ```javascript
   import { createCatppuccinPlugin } from '@catppuccin/daisyui'

   export default createCatppuccinPlugin('latte')
   ```

   You can view available values through your editor's type hints. Check [example](https://github.com/catppuccin/daisyui/tree/main/example/src) for additional details.

2. Import the created file in your CSS configuration file

   ```css
   @import 'tailwindcss';
   @plugin "daisyui" {
     themes: false;
   }

   @plugin "./catppuccinTheme.latte.ts";
   @plugin "./catppuccinTheme.frappe.ts";
   @plugin "./catppuccinTheme.macchiato.ts";
   @plugin "./catppuccinTheme.mocha.ts";
   ```

> [!TIP]
> For Daisy UI v4, you can import required functions from `@catppuccin/daisyui/legacy`. For specific usage, refer to the [previous guide](https://github.com/catppuccin/daisyui/blob/c03cb0e6eafc3d20c9d85c38a671a937d93a64c8/README.md).

#### For CDN

Inspired by the CDN usage of Daisy UI, I have separated each theme, allowing you to independently import a single theme or combine the themes you need. See:

```html
<!-- some? -->
<link
  href="https://cdn.jsdelivr.net/npm/@catppuccin/daisyui@2/latte.min.css"
  rel="stylesheet"
  type="text/css"
/>
<link
  href="https://cdn.jsdelivr.net/combine/npm/@catppuccin/daisyui@2/latte.min.css,/npm/@catppuccin/daisyui@2/frappe.min.css"
  rel="stylesheet"
  type="text/css"
/>
<link
  href="https://cdn.jsdelivr.net/combine/npm/@catppuccin/daisyui@2/latte.min.css,/npm/@catppuccin/daisyui@2/macchiato.min.css"
  rel="stylesheet"
  type="text/css"
/>
<link
  href="https://cdn.jsdelivr.net/combine/npm/@catppuccin/daisyui@2/latte.min.css,/npm/@catppuccin/daisyui@2/mocha.min.css"
  rel="stylesheet"
  type="text/css"
/>
<!-- every! -->
<link href="https://cdn.jsdelivr.net/npm/@catppuccin/daisyui@2/themes.min.css" rel="stylesheet" type="text/css" />
```

### Example

You can use the following HTML to test the theme:

```html
<div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-9">
  <button class="btn">Default</button>
  <button class="btn btn-neutral">Neutral</button>
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
