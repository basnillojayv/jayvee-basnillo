Navy footer with the reversed logo, the "A program of" CLAOC credit, two or three link columns, and a legal bar.

```jsx
<Footer logo="assets/logo-white.svg"
  columns={[{ title: 'Navigate', links: [{ label: 'About', href: '/about' }] },
            { title: 'Our Program', links: [{ label: 'Learning', href: '/learning' }] }]}
  social={[{ label: 'LinkedIn', href: '…', icon: <i data-lucide="linkedin" /> }]}
  legal={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
```

No CLAOC logo file was supplied — leave `parentLogo` unset and the name sets in type.
