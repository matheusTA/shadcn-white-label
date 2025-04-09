# 🧩 shadcn-white-label

A lightweight utility to enable **white-label theming** in applications built with **ShadCN UI** and **TailwindCSS**.
Easily apply custom branding (colors for light/dark themes) dynamically per user or tenant — ideal for SaaS platforms.

## 🎥 Demonstração

<video controls autoplay>
  <source src="https://github.com/matheusta/shadcn-white-label/raw/main/example/demo.mp4" type="video/mp4">
  Seu navegador não suporta o elemento de vídeo.
</video>

---

## 🚀 Installation

Using npm:

```bash
npm install shadcn-white-label
```

Or with yarn:

```bash
yarn add shadcn-white-label
```

---

## ⚙️ Configuration with **Next.js**

**Wrap your app with `BrandingProvider`**

In your `app/layout.tsx` or `_app.tsx`:

```tsx
import { BrandingProvider } from 'shadcn-white-label';

export default function App({ Component, pageProps }) {
  return (
    <BrandingProvider>
      <Component {...pageProps} />
    </BrandingProvider>
  );
}
```

**Set branding on login (or runtime)**

After login, when you receive the branding config:

```tsx
import { useBranding } from 'shadcn-white-label';

function Login() {
  const { setBranding } = useBranding();

  function handleLogin() {
    const { branding } = LoginService();

    setBranding(branding);
  }

  //...
}
```

---

## ⚙️ Configuration with **Vite**

The setup is nearly the same:

**_Wrap your app with `BrandingProvider` in `main.tsx`:_**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrandingProvider } from 'shadcn-white-label';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrandingProvider>
      <App />
    </BrandingProvider>
  </React.StrictMode>
);
```

3. Use `useBranding()` hook just like in Next.js.

---

## 🖌 Example JSON structure

```json
{
  ":root": {
    "--primary": "#00b894",
    "--background": "#ffffff",
    "--foreground": "#000000"
    ...
  },
  ".dark": {
    "--primary": "#00b894",
    "--background": "#121212",
    "--foreground": "#ffffff"
    ...
  }
}
```

---

## 🧠 Inspiration

This package is inspired by the need for per-tenant customization in multi-tenant SaaS applications using the amazing [ShadCN UI](https://ui.shadcn.dev/).

---

## 📄 License

MIT © [matheusta]
