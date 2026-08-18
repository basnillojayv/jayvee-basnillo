Site header — primary logo left, nav items right, exactly one orange Apply button. Hover-revealed dropdown for Our Program.

```jsx
<NavBar logo="assets/logo-primary.svg" activeHref="/" onNavigate={go}
  items={[{ label: 'About', href: '/about' },
          { label: 'Our Program', href: '/our-program', children: [{ label: 'Learning Events', href: '/learning' }] }]}
  cta={{ label: 'Apply', href: '/apply' }} />
```

Active items get an orange underline. The bar is the only fixed element in the system.
