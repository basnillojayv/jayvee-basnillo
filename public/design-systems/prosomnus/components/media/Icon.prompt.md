**Icon** — renders a [Lucide](https://lucide.dev) line icon. ProSomnus uses Lucide's soft, rounded 2px-stroke line icons throughout. Load the Lucide UMD script on the page, then:

```jsx
<Icon name="shield-check" size={20} />
<Icon name="moon" size={24} color="var(--color-primary)" />
```

Names are kebab-case Lucide names. `size`, `strokeWidth`, `color` (defaults to `currentColor`).
