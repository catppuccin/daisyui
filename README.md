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
  <img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/preview.png"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/latte.png"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/frappe.png"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/macchiato.png"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/catppuccin/daisyui/main/assets/previews/mocha.png"/>
</details>

## Usage

### Installation

| **npm**                            | **pnpm**                        | **yarn**                        |
| ---------------------------------- | ------------------------------- | ------------------------------- |
| npm install -D @catppuccin/daisyui | pnpm add -D @catppuccin/daisyui | yarn add -D @catppuccin/daisyui |

### Configuration

0. Follow the installation instructions for [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) and [daisyUI](https://daisyui.com/docs/install/)

1. Add the plugin to your Tailwind CSS file:

   ```css
   @import 'tailwindcss';
   @plugin 'daisyui';

   @plugin '@catppuccin/daisyui/themes';
   ```

   Done! `latte` is now your default color scheme, and every flavor is registered with daisyUI. For more control, configure the plugin as follows:

   ```css
   @plugin '@catppuccin/daisyui/themes' {
     /* the default flavor */
     default: latte;
     /* accent color applied to every flavor; pick a name from
       https://github.com/catppuccin/palette/blob/07d02aa110ef9eb7e7427afca5c73ba9cf7f8ebd/mod.ts#L18-L32 */
     accent: mauve;
     /* flavors to skip */
     disable: frappe, mocha;
   }
   ```

For finer-grained control, you can use the JavaScript plugin, which requires creating a separate file and importing it as a plugin.

1. Create a separate file such as `catppuccinTheme.latte.ts` and import `@catppuccin/daisyui`

   ```javascript
   import { createCatppuccinPlugin } from '@catppuccin/daisyui'

   export default createCatppuccinPlugin('latte')
   ```

   Your editor's type hints list the available values. See the [example](https://github.com/catppuccin/daisyui/tree/main/example/src) and [source code](https://github.com/catppuccin/daisyui/blob/3184a71fccd40884b6a732758e53f343a3096e59/src/jsPlugin.ts#L10-L18) for details.

2. Import the files you created in your CSS configuration:

   ```css
   @import 'tailwindcss';
   @plugin 'daisyui';

   @plugin "./catppuccinTheme.latte.ts";
   @plugin "./catppuccinTheme.frappe.ts";
   @plugin "./catppuccinTheme.macchiato.ts";
   @plugin "./catppuccinTheme.mocha.ts";
   ```

You can also mix both approaches:

```css
@import 'tailwindcss';
@plugin 'daisyui' {
  themes: false;
}

@plugin '@catppuccin/daisyui/themes' {
  default: latte;
  accent: mauve;
  disable: frappe, mocha;
}

@plugin "./catppuccinTheme.frappe.ts";
@plugin "./catppuccinTheme.mocha.ts";
```

> [!TIP]
> For daisyUI v4, import the required functions from `@catppuccin/daisyui/legacy`. See the [previous guide](https://github.com/catppuccin/daisyui/blob/c03cb0e6eafc3d20c9d85c38a671a937d93a64c8/README.md) for usage details.

#### For CDN

Inspired by daisyUI's CDN usage, each theme ships as a separate file, so you can import a single flavor or combine the ones you need:

```html
<!-- some? -->
<link href="https://cdn.jsdelivr.net/npm/@catppuccin/daisyui@2/latte.css" rel="stylesheet" type="text/css" />
<link
  href="https://cdn.jsdelivr.net/combine/npm/@catppuccin/daisyui@2/latte.css,npm/@catppuccin/daisyui@2/frappe.css"
  rel="stylesheet"
  type="text/css"
/>
<link
  href="https://cdn.jsdelivr.net/combine/npm/@catppuccin/daisyui@2/latte.css,npm/@catppuccin/daisyui@2/macchiato.css"
  rel="stylesheet"
  type="text/css"
/>
<link
  href="https://cdn.jsdelivr.net/combine/npm/@catppuccin/daisyui@2/latte.css,npm/@catppuccin/daisyui@2/mocha.css"
  rel="stylesheet"
  type="text/css"
/>
<!-- every! -->
<link href="https://cdn.jsdelivr.net/npm/@catppuccin/daisyui@2/themes.css" rel="stylesheet" type="text/css" />
```

### Example

Use the following HTML to try the theme:

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

A full example lives in the `example` folder.

### FAQ

#### Themes are not working and I get the wireframe

- Add `default: true` to the final options argument of `createCatppuccinPlugin`:

```ts
export default createCatppuccinPlugin('latte', {}, {
  default: true
})
```

- Alternatively, add an **active** theme controller, for example one matched by the selector `input.toggle.theme-controller[type="checkbox"]:checked`.
- Alternatively, set `data-theme="latte"` on the root HTML element to configure it globally, or let a client-side framework manage the attribute.

#### Do I have to disable all themes from daisyUI?

No, but when using the JavaScript plugin you should still set the default theme through the `createCatppuccinPlugin` options; the CSS plugin handles this for you.

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
